import React from 'react';
import '@styles/ProductInfo.scss';
import addToCart from '@icons/bt_add_to_cart.svg';

const ProductInfo = () => {
  return (
    <>
      <img src="https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="bike" />
      <div className="product-info">
        <p>$35</p>
        <p>Bike</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam perferendis aliquam qui veniam delectus nostrum temporibus doloremque autem officia ad, obcaecati architecto voluptates deserunt reprehenderit ab doloribus illo cum veritatis.</p>
        <button className="primary-button add-to-car-button">
          <img src={addToCart} alt="add to cart" />
          Add to cart
        </button>
      </div>
    </>
  )
}

export default ProductInfo