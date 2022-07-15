import React from 'react';
import '@styles/CreateAccount.scss'

const CreateAccount = () => {
  return (
    <div className="CreateAccount">
      <div className="CreateAccount-container">
        <h1 className="title">My Account</h1>
        <form action="/" className="form">
          <div>
            <label htmlFor="name" className="label">Name</label>
            <input type="text" placeholder="Felipe" id="name" className="input input-name" />
            <br />
            <label htmlFor="email" className="label">Email</label>
            <input type="text" placeholder="Felipe@example.com" id="email" className="input input-email" />
            <br />
            <label htmlFor="password" className="label">Password</label>
            <input type="password" placeholder="*******" id="password" className="input input-password" />
            <br />
          </div>
          <input type="submit" value="Create" className="primary-button login-button" />
        </form>
      </div>
    </div>
  )
}

export default CreateAccount