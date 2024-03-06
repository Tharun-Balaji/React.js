import { Link } from "react-router-dom";


export default function NavBar(){
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
        <Link to="/" className="navLink" >Home</Link>

        <Link to="/cart" className="navLink">Cart</Link>

        <span className="cartCount"> Cart Item : 0 </span>
      </div>
    );
}