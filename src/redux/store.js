import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist"; // allows the browser to cache our store depending on certain configurations we will write
import logger from "redux-logger";
import rootReducer from "./root-reducer";

const middleWares = [logger];

// const store = createStore(rootReducer, applyMiddleware(logger));
// or
const store = createStore(rootReducer, applyMiddleware(...middleWares));

const persistor = persistStore(store);

export { store, persistor };
