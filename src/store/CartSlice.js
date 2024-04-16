import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  cartItems: [],
  itemsId: [],
  total: 0,
  amount: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      let newItem = state.cartItems.find(
        (item) => item.id === action.payload.id,
      );
      // new item
      if (newItem === undefined) {
        state.cartItems.push({ ...action.payload, amount: 1 });
        return;
      }
      // item already existed
      state.cartItems.map((item) => {
        item.id === newItem.id ? (item.amount += 1) : item.amount;
        return item;
      });
    },
    calculations: (state) => {
      let totalAmount = 0;
      let totalPayment = 0;
      state.cartItems.forEach((item) => {
        totalAmount += item.amount;
        totalPayment += item.amount * item.price;
      });
      state.amount = totalAmount;
      state.total = totalPayment;
    },
    increase: (state, action) => {
      const itemIndex = state.cartItems.indexOf(
        state.cartItems.find((item) => item.id === action.payload),
      );
      state.cartItems[itemIndex].amount += 1;
    },
    decrease: (state, action) => {
      const itemIndex = state.cartItems.indexOf(
        state.cartItems.find((item) => item.id === action.payload),
      );
      state.cartItems[itemIndex].amount -= 1;
    },
    remove: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload,
      );
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export default cartSlice.reducer;
export const {
  addItemToCart,
  calculations,
  increase,
  decrease,
  remove,
  clearCart,
} = cartSlice.actions;
