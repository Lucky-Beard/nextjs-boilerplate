import { useGSAP } from '../hooks/useGSAP';
import gsap from 'gsap';

// exports the animation selector, simply prefixes the animation name with the parameter name
export const _as = (name: string): string => {
  return `[data-animation="${name}"]`;
};

// a type used in a list of scrolltrigger animations
export type ScrollRevealType = {
  animSelector: string;
  scrollSelector?: string;
  animProps: gsap.TweenVars;
};

// a generic scroll config for all animations
export const scrollTriggerRevealConfig = (trigger?: string) => {
  return {
    trigger,
    start: 'top 65%',
    toggleActions: 'play none none none',
    markers: false
  };
};

// initial values
const defaultDuration = 1.5;
const defaultEase = 'power3.out';

// a list of predefined animation props for GSAP
export const fadeReveal = {
  opacity: 0,
  duration: defaultDuration,
  ease: defaultEase
};

export const scaleDownReveal = {
  scale: 1.1,
  opacity: 0,
  duration: defaultDuration,
  ease: defaultEase
};

export const scaleUpReveal = {
  scale: 0.9,
  opacity: 0,
  duration: defaultDuration,
  ease: defaultEase
};

export const leftFadeInReveal = {
  opacity: 0,
  x: -50,
  duration: defaultDuration,
  ease: defaultEase
};

export const rightFadeInReveal = {
  opacity: 0,
  x: 50,
  duration: defaultDuration,
  ease: defaultEase
};

// extend this list by adding your own predefined animations down here
