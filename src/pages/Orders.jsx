import React from 'react';
import OrderItem from '@components/OrderItem'

const Orders = () => {
  return (
    <div className="Orders">
      <div className="Orders-container">
        <h1 className="title">My Orders</h1>
        <div className="orders-content">
          <OrderItem />
        </div>
      </div>
    </div>
  )
}

export default Orders;