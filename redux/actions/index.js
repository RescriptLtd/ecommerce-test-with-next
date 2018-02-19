import api from '../../api';
import * as types from '../constants/ActionTypes';

const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products,
});

export const getAllProducts = () => (dispatch) => {
  api.getProducts((products) => {
    dispatch(receiveProducts(products));
  });
};

export const addToBasket = (productId, quantity) => (dispatch, getState) => {
  if (getState().products.byId[productId].stock + quantity >= 0) {
    dispatch({
      type: types.ADD_TO_BASKET,
      productId,
      quantity,
    });
  }
};

export const removeFromBasket = (productId, quantity) => (dispatch) => {
  dispatch({
    type: types.REMOVE_FROM_BASKET,
    productId,
    quantity,
  });
};

export const updateInBasket = (productId, quantity, stock) => (
  dispatch,
  getState,
) => {
  if (getState().products.byId[productId].stock !== stock) {
    dispatch({
      type: types.UPDATE_IN_BASKET,
      productId,
      quantity,
      stock,
    });
  }

  if (quantity === 0) {
    dispatch(removeFromBasket(productId, quantity));
  }
};

export const checkout = products => (dispatch, getState) => {
  const { basket } = getState();

  dispatch({
    type: types.CHECKOUT_REQUEST,
  });
  api.checkout(products, () => {
    dispatch({
      type: types.CHECKOUT_SUCCESS,
      basket,
    });
    // Replace the line above with line below to rollback on failure:
    // dispatch({ type: types.CHECKOUT_FAILURE, basket })
  });
};
