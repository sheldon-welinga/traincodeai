import React from 'react';
import { Head, Html, Main, NextScript } from 'next/document';

import type { NextPage } from 'next';
import type { DocumentProps } from 'next/document';

const Document: NextPage<DocumentProps> = () => (
  <Html lang="en">
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="robots" content="index,follow" />
      <meta name="theme-color" content="#000000" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    </Head>
    <body className="bg-secondary text-white">
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
