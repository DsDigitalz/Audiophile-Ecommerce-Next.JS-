// convex/schema.ts
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  orders: defineTable({
    // Customer Details
    name: v.string(),
    email: v.string(),
    phone: v.string(),
    // Shipping Details
    address: v.string(),
    zipCode: v.string(),
    city: v.string(),
    country: v.string(),
    // Items and Financials
    items: v.array(
      v.object({
        id: v.string(),
        name: v.string(),
        price: v.number(),
        quantity: v.number(),
      })
    ),
    subtotal: v.number(),
    shipping: v.number(),
    taxes: v.number(),
    grandTotal: v.number(),

    status: v.string(), // e.g., 'Processing', 'Shipped'
  }).searchIndex("by_email", {
    field: "email",
  }),
});
