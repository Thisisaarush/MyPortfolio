export const CarouselAnimation = {
  initial: (direction: number) => {
    return { x: direction > 0 ? "100%" : "-100%", opacity: 0 };
  },
  animate: { x: 0, opacity: 1 },
  exit: (direction: number) => {
    return { x: direction < 0 ? "100%" : "-100%", opacity: 0 };
  },
};
