import React, { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { ConfigSection } from '@/components/config/ConfigSection';
import { ScannerSection } from '@/components/scanner/ScannerSection';
import { LoadingScreen } from '@/components/LoadingScreen';
import { useAuthInitialization } from '@/hooks/use-auth-initialization';
import { useBusinessSettingsManagement } from '@/hooks/use-business-settings-management';
import { toast } from '@/hooks/use-toast';
import { HeroSection } from '@/components/home/HeroSection';
import { BenefitsSection } from '@/components/home/BenefitsSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { CTASection } from '@/components/home/CTASection';
import { Header } from '@/components/Header';
import ReactPageScroller, { SectionContainer } from 'react-page-scroller';
import { VideoSection } from '@/components/home/VideoSection';

const Index = () => {
  const { session, isInitializing } = useAuthInitialization();
  const { bookingUrl, fetchBusinessSettings, updateBookingUrl } = useBusinessSettingsManagement();
  const [currentPage, setCurrentPage] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 800);

  React.useEffect(() => {
    if (session?.user?.id) {
      fetchBusinessSettings(session.user.id);
    }
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 800);
    };

    window.addEventListener("resize", handleResize);
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'visible'; 
      window.removeEventListener("resize", handleResize);
    }
    
  }, [session, fetchBusinessSettings]);

  const handlePageChange = (number) => {
    setCurrentPage(number);
  };

  const handleBeforePageChange = (number) => {
    console.log(number);
  };

  if (isInitializing) {
    return <LoadingScreen />;
  }

  const isConfigMode = new URLSearchParams(window.location.search).get('config') === 'true';
  
  // If user is logged in and in config mode, show config section
  if (session && isConfigMode) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-medspa-50 to-white">
        <div className="container max-w-4xl mx-auto px-4 py-8 relative">
          <Navigation session={session} />
          <Header />
          <ConfigSection 
            session={session}
            bookingUrl={bookingUrl}
            updateBookingUrl={(url: string) => updateBookingUrl(url, session)}
          />
        </div>
      </div>
    );
  }

  // If user is logged in and wants to scan, show scanner section
  if (session && !isConfigMode) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-medspa-50 to-white">
        <div className="container max-w-4xl mx-auto px-4 py-8 relative">
          <Navigation session={session} />
          <Header />
          <ScannerSection 
            bookingUrl={bookingUrl}
            onScanAgain={() => {
              toast({
                title: "Ready for New Scan",
                description: "Please upload your photos for a new analysis."
              });
            }}
          />
        </div>
      </div>
    );
  }

  // Default: Show homepage for visitors
  return (
    <>
      <Navigation session={session} />
        <ReactPageScroller
          pageOnChange={() => handlePageChange(0)}
          onBeforePageScroll={() => handleBeforePageChange(0)}
          customPageNumber={currentPage}
          containerWidth={'100%'}
          animationTimer={300}
          >
          {/* <div className="min-h-screen bg-gradient-to-b from-medspa-50 to-white"> */}
            <HeroSection />
            <VideoSection/>
            <BenefitsSection />
            {/* {isSmallScreen && (
              <SectionContainer height={100}>
                <div className="testimonial-section"></div>
              </SectionContainer>
            )} */}
            <TestimonialsSection />
            {isSmallScreen && (
              <SectionContainer height={100}>
                <div className="testimonial-section"></div>
              </SectionContainer>
            )}

            <CTASection />
          {/* </div> */}
        </ReactPageScroller>
    </>


  );
};

export default Index;