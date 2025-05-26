import React from 'react';
import Container from '../components/Container';
import ProcessStep from '../components/ProcessStep';
import { ClipboardCheck, ArrowRightLeft, BarChart4, Users } from 'lucide-react';

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      title: 'Discovery & Planning',
      description: 'We begin with a thorough assessment of your business needs, existing systems, and goals to create a tailored implementation plan.',
      icon: ClipboardCheck
    },
    {
      title: 'Integration & Configuration',
      description: 'Our technical team handles the complex work of connecting your new SaaS tools with existing systems and configuring them to your specifications.',
      icon: ArrowRightLeft
    },
    {
      title: 'Data Migration & Validation',
      description: 'We carefully transfer your data to the new platform and perform extensive testing to ensure accuracy and functionality.',
      icon: BarChart4
    },
    {
      title: 'Training & Deployment',
      description: 'We train your team on the new system and provide comprehensive documentation before a carefully managed go-live process.',
      icon: Users
    }
  ];
  
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-primary">Process</span>
          </h2>
          <p className="text-lg text-gray-600">
            A proven methodology that delivers consistent results while minimizing disruption to your business operations.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="opacity-0 translate-y-8 animate-[fadeInUp_0.5s_ease-out_forwards]"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <ProcessStep
                title={step.title}
                description={step.description}
                icon={step.icon}
                stepNumber={index + 1}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HowItWorksSection;