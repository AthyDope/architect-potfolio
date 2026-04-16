import React from 'react';
import { Container, SectionWrapper } from '../components/common/Layout';
import PageHero from '../components/common/PageHero';
import Button from '../components/common/Button';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-beige-50 min-h-screen">
      <PageHero 
        title={<>Let's <br /> <span className="italic font-normal">Collaborate.</span></>}
        subtitle="Translate your vision into a reality"
        image="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=2000"
      />

      <SectionWrapper>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Header Content */}
            <div className="space-y-16">
              <div className="space-y-8">
                <p className="text-xl text-beige-700 font-light max-w-md leading-relaxed">
                  Whether it's a new build or a bespoke renovation, we're here to help you redefine your relationship with space.
                </p>
              </div>

              <div className="space-y-12">
                <div className="flex items-start space-x-6">
                  <div className="bg-white p-4 text-luxury-accent border border-beige-100">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-beige-400 mb-2">Email</h4>
                    <p className="text-beige-900 font-medium tracking-wide">hello@studiobeige.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="bg-white p-4 text-luxury-accent border border-beige-100">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-beige-400 mb-2">Call</h4>
                    <p className="text-beige-900 font-medium tracking-wide">+46 123 456 789</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="bg-white p-4 text-luxury-accent border border-beige-100">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-beige-400 mb-2">Studio</h4>
                    <p className="text-beige-900 font-medium tracking-wide">123 Design Street, Stockholm</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-12 md:p-20 shadow-2xl border border-beige-100">
              <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-beige-400">First Name</label>
                    <input 
                      type="text" 
                      placeholder="Jane"
                      className="w-full bg-transparent border-b border-beige-100 py-3 focus:outline-none focus:border-luxury-accent transition-colors placeholder:text-beige-200"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-beige-400">Last Name</label>
                    <input 
                      type="text" 
                      placeholder="Doe"
                      className="w-full bg-transparent border-b border-beige-100 py-3 focus:outline-none focus:border-luxury-accent transition-colors placeholder:text-beige-200"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-beige-400">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="jane@example.com"
                    className="w-full bg-transparent border-b border-beige-100 py-3 focus:outline-none focus:border-luxury-accent transition-colors placeholder:text-beige-200"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-beige-400">Inquiry Type</label>
                  <select className="w-full bg-transparent border-b border-beige-100 py-3 focus:outline-none focus:border-luxury-accent transition-colors appearance-none text-beige-900 font-light italic">
                    <option>Residential Interior</option>
                    <option>Commercial Architecture</option>
                    <option>Consultation</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-beige-400">Message</label>
                  <textarea 
                    rows="4" 
                    placeholder="Tell us about your project..."
                    className="w-full bg-transparent border-b border-beige-100 py-3 focus:outline-none focus:border-luxury-accent transition-colors resize-none placeholder:text-beige-200"
                  ></textarea>
                </div>

                <Button className="w-full py-6">
                  Send Inquiry
                </Button>
              </form>
            </div>
          </div>
        </Container>
      </SectionWrapper>
    </div>
  );
};

export default Contact;
