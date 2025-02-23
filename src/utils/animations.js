import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export const animateWithGsapTimeline = (
  timeline,
  rotationRef,
  rotationState,
  firstTarget,
  secondTarget,
  animationProps
) => {
  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: "power2.inOut",
  });

  timeline.to(
    firstTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<"
  );

  timeline.to(
    secondTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<"
  );
};

export const g_fadeIn = (selector, props = {}, scroll = "85", sec = "1") => {
  gsap.to(selector, {
    ...props,
    opacity: 1,
    duration: sec,
    scrollTrigger: {
      trigger: selector,
      toggleActions: "restart reverse restart reverse",
      start: `top ${scroll}%`,
    },
  });
}

export const slider = (selector, slide, props = {}) => {
  gsap.to(selector, {
    ...props,
    transform: `translateX(calc(-100% * ${slide}))`,
    duration: 2,
    ease: "power2.inOut",
  });
}