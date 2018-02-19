import React from 'react';
import { arrayOf, func, shape, string } from 'prop-types';
import { connect } from 'react-redux';
import { checkout, updateInBasket, removeFromBasket } from '../redux/actions';
import { getTotal, getBasketProducts } from '../redux/reducers';
import SHAPE_OF_PRODUCT from '../components/Product/shape';
import ProductCard from '../components/Product/Card';
import ProductQuantityUpdater from '../components/Product/QuantityUpdater';
import ProductList from '../components/Product/List';

const BasketContainer = ({
  products,
  total,
  doCheckout,
  doUpdateInBasket,
  doRemoveFromBasket,
}) => {
  const hasProducts = products.length > 0;
  const nodes = hasProducts ? (
    products.map(product => (
      <ProductCard
        item={product}
        key={product.id}
        render={() => (
          <div>
            <ProductQuantityUpdater
              item={product}
              minQty={0}
              maxQty={product.quantity + product.stock}
              initialQty={product.quantity}
              onUpdate={(quantity) => {
                doUpdateInBasket(
                  product.id,
                  // prettier-ignore
                  quantity,
                  product.stock + (product.quantity - quantity),
                );
              }}
            />
            <hr />
            <button
              onClick={() => doRemoveFromBasket(product.id, product.quantity)}
            >
              Remove from basket
            </button>
          </div>
        )}
      />
    ))
  ) : (
    <p>
      <em>Your basket is empty.</em>
    </p>
  );

  return (
    <div>
      <ProductList>{nodes}</ProductList>

      <div className="row">
        <button
          className="checkout-button"
          onClick={doCheckout}
          disabled={hasProducts ? '' : 'disabled'}
        >
          Checkout now &#36;{total}
        </button>
      </div>

      <style jsx>
        {`
          h1 {
            color: lightgrey;
          }
          .checkout-button {
            width: 100%;
            padding: 20px;
            font-size: 1.1em;
          }
        `}
      </style>
    </div>
  );
};

BasketContainer.defaultProps = {};

BasketContainer.propTypes = {
  products: arrayOf(shape(SHAPE_OF_PRODUCT)).isRequired,
  total: string.isRequired,
  doCheckout: func.isRequired,
  doUpdateInBasket: func.isRequired,
  doRemoveFromBasket: func.isRequired,
};

const mapStateToProps = state => ({
  products: getBasketProducts(state),
  total: getTotal(state),
});

// prettier-ignore
export default connect(mapStateToProps, {
  doCheckout: checkout,
  doUpdateInBasket: updateInBasket,
  doRemoveFromBasket: removeFromBasket,
})(BasketContainer);
