import React from 'react';
import { cn } from '../../utils/cn';

export const Container = ({ children, className }) => {
  return (
    <div className={cn("max-w-7xl mx-auto px-6 md:px-12 lg:px-20", className)}>
      {children}
    </div>
  );
};

export const SectionWrapper = ({ children, className, id }) => {
  return (
    <section id={id} className={cn("py-20 md:py-32", className)}>
      {children}
    </section>
  );
};
