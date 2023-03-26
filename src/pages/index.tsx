import React from 'react';

import Page from '@/layouts/Page';
import HomeModule from '@/modules/home';

import type { NextPage } from 'next';

interface Props {}

const HomePage: NextPage<Props> = () => (
  <Page>
    <HomeModule />
  </Page>
);

export default HomePage;
