import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

const ProjectCard = ({ project }) => {
  const { id, title, location, type, mainImage, thumbnails } = project;

  return (
    <div className="group flex flex-col bg-white border border-beige-100 p-4">
      {/* Main Showcase Image */}
      <div className="relative aspect-[16/10] overflow-hidden mb-6">
        <img
          src={mainImage}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-beige-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>

      {/* Internal Mini Gallery Preview */}
      <div className="grid grid-cols-3 gap-2 mb-8">
        {thumbnails.slice(0, 3).map((thumb, idx) => (
          <div key={idx} className="aspect-square overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
            <img
              src={thumb}
              alt={`${title} view ${idx}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Project Details */}
      <div className="space-y-4 px-2">
        <div className="flex justify-between items-baseline">
          <h3 className="text-xl font-serif font-bold text-beige-900 tracking-tight">
            {title}
          </h3>
          <span className="text-[9px] uppercase tracking-[0.3em] text-luxury-accent font-bold">
            {type}
          </span>
        </div>
        
        <div className="flex items-center text-beige-700 text-[10px] uppercase tracking-widest font-medium pb-6 border-b border-beige-100">
          <MapPin size={12} className="mr-2 text-beige-300" />
          <span>{location}</span>
        </div>

        <Link
          to={`/projects/${id}`}
          className="flex items-center justify-between group/btn pt-2"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-beige-900 group-hover/btn:text-luxury-accent transition-colors">
            Explore Showcase
          </span>
          <ArrowRight size={14} className="text-luxury-accent group-hover/btn:translate-x-2 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
