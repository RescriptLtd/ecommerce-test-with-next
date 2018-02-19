import React from 'react';
import Link from 'next/link';
import withRedux from 'next-redux-wrapper';
import initStore from '../redux';
import Head from '../components/Head';
import Nav from '../components/Nav';
import ProductListContainer from '../containers/ProductListContainer';

const PLP = () => (
  <div>
    <Head title="PLP" />
    <Nav />
    <div className="row">
      <h1>Some products</h1>
    </div>

    <ProductListContainer />

    <div className="row">
      <Link href="/basket">
        <a className="view-basket-link" href="/basket">
          View basket
        </a>
      </Link>
    </div>
  </div>
);

export default withRedux(initStore, null)(PLP);
