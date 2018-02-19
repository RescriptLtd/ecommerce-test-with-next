import React from 'react';
import withRedux from 'next-redux-wrapper';
import initStore from '../redux';
import Head from '../components/Head';
import Nav from '../components/Nav';
import BasketContainer from '../containers/BasketContainer';

const BasketPage = () => (
  <div>
    <Head title="Basket" />
    <Nav />
    <div className="row">
      <h1>Your Basket</h1>
    </div>

    <BasketContainer />
  </div>
);

export default withRedux(initStore, null)(BasketPage);
