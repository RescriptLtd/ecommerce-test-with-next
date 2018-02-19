import { string, number } from 'prop-types';

const SHAPE_OF_PRODUCT = {
  id: number.isRequired,
  name: string.isRequired,
  description: string.isRequired,
  stock: number.isRequired,
  price: number.isRequired,
};

export default SHAPE_OF_PRODUCT;
