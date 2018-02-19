import React from 'react';
import { arrayOf, func, shape } from 'prop-types';
import { connect } from 'react-redux';
import { addToBasket } from '../redux/actions';
import { getVisibleProducts } from '../redux/reducers/products';
import SHAPE_OF_PRODUCT from '../components/Product/shape';
import ProductCard from '../components/Product/Card';
import ProductQuantityUpdater from '../components/Product/QuantityUpdater';
import ProductList from '../components/Product/List';

const ProductListContainer = ({ products, doAddToBasket }) => (
  <div>
    <ProductList>
      {products.map(item => (
        <ProductCard
          key={`product-${item.id}`}
          item={item}
          render={() =>
            (item.stock ? (
              <div>
                <ProductQuantityUpdater
                  item={item}
                  ctaText="Add to basket"
                  maxQty={item.stock}
                  onUpdate={quantity => doAddToBasket(item.id, quantity)}
                />
              </div>
            ) : (
              'SOLD OUT'
            ))
          }
        />
      ))}
    </ProductList>
  </div>
);

ProductListContainer.propTypes = {
  products: arrayOf(shape(SHAPE_OF_PRODUCT)).isRequired,
  doAddToBasket: func.isRequired,
};

const mapStateToProps = state => ({
  products: getVisibleProducts(state.products),
});

// prettier-ignore
export default connect(mapStateToProps, { doAddToBasket: addToBasket })(ProductListContainer);
