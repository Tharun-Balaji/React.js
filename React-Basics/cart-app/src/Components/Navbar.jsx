import { Link } from "react-router-dom";
import {  useSelector } from "react-redux";


export default function NavBar(){

  const items = useSelector(
    function(state){
      return state.cart;
    }
  );

  console.log(items);
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          //   padding: "10px",
          // backgroundColor: "#000000",
          //   color: "white",
        }}
      >
        <span className="logo">Redux Store</span>
        <div>
        <Link to="/" className="navLink" >Home</Link>

        <Link to="/cart" className="navLink">Cart</Link>

        <span className="cartCount"> Cart Item : {items.length} </span>
        </div>
      </div>
    );
}