import React from 'react'
import { Link } from 'react-router-dom'
import './header.styles.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/user/user.selector'
import { selectCartHidden } from '../../redux/cart/cart.selectors'


const Header = ({ currentUser, hidden }) => {
   return (
      <div className='header'>
         <div className="logo-container">
            <Link to='/'>
               <Logo className='logo' />
            </Link>

         </div>
         <div className="options">
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/shop'>CONTACT</Link>
            {currentUser ? <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div> : <Link to='/signin' className='option'>SIGN IN</Link>}
            <CartIcon />
         </div>
         {hidden ? null : <CartDropdown />}
      </div>
   )
}
// const mapStateToProps = (state) => ({
//    currentUser: state.user.currentUser,
// })

// const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
//    currentUser,
//    hidden
// })

// const mapStateToProps = (state ) => ({
//    currentUser: selectCurrentUser(state) ,
//    hidden:selectCartHidden(state)
// })

//  or

const mapStateToProps = createStructuredSelector({
   // createStructuredSelector will automatically pass the top level state to all the selectors called inside
   currentUser: selectCurrentUser,
   hidden: selectCartHidden
})


export default connect(mapStateToProps, null)(Header)
