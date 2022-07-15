import React from 'react';
import '@styles/NotFound.scss'

const NotFound = () => {
  return (
    <div className="container">
      <div className='error'>
        <h1>Error</h1>
        <p>4<span>0</span>4</p>
      </div>
      <div className='info'>
        <h2>Page Not Found</h2>
        <button className='primary-button'>Go To Home</button>
      </div>
    </div>
  )
}

export default NotFound