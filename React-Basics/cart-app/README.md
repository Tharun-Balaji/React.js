
# Shopping Cart App

This is a simple e-commerce shopping cart application built with ReactJS, `Redux`, and `react-router-dom`. The app fetches a list of items from the [Fake Store API](https://fakestoreapi.com/) and allows users to add or remove items from their cart. It features complex state management using Redux and asynchronous data fetching with Redux Thunk.

## 🌐 Links
- **Demo**: [Redux Cart App](https://tharun-balaji.github.io/redux-cart-app/)
- **Source Code**: [GitHub Repository](https://github.com/Tharun-Balaji/React.js/tree/main/React-Basics/cart-app)

## 📸 Preview

![home page](image.png)
![key page](image-1.png)

## 🌟 Features

- **Browse Products**: Loads a list of items from Fake Store API.
- **Add to Cart**: Users can add products to their cart.
- **Remove from Cart**: Users can remove items from their cart.
- **State Management with Redux**: Handles complex state efficiently.
- **Asynchronous Data Fetching**: Uses Redux Thunk to fetch items from an API.

## 🛠️ Technologies Used

- **ReactJS**: For building the user interface.
- **Redux**: For state management.
- **Redux Thunk**: For handling asynchronous actions.
- **React Router DOM**: For navigating between pages.
- **JavaScript (ES6+)**: Core language for logic and interactivity.

## 📂 Project Structure

```plaintext
project-root/
├── public/
│   ├── index.html
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   ├── ProductList/
│   │   ├── Cart/
│   ├── redux/
│   │   ├── store.js
│   │   ├── slices/
│   │       ├── cartSlice.js
│   │       ├── productSlice.js
│   ├── App.js
│   ├── index.js
│   ├── styles/
│       ├── global.css
│   └── assets/ (for images, icons, etc.)
├── .gitignore
├── package.json
└── README.md
```

## 🚀 Getting Started

To run this project locally, follow these steps:

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed.

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/Tharun-Balaji/redux-cart-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd redux-cart-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Project

```bash
npm start
```

The app should now be running on [http://localhost:3000](http://localhost:3000).

## 🧪 Redux Store Configuration
### `store.js`
The Redux store is configured using `configureStore` from Redux Toolkit:
```javascript
import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./CardSlice"
import productReducer from "./ProductSlice";

const store = configureStore({
    reducer:{
        cart: cartReducer,
        product: productReducer
    }
})

export default store;
```

### `ProductSlice.js`
This slice manages product-related state and handles asynchronous product fetching:
```javascript
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: "Success",
  },
  extraReducers: (builder) => {
    builder
     .addCase(fetchProducts.pending, (state) => {
          return {...state, status: "loading"};
        })
     .addCase(fetchProducts.fulfilled, (state, action) => {
          return {...state, status: "Success", data: action.payload};
        })
     .addCase(fetchProducts.rejected, (state) => {
          return {...state, status: "error"};
        });
  },
});

export const fetchProducts = createAsyncThunk("product",
    async function(){
        const result = await axios.get("https://fakestoreapi.com/products");
        return result.data;
    }
);

export default productSlice.reducer;
```

### `CardSlice.js`
This slice manages cart-related state:
```javascript
import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: "card",
    initialState: [],
    reducers: {
        addToCart(state, action){ 
            return [...state, action.payload]
        },
        removeFromCart(state, action){ 
            return state.filter(
                function(items){
                    return items.id !== action.payload;
                }
            )
        }
    }
});

export const { addToCart, removeFromCart } = cardSlice.actions;
export default cardSlice.reducer;
```

## 🧠 Key Concepts
- **Redux Toolkit**: Simplifies Redux setup and reduces boilerplate code.
- **Async Thunks**: Handle asynchronous logic for data fetching.
- **Immutable State Updates**: Using spread operator and filter for state modifications.

## 📬 Contact
Feel free to reach out for questions or collaboration via [tharunbalaji110@gmail.com](mailto:tharunbalaji110@gmail.com).