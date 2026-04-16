import React from 'react';
import { Container, SectionWrapper } from '../components/common/Layout';
import PageHero from '../components/common/PageHero';

const PrivacyPolicy = () => {
  return (
    <div className="bg-beige-50 min-h-screen">
      <PageHero 
        title="Privacy Policy"
        subtitle="How we handle your information"
        image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2000"
      />

      <SectionWrapper>
        <Container>
          <div className="max-w-3xl mx-auto space-y-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-serif font-bold text-beige-900">1. Information We Collect</h2>
              <p className="text-beige-700 font-light leading-relaxed">
                At Studio Beige, we collect information that you provide directly to us through our contact forms, newsletter subscriptions, or direct emails. This may include your name, email address, phone number, and any details regarding your architectural or interior design inquiries.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-serif font-bold text-beige-900">2. How We Use Your Information</h2>
              <p className="text-beige-700 font-light leading-relaxed">
                The information we collect is used primarily to:
              </p>
              <ul className="list-disc list-inside text-beige-700 font-light space-y-3 pl-4">
                <li>Respond to your requests for information or consultations</li>
                <li>Communicate with you regarding our services and project updates</li>
                <li>Send periodic newsletters (if you have opted in)</li>
                <li>Improve our website and client experience</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-serif font-bold text-beige-900">3. Cookies and Analytics</h2>
              <p className="text-beige-700 font-light leading-relaxed">
                We use cookies and similar technologies to understand how visitors interact with our website. This helps us analyze traffic patterns and optimize the site's performance. You can manage your cookie preferences through your browser settings.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-serif font-bold text-beige-900">4. Third-Party Services</h2>
              <p className="text-beige-700 font-light leading-relaxed">
                We do not sell or trade your personal information to third parties. We may use trusted service providers to help us operate our website or conduct our business, provided those parties agree to keep your information confidential.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-serif font-bold text-beige-900">5. Data Security</h2>
              <p className="text-beige-700 font-light leading-relaxed">
                We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
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

export default PrivacyPolicy;
