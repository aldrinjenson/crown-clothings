import React from 'react'
import './cart-dropdown.styles.scss'
import CustomButton from '../cutom-button/custom-button.component'
import { connect } from 'react-redux'
import CartItem from '../cart-item/cart-item.component'
import { createStructuredSelector } from 'reselect'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { withRouter } from 'react-router-dom'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

const CartDropdown = ({ cartItems, history, dispatch }) => (
   <div className='cart-dropdown'>
      <div className='cart-items'>
         {cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
         ))}
      </div>
      <CustomButton onClick={() => {
         history.push('/checkout');
         dispatch(toggleCartHidden())
      }} >GO TO CHECKOUT</CustomButton>
   </div>
);
// const mapStatesToProps = ({ cart: { cartItems } }) => ({
//    cartItems
// })

const mapStatesToProps = createStructuredSelector({
   cartItems: selectCartItems
})
export default withRouter(connect(mapStatesToProps)(CartDropdown))

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// NOTE: connect function automaticallay gives us the dispatch method in the props whenever the mapDispatchToProps fn() is not supplied in the connect function