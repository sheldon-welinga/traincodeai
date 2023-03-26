import React from 'react';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';

import Button from '@/components/elements/Button';
import GitHubIcon from '@/components/icons/GithubIcon';
import { GITHUB_LINK } from '@/lib/constants';

interface Props {}

const HomeModule: React.FC<Props> = () => (
  <div>
    <div>
      <h1 className="my-8 text-center text-5xl leading-[48px] -tracking-wider sm:text-6xl sm:leading-[64px] font-bold">
        <Balancer>
          Automatically generate new code while maintaining your current
          standards
        </Balancer>
      </h1>
      <p className="mx-auto my-6 max-w-screen-md text-center text-xl dark:text-neutral-500">
        Train our AI on your codebase and let it help you code along generating
        new codes/features you wish to add
      </p>
      <div className="flex flex-row items-center justify-center gap-4 pt-8">
        <Link href="/signup" passHref>
          <Button variant="primary" size="lg">
            Start for free
          </Button>
        </Link>
        <Link href={GITHUB_LINK} passHref target="_blank">
          <Button variant="secondary" size="lg" Icon={GitHubIcon}>
            Star on GitHub
          </Button>
        </Link>
      </div>
    </div>
    {/* Rest of content here */}
    <div className="flex flex-col items-center">
      <h2 className="gradient-heading mt-40 text-center text-4xl">
        Open source
      </h2>
      <p className="mx-auto mt-4 max-w-md text-center text-lg dark:text-neutral-500">
        The source code is available on GitHub for you to contribute to if you
        are interested!
      </p>
    </div>
  </div>
);

export default HomeModule;
