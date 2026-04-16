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
          : 'bg-beige-50/30 backdrop-blur-[2px] py-8'
      )}
    >
      <Container className="flex items-center justify-between">
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
          className="md:hidden p-2 text-beige-900 transition-colors duration-500"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 bg-beige-50 z-40 flex flex-col items-center justify-center space-y-10 transition-transform duration-700 ease-in-out md:hidden',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="text-3xl sm:text-4xl font-serif text-beige-900 italic transform hover:scale-110 transition-transform duration-500"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
