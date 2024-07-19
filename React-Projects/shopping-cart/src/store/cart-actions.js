import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const fetchData = () => { 

  return async (dispatch) => { 

    const fetchHandler = async () => { 

      const res = await fetch("https://redux-http-b0a0d-default-rtdb.firebaseio.com/cartItems.json");
      const data = await res.json();
      return data;
    };

    try {
      
      const cartData = await fetchHandler();
      dispatch(cartActions.replaceData(cartData));
      
    } catch (error) {
      
      dispatch(uiActions.showNotification({
        open: true,
        type: "error",
        message: "Sending request failed!"
      }));

    }

  };
};


export const sendCartData = (cart) => {
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