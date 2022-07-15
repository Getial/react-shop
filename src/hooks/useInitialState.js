import { useState } from "react";

const initialState = {
  cart: [],
  total: 0
}

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    const item = {
      ...payload,
      id: Math.floor(Math.random() * payload.id * 10)
    }
    setState({
      ...state,
      cart: [...state.cart, item],
      total: state.total + payload.price
    })
  }

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter(item => item.id  !== payload.id ),
      total: state.total - payload.price
    })
  }

  return {
    state,
    addToCart,
    removeFromCart
  }
}

export default useInitialState;