"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import hero1 from "../../public/hero-1.jpg"

const SLIDES = [
  {
    image: hero1,
    tagline: "RELIABLE MACHINES. SKILLED TEAM.",
    titleLines: ["POWERING", "INFRASTRUCTURE", "BUILDING THE NATION"],
    highlightIndex: 1,
  },
  {
    image: hero1,
    tagline: "RELIABLE MACHINES. SKILLED TEAM.",
    titleLines: ["POWERING", "INFRASTRUCTURE", "BUILDING THE NATION"],
    highlightIndex: 1,
  },
  {
    image: hero1,
    tagline: "RELIABLE MACHINES. SKILLED TEAM.",
    titleLines: ["POWERING", "INFRASTRUCTURE", "BUILDING THE NATION"],
    highlightIndex: 1,
  },
];

export default function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="relative w-full h-[92vh] sm:h-[85vh] lg:h-[80vh] min-h-[560px] sm:min-h-[600px] max-h-[760px] overflow-hidden">
      <div className="embla h-full" ref={emblaRef}>
        <div className="embla__container flex h-full">
          {SLIDES.map((slide, i) => (
            <div key={i} className="embla__slide relative flex-[0_0_100%] h-full">
              <Image
                src={slide.image}
                alt={slide.titleLines.join(" ")}
                fill
                priority={i === 0}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/60 sm:via-navy/50 to-navy/30 sm:to-transparent" />

              <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-center px-4 sm:px-6 pb-20 sm:pb-16 lg:pb-24">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-white text-xs sm:text-sm font-semibold tracking-widest mb-3 sm:mb-4"
                >
                  {slide.tagline}
                </motion.p>

                <div className="max-w-xl">
                  {slide.titleLines.map((line, li) => (
                    <motion.h1
                      key={li}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: li * 0.1 }}
                      className={cn(
                        "text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.1]",
                        li === slide.highlightIndex ? "text-brand" : "text-white"
                      )}
                    >
                      {line}
                    </motion.h1>
                  ))}
                </div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-gray-300 text-sm sm:text-base mt-4 sm:mt-6 max-w-md"
                >
                  RD Enterprises is a trusted name in construction services
                  and earthmoving equipment rental. We deliver quality, on
                  time, every time.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mt-6 sm:mt-8"
                >
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center gap-1 bg-brand hover:bg-brand-dark text-white font-semibold px-6 py-3 rounded transition-colors text-sm sm:text-base w-full sm:w-auto"
                  >
                    Our Services <ChevronRight size={18} />
                  </Link>
                  <Link
                    href="/equipment"
                    className="inline-flex items-center justify-center gap-1 border border-white text-white font-semibold px-6 py-3 rounded hover:bg-white/10 transition-colors text-sm sm:text-base w-full sm:w-auto"
                  >
                    Our Equipment <ChevronRight size={18} />
                  </Link>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        className="hidden sm:flex absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/30 hover:bg-black/50 text-white items-center justify-center transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={scrollNext}
        className="hidden sm:flex absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/30 hover:bg-black/50 text-white items-center justify-center transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      <div className="absolute bottom-30 sm:bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={cn(
              "h-2 sm:h-2.5 rounded-full transition-all",
              i === selectedIndex ? "bg-brand-light w-5 sm:w-6" : "bg-white/50 w-2 sm:w-2.5"
            )}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}