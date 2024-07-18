import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsList :[],
    totalQuantity: 0,
    showCart: false
  },
  reducers: {
    addToCart(state, action) { 
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
    removeFromCart() { },
    setShowCart(state) {
      state.showCart = true;
    },
  },
});


export const cartActions = cartSlice.actions;
export default cartSlice;