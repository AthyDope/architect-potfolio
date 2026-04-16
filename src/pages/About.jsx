import React from 'react';
import { Container, SectionWrapper } from '../components/common/Layout';
import PageHero from '../components/common/PageHero';

const About = () => {
  return (
    <div className="bg-beige-50 min-h-screen">
      <PageHero 
        title={<>Designing <br /> <span className="text-luxury-accent lowercase italic">Emotionally Charged</span> <br /> Spaces.</>}
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
      />

      {/* Story */}
      <SectionWrapper>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-8 text-premium">
              <p className="text-2xl font-serif text-beige-900 leading-relaxed italic">
                "We don't just build structures; we curate experiences that linger in the memory."
              </p>
              <div className="text-beige-700 space-y-6 font-light leading-relaxed">
                <p>
                  Founded in 2018, Studio Beige was born out of a desire for simplicity in an increasingly complex world. We believe that the spaces we inhabit have a profound impact on our well-being and productivity.
                </p>
                <p>
                  Our work is a dialogue between light, material, and human interaction. Every project is an opportunity to explore how minimal palettes can provide maximum serenity. We specialize in high-end residential and boutique commercial architecture that stands the test of time.
                </p>
              </div>
            </div>
            <div className="aspect-[3/4] overflow-hidden grayscale">
              <img 
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800" 
                alt="Architect working" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Team/Philosophy */}
      <SectionWrapper className="bg-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl font-serif font-bold mb-6">The Studio Spirit</h2>
            <p className="text-beige-700 font-light">
              A collaborative team of architects, interior designers, and visual artists dedicated to the pursuit of excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
            {[
              { title: 'Intention', desc: 'Every line we draw serves a specific functional and aesthetic purpose.' },
              { title: 'Materiality', desc: 'From raw stone to fine linen, we celebrate the honesty of natural materials.' },
              { title: 'Precision', desc: 'The beauty is in the details. We obsess over every joint and junction.' }
            ].map((item, idx) => (
              <div key={idx} className="p-12 border border-beige-100 hover:bg-beige-50 transition-colors duration-500">
                <h3 className="text-xl font-serif font-bold mb-4">{item.title}</h3>
                <p className="text-sm text-beige-700 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>
    </div>
  );
};

export default About;
