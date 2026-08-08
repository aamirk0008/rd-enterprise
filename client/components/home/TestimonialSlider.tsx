"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "RD Enterprises completed our project with excellent quality and within the committed time. Highly professional team!",
    author: "Ambuja Foundation",
  },
  {
    quote:
      "Reliable machines, timely support and great work quality. We are happy with their services.",
    author: "Government Department",
  },
  {
    quote:
      "Their dedication to safety and quality makes them our first choice for every infrastructure project.",
    author: "Private Contractor",
  },
  {
    quote:
      "Their dedication to safety and quality makes them our first choice for every infrastructure project.",
    author: "Private Contractor",
  },
  {
    quote:
      "Their dedication to safety and quality makes them our first choice for every infrastructure project.",
    author: "Private Contractor",
  },
  {
    quote:
      "Their dedication to safety and quality makes them our first choice for every infrastructure project.",
    author: "Private Contractor",
  },
];

export default function TestimonialSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: "trimSnaps",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScroll, setCanScroll] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    const onResize = () => setCanScroll(emblaApi.scrollSnapList().length > 1);

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onResize);
    onResize();

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onResize);
    };
  }, [emblaApi]);

  return (
    <section className="relative bg-navy py-10 sm:py-8 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <p className="text-brand text-xs sm:text-sm font-bold tracking-widest uppercase text-center mb-6 sm:mb-8">
          What Our Clients Say
        </p>

        <div className="relative">
          {canScroll && (
            <>
              <button
                onClick={scrollPrev}
                className="hidden lg:flex absolute -left-14 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white items-center justify-center transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={scrollNext}
                className="hidden lg:flex absolute -right-14 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white items-center justify-center transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -mx-2">
              {TESTIMONIALS.map((t, i) => (
                <div
                  key={i}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.3333%] px-2"
                >
                  <TestimonialCard quote={t.quote} author={t.author} />
                </div>
              ))}
            </div>
          </div>

          {canScroll && (
            <div className="flex justify-center gap-2 mt-5">
              {TESTIMONIALS.map((_, i) => (
                <span
                  key={i}
                  className={`h-2 rounded-full transition-all ${
                    i === selectedIndex ? "bg-brand w-5" : "bg-white/30 w-2"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ quote, author }: { quote: string; author: string }) {
  return (
    <div className="relative bg-navy-light border border-white/10 rounded-xl p-6 sm:p-7 h-full min-h-[190px] flex flex-col justify-center">
      <div>
        <div className="absolute top-2 left-6 w-9 h-9 rounded-full bg-brand flex items-center justify-center">
          <Quote size={16} className="text-white" fill="white" />
        </div>
        <p className="text-gray-300 text-sm leading-relaxed mt-3">{quote}</p>
      </div>
      <p className="text-white text-sm font-semibold mt-4">– {author}</p>
    </div>
  );
}