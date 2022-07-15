import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext';
import '@styles/MyOrder.scss';
import arrow from "@icons/flechita.svg";

const MyOrder = ({ toggleOrder, setToggleOrder }) => {
	const { state } = useContext(AppContext);
	console.log(state.cart);

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img onClick={() => setToggleOrder(!toggleOrder)} src={arrow} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{
					state.cart.map(product => (
						<OrderItem product={product} key={`orderItem-${product.id}`}/>
					))
				}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${state.total}</p>
				</div>
				<button className="checkout-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;