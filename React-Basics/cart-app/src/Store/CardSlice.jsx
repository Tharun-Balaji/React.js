import { createSlice } from "@reduxjs/toolkit";


const cardSlice = createSlice(
    {
        name: "card",
        initialState: [],
        reducers: {
            addToCart(state,action){ // Actions
                return [...state, action.payload]
            },
            removeFromCart(){ // Actions

            }
        }
    }
);


export const { addToCart, removeFromCart} = cardSlice.actions;

export default cardSlice.reducer;