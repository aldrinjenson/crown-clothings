import React from 'react'
import './cart-dropdown.styles.scss'
import CustomButton from '../cutom-button/custom-button.component'
import { connect } from 'react-redux'
import CartItem from '../cart-item/cart-item.component'

const CartDropdown = ({ cartItems }) => {
   return (
      <div className='cart-dropdown'>
         <div className="cart-items">
            {cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)}
         </div>
         <CustomButton>GO TO CHECKOUT</CustomButton>
      </div>
   )
}
const mapStatesToProps = ({ cart: { cartItems } }) => ({
   cartItems
})
export default connect(mapStatesToProps)(CartDropdown)
