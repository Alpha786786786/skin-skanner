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
      
      <div className="">
          <ReactPageScroller
            

            containerWidth={'100%'}
            animationTimer={400}
            >

          <div className='features-section p-4'>
          <SectionContainer height={isSmallScreen ? 50 : 50}>
              <div className="text-center mb-12" >
              <h1 className="text-4xl font-bold mb-4 text-white">
                Transform Your Med Spa with AI-Powered Innovation
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join leading med spas using Skin Skanner AI to revolutionize their consultation process and dramatically increase bookings
              </p>
            </div>
          {/* </SectionContainer> */}


          {/* <SectionContainer height={isSmallScreen ? 50 : 25}> */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Customized Treatment Recommendations
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Ensure your AI analysis only recommends treatments you actually offer, increasing booking conversion rates and client satisfaction
            </p>
          </div>
          </SectionContainer>
          </div>



        {/* Treatment Selection Feature Highlight */}
        <SectionContainer height={100}>
        <div className="p-4 available-treatments">
          <TreatmentDemo />
        </div>
        </SectionContainer>
         {isSmallScreen && 
         <SectionContainer height={15}>
         <div className="available-treatments">
          <div></div>
         </div>
        </SectionContainer>
        }
        <div className="available-treatments">
        <SectionContainer height={isSmallScreen ? 100 : 100}>
          <IntegrationProcess />
        </SectionContainer>
        </div>
        

        {/* <SectionContainer height={100}> */}
        <div className="available-treatments p-4">
        <div className="grid gap-8">
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
        </div>

        {/* </SectionContainer> */}
        {/* Other Features */}
        <SectionContainer height={isSmallScreen ? 100 : 0}>
          <div></div>
        </SectionContainer>
        <div className="available-treatments">
        <SectionContainer height={25}>
          <div className="text-center">
          <Button 
            size="lg"
            onClick={() => navigate("/signup")}
            className="bg-golden text-white px-8 py-3 rounded-lg text-lg"
          >
            Sign Up Now
          </Button>
          <p className="mt-4 text-gray-300">
            Join the leading med spas revolutionizing their business with AI
          </p>
        </div>
        </SectionContainer>
          </div>

 
        </ReactPageScroller>
      </div>
    </div>
  );
};

export default Features;
