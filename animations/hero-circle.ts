import { _as } from 'animations';
import gsap, { Sine } from 'gsap';

export const heroCircleAnimation = () => {
  gsap.to('.xlHeader--right .xlHeader__header', {
    xPercent: -20,
    ease: 'none',
    scrollTrigger: {
      trigger: '.xlHeader--right .xlHeader__header',
      start: 'top right',
      end: 'top left',
      scrub: true
    }
  });
};
