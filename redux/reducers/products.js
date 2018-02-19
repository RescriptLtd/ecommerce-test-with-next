import { combineReducers } from 'redux';
import {
  RECEIVE_PRODUCTS,
  ADD_TO_BASKET,
  REMOVE_FROM_BASKET,
  UPDATE_IN_BASKET,
} from '../constants/ActionTypes';

const products = (state, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      return {
        ...state,
        stock: state.stock - action.quantity,
      };
    case UPDATE_IN_BASKET:
      return {
        ...state,
        stock: action.stock,
      };
    case REMOVE_FROM_BASKET:
      return {
        ...state,
        stock: state.stock + action.quantity,
      };
    default:
      return state;
  }
};

const byId = (state = {}, action) => {
  const { productId } = action;
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        // prettier-ignore
        ...action.products.reduce((obj, product) => ({
          ...obj,
          [product.id]: product,
        }), {}),
      };
    default:
      if (productId) {
        return {
          ...state,
          [productId]: products(state[productId], action),
        };
      }
      return state;
  }
};

const visibleIds = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return action.products.map(product => product.id);
    default:
      return state;
  }
};

export default combineReducers({
  byId,
  visibleIds,
});

export const getProduct = (state, id) => state.byId[id];

export const getVisibleProducts = state =>
  state.visibleIds.map(id => getProduct(state, id));
