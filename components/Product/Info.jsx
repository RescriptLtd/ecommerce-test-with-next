import React from 'react';
import SHAPE_OF_PRODUCT from './shape';

const ProductInfo = props => (
  <article
    className="product-info"
    itemScope
    itemType="http://schema.org/Product"
  >
    <div>
      <small>
        ID: <span itemProp="sku">{props.id}</span>
      </small>
    </div>
    <hr />
    <strong itemProp="name">{props.name}</strong>
    {props.description !== props.name && (
      <span>
        {' |'} <em itemProp="description">{props.description}</em>
      </span>
    )}
    <hr />
    <div>
      Unit price: <span itemProp="price">£{props.price}</span>
    </div>
    <hr />
    <div>Units in stock: {props.stock}</div>
    <hr />
    <style jsx>
      {`
        .product-info {
        }
        hr {
          border: none;
          border-top: 1px dashed rgba(0, 0, 0, 0.15);
        }
      `}
    </style>
  </article>
);

ProductInfo.defaultProps = {};

ProductInfo.propTypes = SHAPE_OF_PRODUCT;

export default ProductInfo;
