import getConfig from 'next/config';

const {
  PORT = 3000,
  NODE_ENV = 'development',
  WEB_URL = '',
} = getConfig?.()?.publicRuntimeConfig ?? {};

interface BaseConfig {
  WEB_URL: string;
  PORT: number;
  NODE_ENV: 'production' | 'development' | 'test' | 'staging';
}

export const baseConfig: BaseConfig = {
  WEB_URL,
  NODE_ENV,
  PORT: Number(PORT),
};
