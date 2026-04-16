import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../common/Layout';
import { Mail, Phone, MapPin } from 'lucide-react';

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const Footer = () => {
  return (
    <footer className="bg-beige-900 text-beige-50 py-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <h2 className="text-2xl font-serif font-bold tracking-tighter">
              STUDIO<span className="text-luxury-accent">BEIGE</span>
            </h2>
            <p className="text-beige-300 text-sm leading-relaxed max-w-xs">
              Crafting timeless spaces that merge minimalist aesthetics with functional luxury.
            </p>
            <div className="flex space-x-4">
              <InstagramIcon />
              <FacebookIcon />
              <LinkedinIcon />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-serif font-medium">Quick Links</h3>
            <ul className="space-y-4 text-sm text-beige-300">
              <li><Link to="/" className="hover:text-beige-50 transition-colors">Home</Link></li>
              <li><Link to="/projects" className="hover:text-beige-50 transition-colors">Projects</Link></li>
              <li><Link to="/about" className="hover:text-beige-50 transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-beige-50 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-serif font-medium">Contact</h3>
            <ul className="space-y-4 text-sm text-beige-300">
              <li className="flex items-center space-x-3">
                <MapPin className="w-4 h-4" />
                <span>123 Design Street, Stockholm</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4" />
                <span>+46 123 456 789</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4" />
                <span>hello@studiobeige.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-lg font-serif font-medium">Newsletter</h3>
            <p className="text-sm text-beige-300">Subscribe for design inspiration and updates.</p>
            <div className="relative">
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-transparent border-b border-beige-700 py-2 text-sm focus:outline-none focus:border-luxury-accent transition-colors"
              />
              <button className="absolute right-0 bottom-2 text-luxury-accent font-medium hover:text-beige-50 transition-colors uppercase text-xs tracking-widest">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-beige-800 flex flex-col md:flex-row justify-between items-center text-xs text-beige-500 uppercase tracking-widest space-y-4 md:space-y-0">
          <p>© 2024 Studio Beige Architecture. All rights reserved. Made by Atharva Chaphe with love</p>
          <div className="flex space-x-8">
            <Link to="/privacy-policy" className="hover:text-beige-50">Privacy Policy</Link>
            <Link to="/terms-conditions" className="hover:text-beige-50">Terms & Conditions</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
