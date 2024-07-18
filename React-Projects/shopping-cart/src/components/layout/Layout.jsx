import React from "react";
import Header from "../header/Header";
import Products from "../products/Products";
import "./Layout.css";
import CartItems from "../cartItems/CartItems";
import { useSelector } from "react-redux";
const Layout = () => {
	let total = 100;
	const showCard = useSelector((state) => state.cart.showCart);

	return (
		<React.Fragment>
			<div className="layout">
				<Header />
				<Products />
				{ showCard && <CartItems />}
				<div className="total-price">
					<h3>Total: ${total}</h3>
					<button className="orderBtn">Place Order</button>
				</div>{" "}
			</div>
		</React.Fragment>
	);
};

export default Layout;
