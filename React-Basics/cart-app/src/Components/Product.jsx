import { useEffect, useState } from "react";
import axios from "axios";
import {useDispatch} from "react-redux";
import { addToCart } from "../Store/CardSlice";





export default function Products() {

    const [ products, SetProducts ] = useState([]);
    const dispatch = useDispatch();

    function HandleAddTocart(product){
      dispatch(addToCart(product));
    }

    useEffect(function () {
      axios.get("https://fakestoreapi.com/products").then((response) => {
        SetProducts(response.data);
      });
    }, []);

    if ( !products.length ){
        return <div>Loading...</div>
    }
  return (
    <div className="productsWrapper">
      {products.map((product) => {
        return (
          <div className="card">
            <img src={product.image} alt={product.name} />
            <h6>{product.title}</h6> <h5>{product.price}</h5>
            <button onClick={() => HandleAddTocart(product)} className="btn"> Add to Cart </button>
          </div>
        );
      })}
    </div>
  );
}