import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";


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
    removeFromCart(state, action) {
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
  },
});

export const sendCartData =  (cart) => { 
  return async (dispatch) => {
    dispatch(uiActions.showNotification({
      open: true,
      type: "info",
      message: "Sending request..."
    }));

    const sendRequest = async () => {

      // set state as sending request


      const res = await fetch("https://redux-http-b0a0d-default-rtdb.firebaseio.com/cartItems.json", {
        method: "PUT",
        body: JSON.stringify(cart.itemsList),
      });

      const data = await res.json();

      // set state as successful
      dispatch(uiActions.showNotification({
        open: true,
        type: "success",
        message: "Request sent successfully!"
      }));
    };

    try {
      await sendRequest();
    } catch (error) {
      dispatch(uiActions.showNotification({
        open: true,
        type: "error",
        message: "Sending request failed!"
      }));
    }

  };
};

export const cartActions = cartSlice.actions;
export default cartSlice;