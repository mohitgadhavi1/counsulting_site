"use client";
import { useState, useEffect } from "react";
import * as motion from "motion/react-client";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    id: 1,
    name: "Ayush Patel",
    content: "Dr Hamikchandra Patel was not only skilled but also approachable. Highly recommend for Hernia surgery.",
    rating: 5,
  },
  {
    id: 2,
    name: "Rajendra Khoala",
    content: "Wonderful surgeon with smooth prep, surgery and follow up. Best hernia surgeon in Ahmedabad.",
    rating: 5,
  },
  {
    id: 3,
    name: "Piyush Kumar Patel",
    content: "The best Gastro surgeon in Ahmedabad. Exceptional pre and post surgery care. Highly appreciated!",
    rating: 5,
  },
  {
    id: 4,
    name: "Suresh Mehra",
    content: "Very satisfied with the treatment. The staff was professional and the doctor explained everything clearly.",
    rating: 5,
  },
  {
    id: 5,
    name: "Anita Shah",
    content: "Recovered quickly after my surgery thanks to Dr. Patel's expertise. The follow-up care was excellent.",
    rating: 5,
  },
  {
    id: 6,
    name: "Vikram Rathore",
    content: "Highly professional approach. The clinic environment is very comforting and the results are amazing.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const updateCurrent = () => {
      setCurrent(api.selectedScrollSnap());
    };

    updateCurrent();
    api.on("select", updateCurrent);

    return () => {
      api.off("select", updateCurrent);
    };
  }, [api]);

  return (
    <section
      id="testimonials"
      className="py-24 px-4 sm:px-6 lg:px-8 w-full relative overflow-hidden z-10"
    >
      {/* Intense Blue Background */}
      <div className="absolute inset-0 bg-[#1e40af] -z-20" />
      
      {/* Subtle Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10 -z-10"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />

      <div className="relative z-10">
        <motion.div
          className="text-center mb-16 text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Client Stories
          </h2>
          <div className="flex items-center justify-center gap-3">
            <span className="text-2xl font-bold">5.0</span>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-6 h-6 fill-amber-400 text-amber-400" />
              ))}
            </div>
          </div>
        </motion.div>

        <Carousel
          setApi={setApi}
          className="w-full max-w-7xl mx-auto"
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
        >
          <CarouselContent className="-ml-6">
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/3 pl-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="h-full"
                >
                  <Card className="bg-[#2d49a1] border-none p-8 md:p-10 h-full flex flex-col justify-between shadow-2xl min-h-[320px] transition-transform hover:scale-[1.02]">
                    <div>
                      <div className="flex gap-1 mb-6">
                        {[1, 2, 3, 4, 5].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <p className="text-white text-lg leading-relaxed mb-8 italic font-medium">
                        &ldquo;{testimonial.content}&rdquo;
                      </p>
                    </div>
                    
                    <div className="border-t border-white/10 pt-6">
                      <h4 className="text-xl font-bold text-white mb-1">
                        {testimonial.name}
                      </h4>
                      <p className="text-blue-100/70 text-xs font-bold uppercase tracking-widest">
                        Verified Clients
                      </p>
                    </div>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-12">
            {[0, 1].map((index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index * 3)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  Math.floor(current / 3) === index
                    ? "w-10 bg-white"
                    : "w-2.5 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to frame ${index + 1}`}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  );
}
