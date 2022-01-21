import {combineReducers, createStore, applyMiddleware, ThunkAction, Action,compose} from '@reduxjs/toolkit';
import  productReducer from "../modules/product_list/productSlice";
import cartReducer from "../modules/productDescription/cartSlice";
import ThunkMiddleware from 'redux-thunk';
declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducer = combineReducers({
    "product":productReducer,
    "cart":cartReducer
});

const middleWares = [ThunkMiddleware];
export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middleWares))
  );
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

