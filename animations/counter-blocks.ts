import { _as, scrollTriggerRevealConfig } from 'animations';
import gsap, { Sine } from 'gsap';

export const counterBlocksAnimation = () => {
  const one = gsap.utils.toArray<HTMLElement>(_as('counter-1'));
  one.forEach((li) => {
    gsap.from(li, {
      scrollTrigger: scrollTriggerRevealConfig(li),
      x: -100,
      ease: Sine.easeOut,
      duration: 0.5,
      opacity: 0,
      stagger: 0.1
    });
  });

  const two = gsap.utils.toArray<HTMLElement>(_as('counter-2'));
  two.forEach((li) => {
    gsap.from(li, {
      scrollTrigger: scrollTriggerRevealConfig(li),
      y: 100,
      ease: Sine.easeOut,
      duration: 0.5,
      delay: 0.3,
      opacity: 0,
      stagger: 0.1
    });
  });

  const three = gsap.utils.toArray<HTMLElement>(_as('counter-3'));
  three.forEach((li) => {
    gsap.from(li, {
      scrollTrigger: scrollTriggerRevealConfig(li),
      y: 100,
      ease: Sine.easeOut,
      duration: 0.5,
      delay: 0.6,
      opacity: 0,
      stagger: 0.5
    });
  });

  const four = gsap.utils.toArray<HTMLElement>(_as('counter-4'));
  four.forEach((li) => {
    gsap.from(li, {
      scrollTrigger: scrollTriggerRevealConfig(li),
      x: 100,
      ease: Sine.easeOut,
      duration: 0.5,
      opacity: 0,
      stagger: 0.1,
      delay: 1
    });
  });

  const fourOther = gsap.utils.toArray<HTMLElement>(_as('counter-4-other'));
  fourOther.forEach((li) => {
    gsap.from(li, {
      scrollTrigger: scrollTriggerRevealConfig(li),
      y: 100,
      ease: Sine.easeOut,
      duration: 0.5,
      delay: 1,
      opacity: 0,
      stagger: 0.1
    });
  });

  const five = gsap.utils.toArray<HTMLElement>(_as('counter-5'));
  five.forEach((li) => {
    gsap.from(li, {
      scrollTrigger: scrollTriggerRevealConfig(li),
      x: 100,
      ease: Sine.easeOut,
      duration: 0.5,
      opacity: 0,
      stagger: 0.1,
      delay: 1.5
    });
  });
};
