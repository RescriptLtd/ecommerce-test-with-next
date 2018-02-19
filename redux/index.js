import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { getAllProducts } from './actions';

const initStore = () => {
  const middleware = [thunk];
  if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
  }
  const store = createStore(reducer, applyMiddleware(...middleware));
  store.dispatch(getAllProducts());
  return store;
};

export default initStore;
