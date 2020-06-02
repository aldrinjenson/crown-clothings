import React from 'react'
import './cart-dropdown.styles.scss'
import CustomButton from '../cutom-button/custom-button.component'
import { connect } from 'react-redux'
import CartItem from '../cart-item/cart-item.component'
import { createStructuredSelector } from 'reselect'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { withRouter } from 'react-router-dom'

const CartDropdown = ({ cartItems, history }) => {
   return (
      <div className='cart-dropdown'>
         <div className="cart-items">
            {cartItems.length ?
               cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
               : <span className="empty-message">Your cart is empty</span>}
         </div>
         <CustomButton onClick={()=>history.push('/checkout')} >GO TO CHECKOUT</CustomButton>
      </div>
   )
}

// const mapStatesToProps = ({ cart: { cartItems } }) => ({
//    cartItems
// })

const mapStatesToProps = createStructuredSelector({
   cartItems: selectCartItems
})
export default withRouter(connect(mapStatesToProps)(CartDropdown))
