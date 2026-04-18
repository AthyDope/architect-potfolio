import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '../../utils/cn';
import { Container } from '../common/Layout';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => document.body.classList.remove('no-scroll');
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-700',
        isScrolled 
          ? 'bg-beige-50/95 backdrop-blur-md py-4 shadow-sm border-b border-beige-100' 
          : 'bg-transparent py-8'
      )}
    >
      <Container className="flex items-center justify-between relative z-50">
        <Link 
          to="/" 
          className="text-xl sm:text-2xl font-serif font-bold tracking-tighter text-beige-900 transition-colors duration-500"
        >
          STUDIO<span className="text-luxury-accent">BEIGE</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-[11px] font-medium tracking-[0.2em] uppercase transition-all duration-300 hover:text-luxury-accent relative group',
                location.pathname === link.path 
                  ? 'text-luxury-accent' 
                  : 'text-beige-900'
              )}
            >
              {link.name}
              <span className={cn(
                "absolute -bottom-1 left-0 w-0 h-[1px] bg-luxury-accent transition-all duration-300 group-hover:w-full",
                location.pathname === link.path ? 'w-full' : 'w-0'
              )} />
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-beige-900 z-50 transition-transform duration-500 hover:scale-110 active:scale-90"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
        </button>
      </Container>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-beige-50 z-40 flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden',
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        )}
      >
        <div className="flex flex-col items-center space-y-12">
          {navLinks.map((link, index) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-2xl sm:text-3xl font-light tracking-[0.4em] uppercase text-beige-900 transition-all duration-700 transform",
                isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
                location.pathname === link.path && "text-luxury-accent"
              )}
              style={{ 
                transitionDelay: `${isMobileMenuOpen ? 200 + index * 100 : 0}ms` 
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        {/* Decorative element in menu */}
        <div className={cn(
          "absolute bottom-20 text-[10px] uppercase tracking-[0.5em] text-beige-400 transition-all duration-1000 delay-700",
          isMobileMenuOpen ? "opacity-100" : "opacity-0"
        )}>
          Studio Beige © 2024
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
