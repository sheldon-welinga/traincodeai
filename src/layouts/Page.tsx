import React from 'react';
import Head from 'next/head';

interface Props {
  title?: string;
  children?: React.ReactNode;
}

const Page: React.FC<Props> = ({ children, title = 'TrainCode AI' }) => (
  <>
    <Head>
      <title>
        {title === 'TrainCode AI' ? title : `${title} | TrainCode AI`}
      </title>
    </Head>

    {children}
  </>
);

export default Page;
