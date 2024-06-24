import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  // items: [
  //   {
  //     id,
  //     title,
  //     price,
  //     image,
  //     quantity,
  //     totalPrice,
  //   },
  // ],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      // payload = item
      state.items.push(action.payload);
    },

    deleteItem: (state, action) => {
      // payload = item.id
      state.items = state.items.filter(
        (cartItem) => cartItem.id !== action.payload,
      );
    },

    increaseItemQuantity: (state, action) => {
      // payload = item.id
      const item = state.items.find(
        (cartItem) => cartItem.id === action.payload,
      );
      item.quantity++;
      item.totalPrice = item.quantity * item.price;
    },
    decreaseItemQuantity: (state, action) => {
      // payload = item.id
      const item = state.items.find(
        (cartItem) => cartItem.id === action.payload,
      );
      item.quantity--;
      item.totalPrice = item.quantity * item.price;
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export default cartSlice.reducer;

export const {
  addItem,
  deleteItem,
  clearCart,
  increaseItemQuantity,
  decreaseItemQuantity,
} = cartSlice.actions;

/*
====================
SELECTORS
====================
*/
export const getCartItemsQuantity = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.quantity, 0);

export const getCartTotalValue = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCartItems = (state) => state.cart.items;
