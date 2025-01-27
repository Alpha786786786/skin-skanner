import React from 'react';
import { ArrowRight, ListChecks, Upload, Sparkles } from 'lucide-react';

const IntegrationProcess = () => {
  return (
    <div className="py-12">
      <h3 className="text-4xl font-semibold text-white text-center mb-8">How It Works</h3>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
        <div className="flex flex-col items-center text-center max-w-[200px]">
          <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <ListChecks className="h-8 w-8 golden" />
          </div>
          <h4 className="font-medium mb-2 text-white">Select Treatments</h4>
          <p className="text-sm text-gray-400">Customize your available services and specialties</p>
        </div>
        
        <ArrowRight className="hidden md:block h-6 w-6 text-gray-400" />
        
        <div className="flex flex-col items-center text-center max-w-[200px]">
          <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <Upload className="h-8 w-8 golden" />
          </div>
          <h4 className="font-medium mb-2 text-white">Client Photos</h4>
          <p className="text-sm text-gray-400">Clients upload photos for AI analysis</p>
        </div>
        
        <ArrowRight className="hidden md:block h-6 w-6 text-gray-400" />
        
        <div className="flex flex-col items-center text-center max-w-[200px]">
          <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <Sparkles className="h-8 w-8 golden" />
          </div>
          <h4 className="font-medium mb-2 text-white">Smart Recommendations</h4>
          <p className="text-sm text-gray-400">Get personalized treatment suggestions from your menu</p>
        </div>
      </div>
    </div>
  );
};

export default IntegrationProcess;