import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Star } from "lucide-react";

interface Testimonial {
  business_name: string;
  testimonial: string;
  author_name: string;
  author_title: string;
  rating: number;
}

export const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const { data, error } = await supabase
        .from("testimonials")
        .select("*")
        .eq("is_featured", true)
        .limit(3);

      if (!error && data) {
        setTestimonials(data);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <div className="py-16 testimonial-section">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-xl md:text-4xl font-bold text-center text-white mb-6 md:mb-12">
          Trusted by Leading Med Spas
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card p-3 md:p-6 rounded-xl flex flex-col h-full hover:bg-white/70 transition-all duration-300"
            >
              <div className="flex gap-1 mb-2 md:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-golden golden"
                  />
                ))}
              </div>
              <p className="text-gray-800 italic flex-grow text-sm md:text-md">"{testimonial.testimonial}"</p>
              <div className=" mt-2 md:mt-6 pt-2 md:pt-4 border-t border-gray-200">
                <p className="font-semibold text-gray-900 text-md md:text-lg">
                  {testimonial.author_name}
                </p>
                <p className="text-sm text-gray-700">
                  {testimonial.author_title}, {testimonial.business_name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};