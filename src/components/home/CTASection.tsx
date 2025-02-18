import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const CTASection = () => {
  const navigate = useNavigate();

  return (
    <div className="py-16 cta-section">
      <div className="max-w-4xl mx-auto text-center px-4 space-y-8">
        <h2 className="text-lg md:text-4xl font-bold text-white">
          Ready to Transform Your Business?
        </h2>
        <p className="text-md md:text-xl text-white">
          Join leading med spas using Skin Skanner AI to enhance their consultations and boost bookings.
        </p>
        <Button
          onClick={() => navigate("/signup")}
          size="lg"
          className="text-sm md:text-lg px-8 py-6 bg-golden signup-btn"
        >
          Sign Up Now <ArrowRight className="ml-2" />
        </Button>
        <div className="social-icons">
          <a href="https://youtube.com/@skinskannerai" target="_blank" rel="noopener noreferrer">
            <img src="/lovable-uploads/youtube.svg" className="cursor-pointer touch-manipulation" alt="" width={48}  />
          </a>
          <a href="https://instagram.com/skinskannerai" target="_blank" rel="noopener noreferrer">
            <img src="/lovable-uploads/instagram.svg" className="cursor-pointer touch-manipulation" alt="" width={48}  />
          </a>
        </div>
      </div>
    </div>
  );
};