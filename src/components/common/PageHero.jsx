import React from 'react';
import { Container } from './Layout';
import { cn } from '../../utils/cn';

const PageHero = ({ 
  title, 
  subtitle, 
  image, 
  height = "h-[70vh]", 
  overlayOpacity = "bg-black/40",
  children 
}) => {
  return (
    <section className={cn("relative flex items-center justify-center overflow-hidden text-center", height)}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className={cn("absolute inset-0 backdrop-blur-[2px]", overlayOpacity)} />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-serif font-bold text-white leading-tight mb-8">
            {title}
          </h1>
          {subtitle && (
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-beige-50/80 font-light tracking-[0.3em] sm:tracking-[0.4em] uppercase mb-12">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </Container>
      
      {/* Bottom Scroll Line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
};

export default PageHero;
