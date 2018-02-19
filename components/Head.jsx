import React from 'react';
import NextHead from 'next/head';
import { string } from 'prop-types';

const Head = props => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{props.title || ''}</title>
    <meta name="description" content={props.description} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
    <link rel="icon" href="/static/favicon.ico" />

    <style>
      {`
        h1 {
          margin: 0;
        }
        .row {
          max-width: 660px;
          margin: 20px auto 20px;
          padding: 0 20px;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }
      `}
    </style>
  </NextHead>
);

Head.defaultProps = {
  description: '',
};

Head.propTypes = {
  title: string.isRequired,
  description: string,
};

export default Head;
