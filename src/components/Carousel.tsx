import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "./Card";
import { cn } from "@/lib/utils";

interface CarouselProps {
  items: any[];
  type: "project" | "certificate";
}

export function Carousel({ items, type }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center", // 👈 Snap to center — ensures only full cards visible
      skipSnaps: false,
      dragFree: false, // Clean snapping
      containScroll: "keepSnaps", // Prevents empty space at ends
      slidesToScroll: 1,
      // 👇 Add this to force consistent card width
      breakpoints: {
        "(min-width: 1024px)": { slidesToScroll: 1 },
      },
    },
    [
      Autoplay({
        delay: 4000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative group/carousel">
      {/* Outer padding container */}
      <div className="px-6 sm:py-6">
        {/* Embla root - no padding/margin here */}
        <div ref={emblaRef} className=" overflow-hidden cursor-grab active:cursor-grabbing py-4">
          <div className="flex gap-6 pl-6"> {/* 👈 Consistent spacing */}
            {items.map((item) => (
              <div
                key={item.id}
                className="flex-none w-[280px] sm:w-[320px] lg:w-[360px]"
              >
                <Card item={item} type={type} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        className={cn(
          "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10",
          "opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300",
          "bg-background/80 backdrop-blur-sm border-border shadow-sm",
          "hidden sm:flex"
        )}
        aria-label="Previous"
      >
        <ChevronLeft className="w-4 h-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        onClick={scrollNext}
        disabled={!canScrollNext}
        className={cn(
          "absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10",
          "opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300",
          "bg-background/80 backdrop-blur-sm border-border shadow-sm",
          "hidden sm:flex"
        )}
        aria-label="Next"
      >
        <ChevronRight className="w-4 h-4" />
      </Button>

      {/* Gradient overlays - subtle, narrow */}
      <div className="absolute inset-y-0 left-0 w-8 sm:w-10 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-8 sm:w-10 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
    </div>
  );
}