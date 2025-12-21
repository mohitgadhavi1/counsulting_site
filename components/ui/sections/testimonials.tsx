"use client";
import { useState, useEffect } from "react";
import * as motion from "motion/react-client";
import { Quote } from "lucide-react";
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
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc",
    company: "TechStart Inc",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    content:
      "Working with ZidBit was an absolute game-changer for our business. They delivered a stunning website that exceeded our expectations and helped us increase conversions by 150%.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder, Digital Solutions",
    company: "Digital Solutions",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    content:
      "The team's expertise in modern web technologies is unmatched. They transformed our outdated platform into a sleek, high-performance application that our users love.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director, GrowthCo",
    company: "GrowthCo",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    content:
      "From strategy to execution, ZidBit handled everything professionally. Their attention to detail and commitment to our success made all the difference.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Thompson",
    role: "CTO, InnovateLabs",
    company: "InnovateLabs",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    content:
      "Exceptional work! They built our e-commerce platform from scratch and it's been running flawlessly. The scalability and performance are exactly what we needed.",
    rating: 5,
  },
  {
    id: 5,
    name: "Lisa Anderson",
    role: "Product Manager, CloudTech",
    company: "CloudTech",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
    content:
      "Their agile approach and transparent communication made the entire development process smooth. We launched ahead of schedule and under budget!",
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
      className="py-20 px-4 sm:px-6 lg:px-8 w-full relative overflow-hidden z-10"
    >
      {/* Section Background with 50% Opacity */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url('/section_bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.5,
        }}
      />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-6 rounded-3xl bg-card/30" />
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 600"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <defs>
            <filter
              id="blur-testimonials"
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
            >
              <feGaussianBlur stdDeviation="60" />
            </filter>
          </defs>
          <g filter="url(#blur-testimonials)" opacity="0.12">
            <circle cx="240" cy="160" r="200" fill="var(--primary)" />
            <circle cx="920" cy="420" r="300" fill="var(--secondary)" />
            <circle cx="700" cy="120" r="160" fill="var(--background)" />
          </g>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground">
            Don&apos;t just take our word for it
          </p>
        </motion.div>

        <Carousel
          setApi={setApi}
          className="w-full max-w-5xl mx-auto"
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="p-1"
                >
                  <Card className="p-8 md:p-12">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        type: "spring",
                      }}
                    >
                      <Quote className="w-12 h-12 text-primary mb-6" />
                    </motion.div>

                    <motion.p
                      className="text-lg md:text-xl text-foreground mb-8 leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      &ldquo;{testimonial.content}&rdquo;
                    </motion.p>

                    <motion.div
                      className="flex items-center gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full bg-primary/10"
                      />
                      <div>
                        <h4 className="text-lg font-bold text-foreground">
                          {testimonial.name}
                        </h4>
                        <p className="text-muted-foreground">
                          {testimonial.role}
                        </p>
                        <p className="text-sm text-muted-foreground/70">
                          {testimonial.company}
                        </p>
                      </div>
                    </motion.div>

                    {/* Star Rating */}
                    <motion.div
                      className="flex gap-1 mt-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.svg
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                          viewBox="0 0 20 20"
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.3,
                            delay: i * 0.1,
                            type: "spring",
                          }}
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </motion.svg>
                      ))}
                    </motion.div>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === current
                    ? "w-8 bg-primary"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  );
}
