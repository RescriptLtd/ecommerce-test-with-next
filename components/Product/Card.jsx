import React from 'react';
import { func, shape } from 'prop-types';
import SHAPE_OF_PRODUCT from './shape';
import ProductInfo from '../Product/Info';

const ProductCard = props => (
  <div className="product-card">
    <ProductInfo {...props.item} />

    {props.render()}

    <style jsx>
      {`
        .product-card {
          flex: 1 0 auto;
          padding: 20px;
          border: 1px solid rgba(0, 0, 0, 0.15);
          box-sizing: border-box;
          text-align: left;
          text-decoration: none;
        }
        .product-card hr {
          border: none;
          border-top: 1px dashed rgba(0, 0, 0, 0.15);
        }
      }
      `}
    </style>
  </div>
);

ProductCard.defaultProps = {
  render: () => null,
};

ProductCard.propTypes = {
  item: shape(SHAPE_OF_PRODUCT).isRequired,
  render: func,
};

export default ProductCard;
