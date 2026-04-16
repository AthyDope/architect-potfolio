import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, SectionWrapper } from '../components/common/Layout';
import PageHero from '../components/common/PageHero';
import { projects } from '../data/projects';
import { MapPin, Calendar, ArrowLeft } from 'lucide-react';
import Button from '../components/common/Button';
import { cn } from '../utils/cn';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <Container className="py-20 text-center">
        <h1 className="text-4xl font-serif">Project not found</h1>
        <Button onClick={() => navigate('/projects')} className="mt-8">Back to Projects</Button>
      </Container>
    );
  }

  return (
    <div className="bg-beige-50 min-h-screen pb-20">
      <PageHero 
        title={project.title}
        subtitle={project.type}
        image={project.mainImage}
      >
        <button 
          onClick={() => navigate('/projects')}
          className="flex items-center mx-auto text-beige-50/70 hover:text-white transition-colors uppercase tracking-[0.3em] text-[10px] font-bold"
        >
          <ArrowLeft size={14} className="mr-2" />
          Back to Projects
        </button>
      </PageHero>

      {/* Stats Bar */}
      <div className="bg-white border-b border-beige-100 py-12">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
            {[
              { label: 'Location', value: project.location },
              { label: 'Type', value: project.type },
              { label: 'Area', value: project.area },
              { label: 'Year', value: project.year },
            ].map((stat, idx) => (
              <div key={idx} className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.4em] text-beige-400 font-bold block">{stat.label}</span>
                <span className="text-beige-900 font-medium tracking-tight">{stat.value}</span>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Description */}
      <SectionWrapper>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
            <div className="lg:col-span-2 space-y-10">
              <h2 className="text-3xl font-serif font-bold text-beige-900">Project Overview</h2>
              <p className="text-beige-700 text-lg leading-relaxed font-light">
                {project.description}
              </p>
              <p className="text-beige-700 leading-relaxed font-light">
                Every line and texture in this project was curated to evoke a sense of calm and permanence. We focused on the interplay between natural light and raw materials to transform a standard structure into a living canvas.
              </p>
            </div>
            <div className="space-y-10 bg-white p-12 border border-beige-100">
              <h3 className="text-xl font-serif font-bold text-beige-900">Visionary Note</h3>
              <p className="text-sm text-beige-700 italic font-light leading-relaxed">
                "Our goal was to create a quiet sanctuary. The choice of Honed Travertine and Belgian Linen provides a tactile experience that complements the visual minimalism."
              </p>
              <div className="space-y-4 pt-8 border-t border-beige-100">
                <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-luxury-accent">Key Palette</h4>
                <ul className="text-xs text-beige-700 space-y-3 font-medium tracking-wide">
                  <li className="flex items-center italic"> <div className="w-2 h-2 bg-beige-300 mr-3" /> Light Oak Wood</li>
                  <li className="flex items-center italic"> <div className="w-2 h-2 bg-beige-200 mr-3" /> Honed Travertine</li>
                  <li className="flex items-center italic"> <div className="w-2 h-2 bg-beige-900 mr-3" /> Brushed Brass</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Image Gallery */}
      <SectionWrapper className="bg-white">
        <Container>
          <h2 className="text-3xl font-serif font-bold text-beige-900 mb-20 text-center italic">Gallery Excerpts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {project.gallery.map((img, idx) => (
              <div
                key={idx}
                className={cn(
                  "overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000",
                  idx % 4 === 0 ? "md:col-span-2 md:row-span-2" : ""
                )}
              >
                <img 
                  src={img} 
                  alt={`${project.title} gallery ${idx}`} 
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>
    </div>
  );
};

export default ProjectDetails;
