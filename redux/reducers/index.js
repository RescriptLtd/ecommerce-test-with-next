import { combineReducers } from 'redux';
import basket, * as fromBasket from './basket';
import products, * as fromProducts from './products';

export default combineReducers({
  basket,
  products,
});

const getAddedIds = state => fromBasket.getAddedIds(state.basket);
const getQuantity = (state, id) => fromBasket.getQuantity(state.basket, id);
const getProduct = (state, id) => fromProducts.getProduct(state.products, id);

export const getTotal = state =>
  getAddedIds(state)
    .reduce(
      (total, id) =>
        total + (getProduct(state, id).price * getQuantity(state, id)),
      0,
    )
    .toFixed(2);

export const getBasketProducts = state =>
  getAddedIds(state).map(id => ({
    ...getProduct(state, id),
    quantity: getQuantity(state, id),
  }));
