import React from 'react';
import { node } from 'prop-types';

const ProductList = props => (
  <div className="row" itemScope itemType="http://schema.org/ItemList">
    {props.children}
  </div>
);

ProductList.defaultProps = {
  children: null,
};

ProductList.propTypes = {
  children: node,
};

export default ProductList;
