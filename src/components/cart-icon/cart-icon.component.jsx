import React from 'react'
import './cart-icon.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'

const CartIcon = ({ toggleCartHidden, itemCount }) => {
   // console.log('being called') // this will now be called only when the component rerenders
   return (
      <div className="cart-icon" onClick={toggleCartHidden} >
         <ShoppingIcon className='shopping-icon' />
         <span className="item-count">{itemCount}</span>
      </div>
   )
}
const mapStateToProps = createStructuredSelector({
   itemCount: selectCartItemsCount
})

// const mapStateToProps = state => {
//    return ({
//       // without memoization:
//       //  itemCount: cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
//       itemCount: selectCartItemsCount(state) // with memoization
//    })
// }
// mapStateToProps will cause the whole component to rerender whenever any part of the global state changes
// However, this will cause performance issues and as a result we opt for memoixzation methouds using the reselct library.
// the selectCartItemsCount checks whether at the time of rerendering if the value obtained before and after state change are same and if it is same, then a new object is not returned like shown above and hence the component is not rerendered

const mapDispatchToProps = dispatch => ({
   toggleCartHidden: () => dispatch(toggleCartHidden())
})


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
