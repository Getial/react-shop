import React from 'react';
import '@styles/MyAccount.scss'

const MyAccount = () => {
  return (
    <div className="MyAccount">
      <div className="MyAccount-container">
        <h1 className="title">My Account</h1>
        <from className="form">
          <div>
            <label htmlFor="name" className="label">Name</label>
            <p className="value">Felipe Getial</p>
            <label htmlFor="email" className="label">Email</label>
            <p className="value">Felipe@example</p>
            <label htmlFor="password"></label>
            <p className="value">************</p>
          </div>
          <input type="submit" value="Edit" className="secondary-button login-button" />
        </from>
      </div>
    </div>
  )
}

export default MyAccount