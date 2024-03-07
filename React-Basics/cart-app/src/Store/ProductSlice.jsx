import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: "Success",
  },
//   reducers: {
//     setProducts(state, action) {
//       return { ...state, data: action.payload };
//     },
//     setStatus(state, action) {
//       return { ...state, status: action.payload };
//     },
//   },
    extraReducers: (builder) => {
      builder
     .addCase(fetchProducts.pending, (state) => {
          return {...state,status:"loading"};
        })
     .addCase(fetchProducts.fulfilled, (state, action) => {
          return {...state,status:"Success", data:action.payload};
        })
     .addCase(fetchProducts.rejected, (state) => {
          return {...state,status:"error"};
        });
    },
});


export const { setProducts, setStatus } = productSlice.actions

export default productSlice.reducer;

// Thunk --> Thunk is a function that that wraps another function;
// export function fetchProducts(dispatch){
//     dispatch(setStatus("loading"));
//     return async function (){
//         try {
//             const result = await axios.get("https://fakestoreapi.com/products");
//             dispatch(setProducts(result.data));
//             dispatch(setStatus("Success"));
//         } catch (error) {
//             dispatch(setStatus("error"));
//         }
        
        
//     }
// }


export const fetchProducts = createAsyncThunk("product",
    async function(){
        const result = await axios.get("https://fakestoreapi.com/products");
        // console.log(result.data);
        return result.data;
    }
);