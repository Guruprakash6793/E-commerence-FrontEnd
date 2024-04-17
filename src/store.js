import {createStore,combineReducers,compose, applyMiddleware} from "redux";
import {productReducer} from "./reducers/productReducers"
import {cartReducer} from "./reducers/cartReducers"
import {thunk} from "redux-thunk";
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const initialState = {};
const store = createStore(
    combineReducers({
        products:productReducer,
        cart:cartReducer
    }),
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);
export default store;