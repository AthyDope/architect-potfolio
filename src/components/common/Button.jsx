import React from 'react';
import { cn } from '../../utils/cn';

const Button = ({ children, variant = 'primary', className, ...props }) => {
  const variants = {
    primary: 'bg-beige-900 text-beige-50 hover:bg-beige-300',
    outline: 'border border-beige-900 text-beige-900 hover:bg-beige-900 hover:text-beige-50',
    ghost: 'text-beige-900 hover:text-luxury-accent',
  };

  return (
    <button
      className={cn(
        'px-12 py-4 rounded-none transition-all duration-500 active:scale-95 disabled:opacity-50 uppercase tracking-[0.2em] text-[10px] font-bold',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
