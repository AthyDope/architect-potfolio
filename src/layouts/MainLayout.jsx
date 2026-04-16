import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import InquirySection from '../components/common/InquirySection';
import { MessageCircle } from 'lucide-react';

const MainLayout = ({ children }) => {
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';

  return (
    <div className="flex flex-col min-h-screen bg-beige-50">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <div>
          {children}
        </div>
      </main>

      {!isContactPage && <InquirySection />}
      <Footer />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/yournumber"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group"
      >
        <MessageCircle size={28} />
        <span className="absolute right-full mr-4 bg-white text-beige-900 px-4 py-2 rounded-lg text-sm font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          Chat with us
        </span>
      </a>
    </div>
  );
};

export default MainLayout;
