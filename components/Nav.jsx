import React from 'react';
import Link from 'next/link';
import { number } from 'prop-types';
import { connect } from 'react-redux';
import { getBasketProducts } from '../redux/reducers';

const Nav = ({ productsInBasket }) => (
  <nav>
    <ul>
      <li>
        <Link prefetch href="/">
          <a href="/">Home</a>
        </Link>
      </li>
      <li>
        <Link prefetch href="/basket">
          <a href="/basket">
            Basket <strong>({productsInBasket})</strong>
          </a>
        </Link>
      </li>
    </ul>

    <style jsx>
      {`
        :global(body) {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
            Helvetica, sans-serif;
        }
        nav {
          text-align: center;
          font-size: 1.3em;
        }
        ul {
          max-width: 660px;
          margin: 0 auto;
          display: flex;
          padding: 20px;
          justify-content: space-between;
        }
        li {
          display: flex;
        }
        a {
          color: #067df7;
          text-decoration: none;
        }
      `}
    </style>
  </nav>
);

Nav.propTypes = {
  productsInBasket: number.isRequired,
};

const mapStateToProps = state => ({
  productsInBasket: getBasketProducts(state).reduce(
    (sum, product) => sum + product.quantity,
    0,
  ),
});

export default connect(mapStateToProps, null)(Nav);
