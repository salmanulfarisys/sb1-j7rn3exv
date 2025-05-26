import React from 'react';
import Container from '../components/Container';
import Button from '../components/Button';
import { ChevronRight } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
    <section id="get-started" className="py-20 bg-gradient-to-br from-primary to-primary-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.2] bg-[length:20px_20px]"></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      
      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Streamline Your SaaS Implementation?
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-8">
            Join hundreds of companies that have transformed their businesses with Flowvice's expert implementation services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">

<a
  href="https://www.zoho.com"  // Replace with your actual scheduling URL
  target="_blank"
  rel="noopener noreferrer"
>
{/*   <Button 
    size="lg" 
    className="bg-white text-primary hover:bg-white/90 group"
  > */}
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 group"
            >
              Schedule a Consultation
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white/20"
            >
              View Case Studies
            </Button>
          </div>
          
          <div className="mt-12 bg-white/10 rounded-xl p-6 backdrop-blur-sm max-w-xl mx-auto">
            <p className="text-white font-medium mb-4">Join our newsletter for implementation tips</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-md border border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Button className="bg-white text-primary hover:bg-white/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CtaSection;
