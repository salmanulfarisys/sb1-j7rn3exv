import React from 'react';
import Button from './Button';
import { Check } from 'lucide-react';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: PricingFeature[];
  isPopular?: boolean;
  buttonText?: string;
  buttonVariant?: 'primary' | 'secondary' | 'outline';
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  features,
  isPopular = false,
  buttonText = 'Get Started',
  buttonVariant = 'primary',
}) => {
  return (
    <div className={`
      relative flex flex-col p-6 bg-white shadow-sm rounded-xl border
      ${isPopular ? 'border-primary shadow-md ring-1 ring-primary' : 'border-gray-200'}
    `}>
      {isPopular && (
        <div className="absolute -top-4 left-0 right-0 flex justify-center">
          <span className="bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="mb-5">
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <div className="mt-2 mb-5">
          <span className="text-3xl font-bold">{price}</span>
          {price !== 'Custom' && <span className="text-gray-500 ml-2">/month</span>}
        </div>
        <p className="text-gray-600 mb-5">{description}</p>
      </div>
      
      <ul className="space-y-3 mb-6 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className={`mr-2 rounded-full p-1 ${feature.included ? 'bg-green-100' : 'bg-gray-100'}`}>
              <Check className={`h-4 w-4 ${feature.included ? 'text-green-600' : 'text-gray-400'}`} />
            </span>
            <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
      
      <Button 
        variant={buttonVariant} 
        className={`mt-auto w-full ${isPopular ? '' : ''}`}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default PricingCard;