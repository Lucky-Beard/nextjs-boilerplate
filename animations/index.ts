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
export const scrollTriggerRevealConfig = (trigger?: string | HTMLElement) => {
  return {
    trigger,
    start: 'top 75%',
    toggleActions: 'play none none none',
    // toggleActions: 'play none none reverse',
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

export const rotateRevealLeft = {
  rotation: 90,
  transformOrigin: 'center center',
  duration: defaultDuration,
  ease: defaultEase
};

export const rotateRevealRight = {
  rotation: -90,
  transformOrigin: 'center center',
  duration: defaultDuration,
  delay: 0.3,
  ease: defaultEase
};

export const rotateRevealRightSm = {
  rotation: 45,
  transformOrigin: 'top right',
  duration: defaultDuration,
  ease: defaultEase
};

export const rotateRevealLeftSm = {
  rotation: -45,
  transformOrigin: 'top left',
  duration: defaultDuration,
  delay: 0.3,
  ease: defaultEase
};

export const scaleDownReveal = {
  y: -50,
  opacity: 0,
  duration: defaultDuration,
  ease: defaultEase
};

export const scaleUpReveal = {
  y: 50,
  opacity: 0,
  duration: defaultDuration,
  ease: defaultEase
};

export const leftFadeInReveal = {
  opacity: 0,
  x: '-50%',
  duration: defaultDuration,
  ease: defaultEase
};

export const rightFadeInReveal = {
  opacity: 0,
  x: '50%',
  duration: defaultDuration,
  ease: defaultEase
};

// extend this list by adding your own predefined animations down here
