import React from 'react';
import Head from 'next/head';

import { baseConfig } from '@/lib/config/base.config';
import { PRODUCTION_WEB_URL } from '@/lib/constants';
import Navbar from '@/layouts/Navbar';

import 'tailwindcss/tailwind.css';
import '@/assets/scss/main.scss';

import type { AppProps } from 'next/app';
import type { NextPage } from 'next';
import Layout from '@/layouts/Layout';

interface Props extends AppProps {}

const TrainCodeWebApp: NextPage<Props> = ({ Component, pageProps }) => {
  const isProd = baseConfig.NODE_ENV === 'production';
  const URL = isProd ? PRODUCTION_WEB_URL : baseConfig.WEB_URL;

  return (
    <div>
      <Head>
        <title>TrainCode AI</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="TrainCode AI" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="An AI that trains on code files and generates new code features based on trained code"
        />
        <meta property="og:url" content={URL} />
        <meta property="og:image" content={`${URL}/favicon.png`} />
      </Head>

      <Layout>
        <Navbar />
        <Component {...pageProps} />
      </Layout>
    </div>
  );
};

export default TrainCodeWebApp;
