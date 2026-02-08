import { useRef, useCallback } from "react";
import type { CarouselApi } from "@/components/ui/carousel";

const WHEEL_COOLDOWN_MS = 300;

export function useCarouselWheel() {
  const apiRef = useRef<CarouselApi>();
  const lastScrollRef = useRef(0);

  const setApi = useCallback((api: CarouselApi) => {
    apiRef.current = api;
  }, []);

  const onWheel = useCallback((e: React.WheelEvent) => {
    const now = Date.now();
    if (now - lastScrollRef.current < WHEEL_COOLDOWN_MS) return;
    lastScrollRef.current = now;

    if (e.deltaX > 0 || e.deltaY > 0) {
      apiRef.current?.scrollNext();
    } else {
      apiRef.current?.scrollPrev();
    }
  }, []);

  return { setApi, onWheel };
}
