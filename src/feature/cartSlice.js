import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
      
      if (find >= 0) {
        state.cart[find].quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseQuantity: (state, action) => {
      let find = state.cart.findIndex((item) => item.id === action.payload);
      if (find >= 0) {
        state.cart[find].quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      let find = state.cart.findIndex((item) => item.id === action.payload);
      if (find >= 0) {
        if (state.cart[find].quantity > 1) {
          state.cart[find].quantity -= 1;
        } else {
          state.cart = state.cart.filter((item) => item.id !== action.payload);
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
