import React, { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { features } from '@/data/features';
import { FeatureCard } from '@/components/features/FeatureCard';
import TreatmentDemo from '@/components/features/TreatmentDemo';
import IntegrationProcess from '@/components/features/IntegrationProcess';
import ReactPageScroller, { SectionContainer } from 'react-page-scroller';

export const Features = () => {
  const [currentPage, setCurrentPage] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 800);
  
  const navigate = useNavigate();
  const handlePageChange = (number) => {
    setCurrentPage(number);
  };

  const handleBeforePageChange = (number) => {
    console.log(number);
  };

    React.useEffect(() => {
      document.body.style.overflow = 'hidden'; 
      const handleResize = () => {
        setIsSmallScreen(window.innerWidth < 800);
      };
  
      window.addEventListener("resize", handleResize);

      return () => {
        document.body.style.overflow = 'visible';
        window.removeEventListener("resize", handleResize);
      }
    });
  return (
    <div className="min-h-screen bg-gradient-to-b from-medspa-50 to-white">
      <Navigation session={null} />
      
      <div className="container mx-auto px-4 py-12">
          <ReactPageScroller
            
            onBeforePageScroll={() => handleBeforePageChange(0)}
            customPageNumber={currentPage}
            containerWidth={'100%'}
            animationTimer={400}
            >

          <SectionContainer height={isSmallScreen ? 50 : 50}>
              <div className="text-center mb-12" >
              <h1 className="text-4xl font-bold text-indigo-900 mb-4">
                Transform Your Med Spa with AI-Powered Innovation
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join leading med spas using Skin Skanner AI to revolutionize their consultation process and dramatically increase bookings
              </p>
            </div>
          {/* </SectionContainer> */}


          {/* <SectionContainer height={isSmallScreen ? 50 : 25}> */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-indigo-900 mb-4">
              Customized Treatment Recommendations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ensure your AI analysis only recommends treatments you actually offer, increasing booking conversion rates and client satisfaction
            </p>
          </div>
          </SectionContainer>


        {/* Treatment Selection Feature Highlight */}
        <SectionContainer height={100}>
        <div className="mb-16">
          <TreatmentDemo />
        </div>
        </SectionContainer>
         {isSmallScreen && <SectionContainer height={25}>
          <div></div>
        </SectionContainer>}
        <SectionContainer height={isSmallScreen ? 100 : 50}>
        <div className="mb-16">
          <IntegrationProcess />
        </div>
        </SectionContainer>
        

        {/* <SectionContainer height={100}> */}
        <div className="grid gap-8 mb-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              benefits={feature.benefits}
              isNew={feature.isNew}
            />
          ))}
        </div>
        {/* </SectionContainer> */}
        {/* Other Features */}
        <SectionContainer height={isSmallScreen ? 100 : 50}>
          <div></div>
        </SectionContainer>
        <SectionContainer height={100}>
        <div className="text-center">
          <Button 
            size="lg"
            onClick={() => navigate("/signup")}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg text-lg"
          >
            Sign Up Now
          </Button>
          <p className="mt-4 text-gray-600">
            Join the leading med spas revolutionizing their business with AI
          </p>
        </div>
        </SectionContainer>

 
        </ReactPageScroller>
      </div>
    </div>
  );
};

export default Features;
