import React from 'react';
import { Container, SectionWrapper } from '../components/common/Layout';
import ProjectCard from '../components/projects/ProjectCard';
import PageHero from '../components/common/PageHero';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <div className="bg-beige-50 min-h-screen">
      <PageHero 
        title="Our Portfolio"
        subtitle="A curated selection of our finest architectural and interior design projects"
        image="https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=2000"
      />

      <SectionWrapper>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-20">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Container>
      </SectionWrapper>
    </div>
  );
};

export default Projects;
