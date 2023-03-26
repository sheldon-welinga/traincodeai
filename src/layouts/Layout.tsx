import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => (
  <main className="relative mx-auto min-h-screen max-w-screen-xl px-6 sm:px-8 ">
    {children}
  </main>
);

export default Layout;
