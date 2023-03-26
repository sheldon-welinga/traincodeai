import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import GitHubIcon from '@/components/icons/GithubIcon';
import { GITHUB_LINK } from '@/lib/constants';

import Logo from '@/assets/images/logo.png';

const Navbar = () => (
  <div className="animate-slide-down-delayed flex flex-row items-center gap-6 py-8 ">
    <div className="flex flex-none flex-row items-center gap-2 text-white">
      <Link
        href="/"
        className="text-4xl font-bold transition hover:opacity-90 text-white flex items-center"
      >
        <Image {...Logo} className="w-12" alt="Logo" />
        TrainCode.AI
      </Link>
    </div>
    <div className="flex-grow" />
    <Link
      className="hidden transform text-sm font-medium text-white hover:opacity-90 sm:block"
      href="/#pricing"
    >
      Pricing
    </Link>

    <>
      <Link
        className="hidden transform whitespace-nowrap text-sm font-medium text-white hover:opacity-90 sm:block"
        href="/signup"
      >
        Sign up
      </Link>
      <Link
        className="button-glow flex flex-row items-center gap-3 whitespace-nowrap rounded-md px-4 py-2 text-sm font-semibold transition bg-primary hover:bg-primary-dark"
        href="/login"
      >
        Sign in
      </Link>
    </>

    <Link
      className="hidden transform text-sm font-medium text-white hover:opacity-90 sm:block"
      href={GITHUB_LINK}
      target="_blank"
    >
      <GitHubIcon className="h-5 w-5" />
    </Link>
  </div>
);

export default Navbar;
