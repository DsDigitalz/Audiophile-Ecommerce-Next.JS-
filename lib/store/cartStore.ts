// lib/store/cartStore.ts
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// NOTE: Ensure you have defined your CartItem type in @/types/orderTypes
// Example: export type CartItem = { id: string; name: string; price: number; image: string; quantity: number; };
import { CartItem } from "@/types/orderTypes";

// 🚨 FULLY UPDATED INTERFACE 🚨
interface CartState {
  items: CartItem[];
  total: number;

  // Modal State
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;

  // Cart Actions
  addItem: (item: Omit<CartItem, "quantity">, quantity: number) => void;
  updateQuantity: (itemId: string, newQuantity: number) => void;
  calculateTotal: () => void;
  clearCart: () => void;
}

// Wrap the store in 'persist' to ensure data integrity and fix hydration issues
export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      // --- INITIAL STATE ---
      items: [],
      total: 0,
      isOpen: false, // Default state for modal is closed

      // --- MODAL ACTIONS ---
      openModal: () => {
        // console.log("Modal opening...");
        set({ isOpen: true });
      },
      closeModal: () => {
        // console.log("Modal closing...");
        set({ isOpen: false });
      },

      // --- CART ACTIONS ---
      calculateTotal: () => {
        // Safely calculate total, assuming 'items' is an array.
        const itemsArray = get().items || [];
        const newTotal = itemsArray.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );
        set({ total: newTotal });
      },

      addItem: (item, quantity) => {
        set((state) => {
          // Check if the item already exists in the cart
          const existingItemIndex = (state.items || []).findIndex(
            (i) => i.id === item.id
          );

          if (existingItemIndex > -1) {
            // Item exists: update quantity
            const newItems = [...state.items];
            newItems[existingItemIndex].quantity += quantity;
            // console.log("Item quantity updated:", newItems[existingItemIndex]);
            return { items: newItems };
          } else {
            // Item is new: add to array
            const newItem = { ...item, quantity };
            // console.log("New item added:", newItem);
            return { items: [...state.items, newItem] };
          }
        });

        // Recalculate total immediately after items are updated
        get().calculateTotal();
      },

      updateQuantity: (itemId, newQuantity) => {
        set((state) => {
          // 1. If quantity drops below 1, remove the item
          if (newQuantity < 1) {
            return {
              items: (state.items || []).filter((item) => item.id !== itemId),
            };
          }

          // 2. Otherwise, update the quantity
          const newItems = (state.items || []).map((item) =>
            item.id === itemId ? { ...item, quantity: newQuantity } : item
          );
          return { items: newItems };
        });
        get().calculateTotal();
      },

      clearCart: () => {
        // console.log("Cart cleared.");
        set({ items: [], total: 0, isOpen: false }); // Clear cart and close modal
      },
    }),
    {
      name: "audiophile-cart-storage", // Key used for localStorage
      storage: createJSONStorage(() => localStorage), // Use standard browser localStorage
      // Only persist items and total. Do NOT persist 'isOpen',
      // as the modal should always start closed on a page refresh.
      partialize: (state) => ({ items: state.items, total: state.total }),
    }
  )
);
