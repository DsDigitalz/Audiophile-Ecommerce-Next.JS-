// convex/placeOrder.ts
import { action, mutation, v } from "./_generated/server";
import { api } from "./_generated/api";
import { Id } from "./_generated/data";
import { OrderPayload } from "../types/orderTypes";
import * as Resend from "resend";

// --- Initialize Resend ---
const resend = new Resend.Resend(process.env.RESEND_API_KEY!);

// --- Submit Order Action ---
export const submitOrder = action({
  args: {
    payload: v.any(), // ✅ For now, but prefer strict schema below
  },
  handler: async (ctx, args) => {
    const payload = args.payload as OrderPayload;

    // --- 1. Store Order in Database ---
    const orderId = await ctx.runMutation(api.orders.create, {
      ...payload,
      status: "Processing",
      createdAt: Date.now(),
    });

    // --- 2. Send Confirmation Email ---
    try {
      await resend.emails.send({
        from: "Audiophile <onboarding@resend.dev>", // ⚠️ Must be a verified domain in Resend
        to: payload.email,
        subject: `Order Confirmation #${(orderId as Id<"orders">).id.slice(0, 8)}`,
        html: `
          <div style="font-family:Arial,sans-serif;padding:20px;">
            <h1>Thank you for your order, ${payload.name}!</h1>
            <p>Your order has been received and is now being processed.</p>
            <p><strong>Order ID:</strong> #${(orderId as Id<"orders">).id.slice(0, 8)}</p>
            <p><strong>Grand Total:</strong> $${payload.grandTotal.toLocaleString()}</p>
            <p><a href="https://yourdomain.com/orders/${(orderId as Id<"orders">).id}" 
                  style="color:#D87D4A;text-decoration:none;">View Your Order</a></p>
          </div>
        `,
      });
    } catch (emailError) {
      console.error("❌ Failed to send confirmation email:", emailError);
      // Optional: log or trigger alert here
    }

    return { success: true, orderId: (orderId as Id<"orders">).id };
  },
});

// --- Orders Mutation ---
export const create = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    items: v.array(v.object({ id: v.string(), quantity: v.number() })),
    grandTotal: v.number(),
    status: v.string(),
    createdAt: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("orders", args);
  },
});
