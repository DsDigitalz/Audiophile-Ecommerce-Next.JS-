// orders.ts (Updated)
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Create a new order
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
    createdAt: v.number(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("orders", args);
  },
});

// List all orders (Newest first)
export const list = query({
  handler: async (ctx) => {
    return await ctx.db.query("orders").order("desc").collect();
  },
});

// Get single order
export const get = query({
  args: { id: v.id("orders") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

// Update order status (e.g., Pending → Shipped)
export const updateStatus = mutation({
  args: {
    id: v.id("orders"),
    status: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, { status: args.status });
  },
});

// Delete order
export const remove = mutation({
  args: { id: v.id("orders") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});
