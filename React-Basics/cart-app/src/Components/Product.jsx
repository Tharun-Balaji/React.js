import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { addToCart } from "../Store/CardSlice";
import { fetchProducts } from "../Store/ProductSlice";





export default function Products() {

  const {data, status} = useSelector(
    function(state){
      return state.product;
    }
  );

    const [ products, SetProducts ] = useState([]);
    const dispatch = useDispatch();

    function HandleAddTocart(product){
      dispatch(addToCart(product));
    }

    useEffect(function () {
      dispatch(fetchProducts());
    }, []);

    

    if ( status === 'loading' ){
      return <div>Loading...</div>
    }

    if ( status === "error"){
      return <div>OOPs Something went Wrong</div>
    }


  return (
    <div className="productsWrapper">
      {data.map((product) => {
        return (
          <div key={product.id} className="card">
            <img src={product.image} alt={product.name} />
            <h6>{product.title}</h6> <h5>{product.price}</h5>
            <button onClick={() => HandleAddTocart(product)} className="btn"> Add to Cart </button>
          </div>
        );
      })}
    </div>
  );
}