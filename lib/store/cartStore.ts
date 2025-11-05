// lib/store/cartStore.ts
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { devtools } from "zustand/middleware"; // <-- Add devtools for debugging (optional but helpful)

// NOTE: Define CartItem type in your external file (e.g., @/types/orderTypes)
// export type CartItem = { id: string; name: string; price: number; image: string; quantity: number; };
import { CartItem } from "@/types/orderTypes";

// 🚨 FULLY UPDATED INTERFACE 🚨
// This interface remains as-is, defining the structure of the state and actions.
interface CartState {
  // We keep 'items' as it aligns with your existing component fix
  items: CartItem[];
  total: number;

  // Modal State
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;

  // Cart Actions
  // Type is correct: Omit<CartItem, "quantity"> ensures we only pass base item data
  addItem: (item: Omit<CartItem, "quantity">, quantity: number) => void;
  updateQuantity: (itemId: string, newQuantity: number) => void;
  // NOTE: calculateTotal can be removed if moved to middleware/selective update
  calculateTotal: () => void;
  clearCart: () => void;
}

// Wrap the store in 'devtools' and 'persist' for enhanced debugging and persistence
export const useCartStore = create<CartState>()(
  devtools(
    // <-- Added devtools for Chrome/Firefox extension debugging
    persist(
      (set, get) => ({
        // --- INITIAL STATE ---
        items: [],
        total: 0,
        isOpen: false, // Default state for modal is closed

        // --- MODAL ACTIONS ---
        openModal: () => {
          set({ isOpen: true }, false, "cart/openModal"); // <-- Added action name for devtools
        },
        closeModal: () => {
          set({ isOpen: false }, false, "cart/closeModal"); // <-- Added action name for devtools
        },

        // --- CART ACTIONS ---
        calculateTotal: () => {
          const itemsArray = get().items; // No need for || [] if type is defined as CartItem[]
          const newTotal = itemsArray.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
          );
          set({ total: newTotal }, false, "cart/calculateTotal");
        },

        addItem: (item, quantity) => {
          let newItems: CartItem[] = [];
          set(
            (state) => {
              const existingItemIndex = state.items.findIndex(
                (i) => i.id === item.id
              );

              if (existingItemIndex > -1) {
                // Item exists: update quantity immutably
                newItems = state.items.map((i, index) =>
                  index === existingItemIndex
                    ? { ...i, quantity: i.quantity + quantity }
                    : i
                );
              } else {
                // Item is new: add to array
                const newItem: CartItem = { ...item, quantity };
                newItems = [...state.items, newItem];
              }

              // We return the state update here (items), and let middleware handle total
              return { items: newItems };
            },
            false,
            "cart/addItem"
          ); // <-- Added action name for devtools

          // Recalculate total immediately after items are updated
          get().calculateTotal();
        },

        updateQuantity: (itemId, newQuantity) => {
          let newItems: CartItem[] = [];
          set(
            (state) => {
              // 1. If quantity drops below 1, remove the item
              if (newQuantity < 1) {
                newItems = state.items.filter((item) => item.id !== itemId);
                return { items: newItems };
              }

              // 2. Otherwise, update the quantity immutably
              newItems = state.items.map((item) =>
                item.id === itemId ? { ...item, quantity: newQuantity } : item
              );
              return { items: newItems };
            },
            false,
            "cart/updateQuantity"
          ); // <-- Added action name for devtools

          get().calculateTotal();
        },

        clearCart: () => {
          // Clear cart and close modal in one step
          set({ items: [], total: 0, isOpen: false }, false, "cart/clearCart");
        },
      }),
      {
        name: "audiophile-cart-storage", // Key used for localStorage
        storage: createJSONStorage(() => localStorage), // Use standard browser localStorage
        // Only persist items and total.
        partialize: (state) => ({ items: state.items, total: state.total }),
      }
    ),
    { name: "Audiophile Cart Store" } // <-- Devtools name
  )
);
