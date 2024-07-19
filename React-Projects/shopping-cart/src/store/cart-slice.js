import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";


const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsList :[],
    totalQuantity: 0,
    showCart: false,
    changed: false
  },
  reducers: {
    addToCart(state, action) { 
      state.changed = true;
      const newItem = action.payload; // new item

      // check if the item already exists in the cart
      const existingItem = state.itemsList.find(
        (item) => item.id === newItem.id
      );

      // if already exists
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else { // if not exists
        state.itemsList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
        });

        // increment total quantity
        state.totalQuantity++;
      }

    },
    removeFromCart(state, action) {
      state.changed = true;
      const id = action.payload;

      const existingItem = state.itemsList.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.itemsList = state.itemsList.filter((item) => item.id !== id);
        state.totalQuantity--;
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
    setShowCart(state) {
      state.showCart = !state.showCart;
    },
    replaceData(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.itemsList = action.payload.itemsList;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;