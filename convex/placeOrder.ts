// placeOrder.ts - Fully updated and TypeScript-safe
import { action, mutation } from "./_generated/server";
import { v } from "convex/values";
import * as Resend from "resend";

// Initialize Resend
const resend = new Resend.Resend(process.env.RESEND_API_KEY!);

// --- Mutation: save order to Convex DB ---
export const saveOrder = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    phone: v.string(),
    items: v.array(
      v.object({
        id: v.string(),
        name: v.string(),
        price: v.number(),
        quantity: v.number(),
        image: v.optional(v.string()),
      })
    ),
    subtotal: v.number(),
    shipping: v.number(),
    taxes: v.number(),
    grandTotal: v.number(),
    status: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("orders", {
      ...args,
      createdAt: Date.now(),
    });
  },
});

// --- Action: place order and send confirmation email ---
export const placeOrder = action({
  args: {
    payload: v.object({
      name: v.string(),
      email: v.string(),
      phone: v.string(),
      items: v.array(
        v.object({
          id: v.string(),
          name: v.string(),
          price: v.number(),
          quantity: v.number(),
          image: v.optional(v.string()),
        })
      ),
      subtotal: v.number(),
      shipping: v.number(),
      taxes: v.number(),
      grandTotal: v.number(),
    }),
  },
  handler: async (ctx, args) => {
    const payload = args.payload;

    // ✅ Save order using ctx.runMutation to fix TypeScript issues
    const orderId = await ctx.runMutation(saveOrder, {
      ...payload,
      status: "pending",
    });

    // ✅ Send confirmation email
    await resend.emails.send({
      from: "Audiophile Shop <noreply@audiophile.com>",
      to: payload.email,
      subject: "Order Confirmation - Thank you!",
      html: `
        <h2>Thank you for your order, ${payload.name}!</h2>
        <p>Your order ID is <strong>${orderId}</strong>.</p>
        <p>We are processing your order and will notify you once it ships.</p>

        <h3>Order Summary:</h3>
        <ul>
          ${payload.items
            .map(
              (item) => `
            <li>
              ${item.name} x${item.quantity} - $${item.price * item.quantity}
            </li>`
            )
            .join("")}
        </ul>

        <p><strong>Subtotal:</strong> $${payload.subtotal}</p>
        <p><strong>Shipping:</strong> $${payload.shipping}</p>
        <p><strong>Taxes:</strong> $${payload.taxes}</p>
        <p><strong>Grand Total:</strong> <strong>$${payload.grandTotal}</strong></p>

        <br />
        <p>If you have questions, just reply to this email.</p>
        <p><strong>Audiophile Team</strong></p>
      `,
    });

    return { success: true, orderId };
  },
});
