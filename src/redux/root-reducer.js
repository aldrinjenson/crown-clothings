import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // getting local storage
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";
// import sessionStorage from 'redux-persist/lib/storage/session ' // getting session storage

const persistConfig = {
  // json object listing the configurations we would want for our redux persist
  key: "root", // at what point inside of our reducer object we want to store stuff
  storage: storage,
  whiteList: ["cart"], //  array  consisting of stringed names of the only reducers we want to whitelist, i.e. the reducers we want to persist and store in the storage
}; // no need to persist user, since it'll be automatically done using firebase
// note everything in the above is based on keys in thier stringed forms

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);
