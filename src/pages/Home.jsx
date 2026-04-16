import React from 'react';
import { Container, SectionWrapper } from '../components/common/Layout';
import PageHero from '../components/common/PageHero';
import Button from '../components/common/Button';
import ProjectCard from '../components/projects/ProjectCard';
import { projects } from '../data/projects';
import { ArrowRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const featuredProjects = projects.slice(0, 3);

  const testimonials = [
    { name: "Sarah Jenkins", role: "Homeowner", quote: "Studio Beige transformed our 3BHK into a serene sanctuary. Their attention to detail and color palette is unmatched." },
    { name: "David Chen", role: "Art Gallery Owner", quote: "Minimalist yet functional. They understood my vision for the gallery and executed it with pure elegance." },
  ];

  const philosophy = [
    { title: "Pure Minimalism", desc: "Removing the unnecessary to reveal the essential beauty of your space." },
    { title: "Natural Materials", desc: "Sourcing ethical stones, woods, and linens that breathe life into rooms." },
    { title: "Functional Luxury", desc: "Design that doesn't just look good, but enhances your daily living experience." },
  ];

  return (
    <div className="bg-beige-50">
      <PageHero 
        title={<>Designing <br /> <span className="italic font-normal">Elegant Spaces</span></>}
        subtitle="Crafting interiors that reflect your lifestyle"
        image="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000"
        height="h-screen"
      >
        <Link to="/projects">
          <Button className="bg-white text-beige-900 hover:bg-beige-300">View Projects</Button>
        </Link>
      </PageHero>

      {/* ABOUT PREVIEW SECTION */}
      <SectionWrapper className="bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
                  alt="Lead Designer" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 md:-bottom-10 md:-right-10 w-2/3 h-2/3 border border-beige-300 -z-10" />
            </div>

            <div className="space-y-10">
              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-[0.4em] text-luxury-accent font-bold">About Studio</span>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-beige-900 leading-[1.1]">
                  Creating Timeless & <br /> <span className="italic">Functional</span> Interiors
                </h2>
              </div>
              <p className="text-beige-700 text-lg leading-relaxed font-light">
                I am an interior designer dedicated to transforming homes into elegant and functional spaces that reflect your unique style. With a passion for design, I bring a blend of sophistication and comfort to every project.
              </p>
              <Link to="/about">
                <Button variant="outline">Read More</Button>
              </Link>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* FEATURED PROJECTS SECTION */}
      <SectionWrapper className="bg-beige-50">
        <Container>
          <div className="text-center mb-20 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.4em] text-luxury-accent font-bold">Portfolio</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-beige-900 italic">Featured Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link to="/projects">
              <Button variant="ghost" className="flex items-center space-x-3 mx-auto">
                <span className="tracking-[0.3em]">View All Projects</span>
                <ArrowRight size={14} />
              </Button>
            </Link>
          </div>
        </Container>
      </SectionWrapper>

      {/* PHILOSOPHY SECTION */}
      <SectionWrapper className="bg-beige-100">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
            {philosophy.map((item, idx) => (
              <div key={idx} className="space-y-6 text-center">
                <div className="w-16 h-[1px] bg-luxury-accent mx-auto" />
                <h3 className="text-xl font-serif font-bold text-beige-900">{item.title}</h3>
                <p className="text-sm text-beige-700 leading-relaxed max-w-xs mx-auto">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* TESTIMONIALS */}
      <SectionWrapper className="bg-white">
        <Container>
          <div className="text-center mb-20 text-beige-100">
             <Quote className="w-12 h-12 mx-auto mb-6 opacity-20" />
             <h2 className="text-3xl md:text-5xl font-serif font-bold text-beige-900">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-beige-50 p-12 space-y-6 border border-beige-100">
                <p className="text-beige-700 italic leading-relaxed">"{t.quote}"</p>
                <div className="pt-6 border-t border-beige-200">
                  <p className="font-bold text-beige-900 text-sm tracking-widest uppercase">{t.name}</p>
                  <p className="text-[10px] text-luxury-accent uppercase tracking-widest mt-1">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

    </div>
  );
};

export default Home;
