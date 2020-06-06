import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
   const priceForStripe = price * 1000
   const publishableKey = 'pk_test_51Gr3ccHsRxSgagWsVoUxp4lLye2JjivcWKJXNhcWlLh4q3ErVEVHS1GFTwGPYURPqNSvYJ7j4X6OJZnjqHRJOm9q00sQtEC89q'

   const onToken = (token) => {
      console.log(token)
      alert('Payment Successfull')
   }

   return (
      <StripeCheckout
         label='Pay Now'
         name='CRWN Clothing Ltd.'
         billingAddress
         shippingAddress
         // image='https://sendeyo.com/up/d/f3eb2117da'
         image={require('../../assets/stripe-header.svg')}
         description={`Your total is $${price}`}
         amount={priceForStripe}
         panelLabel='Pay Now'
         token={onToken} // what happens when we click submit and get the token
         stripeKey={publishableKey}
      />
   )
}

export default StripeCheckoutButton
