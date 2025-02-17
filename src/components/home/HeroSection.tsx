import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="py-16 px-3 md:py-24  bg-gradient-to-b from-medspa-50 to-white cover-page">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h1 className="text-2xl md:text-6xl font-bold text-[#957148] leading-tight">
          Transform Your Med Spa with
          <span className="block text-white font-extrabold">
            AI-Powered Skin Analysis
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-[#957148] max-w-2xl mx-auto">
          Enhance your consultations, boost bookings, and provide personalized treatment recommendations with our cutting-edge AI technology.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={() => navigate("/signup")}
            size="lg"
            className="text-lg px-8 py-6 bg-golden"
          >
            Sign Up <ArrowRight className="ml-2" />
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => navigate("/demo")}
            className="text-lg px-8 py-6"
          >
            Try Demo
          </Button>
        </div>
      </div>
    </div>
  );
};