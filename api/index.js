import products from './products.json';

export default {
  getProducts: callback => setTimeout(() => callback(products), 150),
  checkout: (basket, callback) => setTimeout(() => callback(), 150),
};
