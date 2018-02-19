import {
  ADD_TO_BASKET,
  REMOVE_FROM_BASKET,
  UPDATE_IN_BASKET,
  CHECKOUT_REQUEST,
  CHECKOUT_FAILURE,
} from '../constants/ActionTypes';

const initialState = {
  addedIds: [],
  quantityById: {},
};

const addedIds = (state = initialState.addedIds, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      if (state.indexOf(action.productId) !== -1) {
        return state;
      }
      return [...state, action.productId];
    case REMOVE_FROM_BASKET:
      return state.filter(id => id !== action.productId);
    default:
      return state;
  }
};

const quantityById = (state = initialState.quantityById, action) => {
  const { productId, quantity } = action;
  switch (action.type) {
    case ADD_TO_BASKET:
      return {
        ...state,
        [productId]: (state[productId] || 0) + quantity,
      };
    case UPDATE_IN_BASKET:
      return {
        ...state,
        [productId]: Math.abs(quantity),
      };
    case REMOVE_FROM_BASKET:
      return {
        ...state,
        [productId]: undefined,
      };
    default:
      return state;
  }
};

export const getQuantity = (state, productId) =>
  state.quantityById[productId] || 0;

export const getAddedIds = state => state.addedIds;

const basket = (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT_REQUEST:
      return initialState;
    case CHECKOUT_FAILURE:
      return action.basket;
    default:
      return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action),
      };
  }
};

export default basket;
