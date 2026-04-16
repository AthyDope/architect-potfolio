import React from 'react';
import { Container, SectionWrapper } from './Layout';
import Button from './Button';
import { Link } from 'react-router-dom';

const InquirySection = () => {
  return (
    <SectionWrapper className="bg-beige-100">
      <Container>
        <div className="max-w-4xl mx-auto bg-white p-12 md:p-20 shadow-2xl space-y-12">
          <div className="text-center space-y-4">
            <span className="text-[10px] uppercase tracking-[0.4em] text-luxury-accent font-bold">Inquiry</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-beige-900">Let's Connect</h2>
            <p className="text-beige-700 font-light">Translate your vision into a reality.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 pt-12 border-t border-beige-100">
            <div className="space-y-8">
              <div>
                <h4 className="text-[10px] uppercase tracking-widest font-bold text-beige-400 mb-2">Email</h4>
                <p className="text-beige-900 font-medium tracking-wide">hello@studiobeige.com</p>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-widest font-bold text-beige-400 mb-2">Office</h4>
                <p className="text-beige-900 font-medium tracking-wide">123 Design Street, Stockholm</p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <Link to="/contact">
                <Button className="w-full">Send Message</Button>
              </Link>
              <a 
                href="https://wa.me/yournumber" 
                className="text-center text-[10px] uppercase tracking-[0.3em] font-bold text-luxury-accent hover:text-beige-900 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Or WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
};

export default InquirySection;
