import React from 'react';
import cn from 'classnames';

import type { HTMLAttributes, JSXElementConstructor, ReactNode } from 'react';

interface ButtonProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'size'> {
  size?: 'sm' | 'base' | 'md' | 'lg';
  variant?: 'primary' | 'secondary';
  children?: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  loadingMessage?: string;
  type?: 'button' | 'submit' | 'reset';
  Icon?: JSXElementConstructor<any> | string;
}

const Button: React.FC<ButtonProps> = ({
  size = 'base',
  variant,
  children,
  Icon,
  className,
  disabled,
  loading,
  loadingMessage,
  type = 'button',
  ...props
}) => (
  <button
    {...props}
    disabled={disabled || loading}
    type={type}
    className={cn(
      className,
      'relative flex select-none flex-row items-center justify-center gap-3 whitespace-nowrap rounded-md border font-semibold transition duration-200 outline-none focus:outline-none disabled:cursor-not-allowed',
      {
        'border-transparent bg-primary text-white hover:bg-primary-dark disabled:bg-neutral-900 disabled:text-neutral-500 hover:disabled:bg-neutral-900':
          variant === 'primary',
        'border-neutral-800 bg-neutral-900 text-neutral-100 hover:bg-neutral-1000 disabled:border-transparent disabled:text-neutral-500 hover:disabled:bg-opacity-100':
          variant === 'secondary',
        'px-4 py-2 text-sm': size === 'base',
        'px-3 py-1.5 text-sm': size === 'sm',
        'px-5 py-3 text-base': size === 'lg',
      }
    )}
  >
    {Icon && <Icon className={cn('h-5 w-5')} />}
    <span
      className={cn('absolute inset-0 flex items-center justify-center', {
        'pointer-events-none opacity-0': !loading,
        'animate-pulse opacity-100': loading && loadingMessage,
      })}
    >
      {loadingMessage}
    </span>

    <span
      className={cn('truncate', {
        'opacity-0': loading,
        'opacity-100': !loading,
      })}
    >
      {children}
    </span>
  </button>
);

export default Button;
