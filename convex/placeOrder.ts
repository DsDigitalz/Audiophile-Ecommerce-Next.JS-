// convex/placeOrder.ts
import { action } from "./_generated/server";
import { api } from "./_generated/api";
import { Id } from "./_generated/data";
import { OrderPayload } from "../types/orderTypes"; // Assuming shared type import
import * as Resend from "resend"; // Use Resend for transactional email

// Initialize Resend
const resend = new Resend.Resend(process.env.RESEND_API_KEY);

export const submitOrder = action({
  args: { payload: v.any() }, // Using v.any() for simplicity, but recommend full schema validation here
  handler: async (ctx, args) => {
    const payload = args.payload as OrderPayload;

    // --- 1. Store Order in Database (using Convex Mutation) ---
    const orderId = await ctx.runMutation(api.orders.create, {
      ...payload,
      status: "Processing",
    });

    // --- 2. Send Confirmation Email ---
    try {
      await resend.emails.send({
        from: "Audiophile <onboarding@resend.dev>", // Replace with your verified domain
        to: payload.email,
        subject: `Order Confirmation #${(orderId as Id<"orders">).id.slice(
          0,
          8
        )}`,
        // 🚨 Use your actual HTML template for pixel perfect email formatting
        html: `
                <h1>Thank You For Your Order, ${payload.name}!</h1>
                <p>Order ID: <strong>#${(orderId as Id<"orders">).id.slice(
                  0,
                  8
                )}</strong></p>
                <p>Grand Total: $${payload.grandTotal.toLocaleString()}</p>
                <a href="YOUR_ORDER_VIEW_LINK">View Your Order</a>
            `,
      });
    } catch (emailError) {
      console.error("Failed to send confirmation email:", emailError);
      // Important: You may want to roll back the database transaction or log this error severely
    }

    return { success: true, orderId: orderId.id };
  },
});

// Create mutation (convex/orders.ts)
export const create = mutation({
  args: {
    /* same as schema fields */
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("orders", args);
  },
});
