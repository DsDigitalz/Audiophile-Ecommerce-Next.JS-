import { action } from "./_generated/server";
import { v } from "convex/values";
import { api } from "./_generated/api";
import type { Id } from "./_generated/dataModel";
import type { OrderPayload } from "../types/orderTypes";
import * as Resend from "resend";

// Initialize Resend
const resend = new Resend.Resend(process.env.RESEND_API_KEY!);

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

  // ------- HANDLER -------
  handler: async (
    ctx,
    args
  ): Promise<{ success: boolean; orderId: string }> => {
    const payload: OrderPayload = args.payload;

    // Save order to DB
    const orderId = await ctx.runMutation(api.orders.create, {
      ...payload,
      status: "Processing",
      createdAt: Date.now(),
    });

    // Email sending
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
          </div>
        `,
      });
    } catch (err) {
      console.error("❌ Email send failed:", err);
    }

    return {
      success: true,
      orderId: (orderId as Id<"orders">).id,
    };
  },
});
