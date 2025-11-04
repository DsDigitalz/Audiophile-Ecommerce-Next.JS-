// types/orderTypes.ts
export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string; // Used for the cart summary
}

export interface CheckoutFormData {
    // Billing Details
    name: string;
    email: string;
    phone: string;
    // Shipping Info
    address: string;
    zipCode: string;
    city: string;
    country: string;
    // Payment Details
    paymentMethod: 'e-Money' | 'Cash on Delivery';
    eMoneyNumber?: string;
    eMoneyPIN?: string;
}

export interface OrderPayload extends CheckoutFormData {
    items: CartItem[];
    subtotal: number;
    shipping: number;
    taxes: number;
    grandTotal: number;
}