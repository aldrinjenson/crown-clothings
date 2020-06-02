// import { createSelector } from "reselect";

// const selectCart = (state) => state.cart; //input selector
// // input selector gets the state and almost always pulls one layer deep into the whole reducer state
// // Follow the naming convention
// // like this:
// // const selectUser = state.user

// // output selector
// export const selectCartItems = createSelector(
//   [selectCart], //first argument is an array of input selectors and the second argument is going to be a function which returns the value we want from the selector

//   (cart) => cart.cartItems // now this has become a memoized selector
// );

// // now considering the above as another input selector for this one
// export const selectCartItemsCount = createSelector(
//   [selectCartItems],
//   (cartItems) =>
//     cartItems.reduce(
//       // here we are using the cartItem, which we would have got from using the above selector as an input selector
//       (accumulatedQuantity, cartItem) =>
//         accumulatedQuantity + cartItem.quantity,
//       0
//     )
// );

import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart)=> cart.hidden
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);



// const selectCart = state.cart
// const selectUser = state.user

// export const selectCartItems = createSelector(
//   [selectCart, selectUser],
//   (cart,user) => some_function_calculation
// )

// import { createSelector } from "reselect";

// const selectCart = (state) => state.cart;

// export const selectCartItems = createSelector(
//   [selectCart],
//   (cart) => cart.cartItems
// );

// export const selectCartItemsCount = createSelector(
//   [selectCartItems],
//   (cartItems) =>
//     cartItems.reduce((accumulator, el) => accumulator + el.quantity, 0)
// );
