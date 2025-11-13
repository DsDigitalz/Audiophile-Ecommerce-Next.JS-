import { action, mutation } from "./_generated/server";
import { v } from "convex/values";
import { api } from "./_generated/api";
import { Id } from "./_generated/dataModel"; // ✅ Correct import
import type { OrderPayload } from "../types/orderTypes";
import * as Resend from "resend";

// --- Initialize Resend ---
const resend = new Resend.Resend(process.env.RESEND_API_KEY!);

// --- Create Order Mutation ---
export const create = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    items: v.array(
      v.object({
        id: v.string(),
        name: v.string(),
        price: v.number(),
        quantity: v.number(),
        image: v.optional(v.string()),
      })
    ),
    grandTotal: v.number(),
    status: v.string(),
    createdAt: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const orderId = await ctx.db.insert("orders", args);
    return orderId;
  },
});

// --- Submit Order Action ---
export const submitOrder = action({
  args: {
    payload: v.object({
      name: v.string(),
      email: v.string(),
      grandTotal: v.number(),
      items: v.array(
        v.object({
          id: v.string(),
          name: v.string(),
          price: v.number(),
          quantity: v.number(),
          image: v.optional(v.string()),
        })
      ),
    }),
  },
  handler: async (ctx, args) => {
    const payload = args.payload satisfies OrderPayload;

    // --- 1. Store Order in Database ---
    const orderId = await ctx.runMutation(api.orders.create, {
      ...payload,
      status: "Processing",
      createdAt: Date.now(),
    });

    // --- 2. Send Confirmation Email ---
    try {
      await resend.emails.send({
        from: "Audiophile <onboarding@resend.dev>",
        to: payload.email,
        subject: `Order Confirmation #${(orderId as Id<"orders">).id.slice(0, 8)}`,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 24px; color: #111;">
            <h1 style="color: #D87D4A;">Thank you for your order, ${payload.name}!</h1>
            <p>Your order has been received and is being processed.</p>
            <p><strong>Order ID:</strong> #${(orderId as Id<"orders">).id.slice(0, 8)}</p>
            <p><strong>Total:</strong> $${payload.grandTotal.toLocaleString()}</p>
            <ul>
              ${payload.items
                .map(
                  (item) =>
                    `<li>${item.quantity}× ${item.name} — $${item.price.toLocaleString()}</li>`
                )
                .join("")}
            </ul>
            <p style="margin-top:16px;">
              <a href="https://yourdomain.com/orders/${
                (orderId as Id<"orders">).id
              }" style="color:#D87D4A;text-decoration:none;">View your order</a>
            </p>
          </div>
        `,
      });
    } catch (err) {
      console.error("❌ Email send failed:", err);
    }

    // --- 3. Return Order Info to Client ---
    return { success: true, orderId: (orderId as Id<"orders">).id };
  },
});
