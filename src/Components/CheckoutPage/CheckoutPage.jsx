import React from 'react'
import BtnCheckoutPage from './BtnCheckoutPage'

const CheckoutPage = () => {
    const currency = "MXN";
  return (
    <div>
        <h1>CheckoutPage</h1>
        <BtnCheckoutPage 
        currency={currency}
        showSpinner={false}
        />
    </div>
  )
}

export default CheckoutPage