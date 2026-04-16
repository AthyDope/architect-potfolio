import React from 'react';
import { Container, SectionWrapper } from '../components/common/Layout';
import PageHero from '../components/common/PageHero';

const TermsConditions = () => {
  return (
    <div className="bg-beige-50 min-h-screen">
      <PageHero 
        title="Terms & Conditions"
        subtitle="The details of our engagement"
        image="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=2000"
      />

      <SectionWrapper>
        <Container>
          <div className="max-w-3xl mx-auto space-y-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-serif font-bold text-beige-900">1. Acceptance of Terms</h2>
              <p className="text-beige-700 font-light leading-relaxed">
                By accessing and using the Studio Beige website, you agree to comply with and be bound by the following terms and conditions. If you do not agree with any part of these terms, please refrain from using our website.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-serif font-bold text-beige-900">2. Intellectual Property</h2>
              <p className="text-beige-700 font-light leading-relaxed">
                All content on this website, including designs, text, graphics, images, and brand assets, is the property of Studio Beige and is protected by intellectual property laws. None of the material may be reproduced, distributed, or used without our express written consent.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-serif font-bold text-beige-900">3. Use of Website</h2>
              <p className="text-beige-700 font-light leading-relaxed">
                This website is intended for professional use and for providing information about our architectural services. You agree to use this site only for lawful purposes and in a way that does not infringe the rights of others or restrict their use and enjoyment of the site.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-serif font-bold text-beige-900">4. Project Disclaimer</h2>
              <p className="text-beige-700 font-light leading-relaxed">
                While we strive for accuracy, the projects shown on our website are for illustrative purposes. Specific details, materials, and outcomes may vary based on client requirements, site conditions, and regulatory compliance.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-serif font-bold text-beige-900">5. Limitation of Liability</h2>
              <p className="text-beige-700 font-light leading-relaxed">
                Studio Beige shall not be liable for any direct, indirect, or consequential damages resulting from the use or inability to use the information on this website. We do not warrant that the website will be error-free or uninterrupted.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-serif font-bold text-beige-900">6. Governing Law</h2>
              <p className="text-beige-700 font-light leading-relaxed">
                These terms are governed by the laws of our operating jurisdiction. Any disputes arising from the use of this website will be subject to the exclusive jurisdiction of the relevant courts.
              </p>
            </div>

            <div className="pt-12 border-t border-beige-200">
              <p className="text-sm text-beige-400 font-light italic text-center">
                Last updated: April 16, 2024
              </p>
            </div>
          </div>
        </Container>
      </SectionWrapper>
    </div>
  );
};

export default TermsConditions;
