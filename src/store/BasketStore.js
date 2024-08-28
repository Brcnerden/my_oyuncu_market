import { create } from 'zustand';


const useCartStore = create((set) => ({
  cart: [],
  addToCart: (item) => set((state) => {
    const existingItemIndex = state.cart.findIndex((cartItem) => cartItem.id === item.id);
    if (existingItemIndex > -1) {
      const newCart = [...state.cart];
      newCart[existingItemIndex].quantity += item.quantity;
      return { cart: newCart };
    }
    return { cart: [...state.cart, { ...item, quantity: item.quantity || 1 }] };
  }),
  removeFromCart: (itemId) => set((state) => ({
    cart: state.cart.filter((item) => item.id !== itemId),
  })),
  clearCart: () => set({ cart: [] }),
}));

export default useCartStore;