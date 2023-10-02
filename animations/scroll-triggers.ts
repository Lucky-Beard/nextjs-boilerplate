import { scrollTriggerRevealConfig, _as } from 'animations';
import gsap from 'gsap';
import {
  leftFadeInReveal,
  rightFadeInReveal,
  fadeReveal,
  scaleUpReveal,
  rotateRevealLeft,
  rotateRevealRight,
  rotateRevealLeftSm,
  rotateRevealRightSm,
  scaleDownReveal
} from 'animations';

/**
 * ANIMATION OPSIONS
 *
 * How to use:
 * data-animation="ANIMATION-NAME"
 *
 * fade-in-right-to-left-reveal
 * fade-in-right-to-left-reveal-delay-1
 * fade-in-right-to-left-reveal-delay-2
 * fade-in-right-to-left-reveal-delay-3
 * fade-in-left-to-right-reveal
 * fade-in-left-to-right-reveal-delay-1
 * fade-in-left-to-right-reveal-delay-2
 * fade-in-left-to-right-reveal-delay-3
 * scale-up-reveal
 * scale-up-reveal-delay-1
 * scale-up-reveal-delay-2
 * scale-up-reveal-delay-3
 * scale-down-reveal
 * fade-in-reveal
 * rotate-reveal-left
 * rotate-reveal-right
 * rotate-reveal-sm-left
 * rotate-reveal-sm-right
 * number-counter
 */

const formatNumber = (value: number, decimals: number) => {
  let s = (+value).toLocaleString('en-US').split('.');
  return decimals
    ? s[0] + '.' + ((s[1] || '') + '00000000').substr(0, decimals)
    : s[0];
};

/* All of the below can be used on all pages (no need to import anything) */

export const scrollTriggerAnimations = () => {
  // data-animation="fade-in-right-to-left-reveal"
  const left = gsap.utils.toArray<HTMLElement>(
    _as('fade-in-right-to-left-reveal')
  );
  left.forEach((li) => {
    gsap.from(li, {
      scrollTrigger: scrollTriggerRevealConfig(li),
      ...rightFadeInReveal
    });
  });

  // data-animation="fade-in-right-to-left-reveal-delay-1"
  const leftDelay1 = gsap.utils.toArray<HTMLElement>(
    _as('fade-in-right-to-left-reveal-delay-1')
  );
  leftDelay1.forEach((li) => {
    gsap.from(li, {
      scrollTrigger: scrollTriggerRevealConfig(li),
      ...rightFadeInReveal,
      delay: 0.5
    });
  });

  // data-animation="fade-in-right-to-left-reveal-delay-2"
  const leftDelay2 = gsap.utils.toArray<HTMLElement>(
    _as('fade-in-right-to-left-reveal-delay-2')
  );
  leftDelay2.forEach((li) => {
    gsap.from(li, {
      scrollTrigger: scrollTriggerRevealConfig(li),
      ...rightFadeInReveal,
      delay: 1
    });
  });

  // data-animation="fade-in-right-to-left-reveal-delay-3"
  const leftDelay3 = gsap.utils.toArray<HTMLElement>(
    _as('fade-in-right-to-left-reveal-delay-3')
  );
  leftDelay3.forEach((li) => {
    gsap.from(li, {
      scrollTrigger: scrollTriggerRevealConfig(li),
      ...rightFadeInReveal,
      delay: 1.5
    });
  });

  // data-animation="fade-in-left-to-right-reveal"
  const right = gsap.utils.toArray<HTMLElement>(
    _as('fade-in-left-to-right-reveal')
  );
  right.forEach((li) => {
    gsap.from(li, {
      scrollTrigger: scrollTriggerRevealConfig(li),
      ...leftFadeInReveal
    });
  });

  // data-animation="fade-in-left-to-right-reveal-delay-1"
  const rightDelay1 = gsap.utils.toArray<HTMLElement>(
    _as('fade-in-left-to-right-reveal-delay-1')
  );
  rightDelay1.forEach((li) => {
    gsap.from(li, {
      scrollTrigger: scrollTriggerRevealConfig(li),
      ...leftFadeInReveal,
      delay: 0.5
    });
  });

  // data-animation="fade-in-left-to-right-reveal-delay-2"
  const rightDelay2 = gsap.utils.toArray<HTMLElement>(
    _as('fade-in-left-to-right-reveal-delay-2')
  );
  rightDelay2.forEach((li) => {
    gsap.from(li, {
      scrollTrigger: scrollTriggerRevealConfig(li),
      ...leftFadeInReveal,
      delay: 1
    });
  });

  // data-animation="fade-in-left-to-right-reveal-delay-3"
  const rightDelay3 = gsap.utils.toArray<HTMLElement>(
    _as('fade-in-left-to-right-reveal-delay-3')
  );
  rightDelay3.forEach((li) => {
    gsap.from(li, {
      scrollTrigger: scrollTriggerRevealConfig(li),
      ...leftFadeInReveal,
      delay: 1.5
    });
  });

  const up = gsap.utils.toArray<HTMLElement>(_as('scale-up-reveal'));
  up.forEach((li) => {
    gsap.from(li, {
      scrollTrigger: scrollTriggerRevealConfig(li),
      ...scaleUpReveal
    });
  });

  const upDelay1 = gsap.utils.toArray<HTMLElement>(
    _as('scale-up-reveal-delay-1')
  );
  upDelay1.forEach((li) => {
    gsap.from(li, {
      scrollTrigger: scrollTriggerRevealConfig(li),
      ...scaleUpReveal,
      delay: 0.5
    });
  });

  const upDelay2 = gsap.utils.toArray<HTMLElement>(
    _as('scale-up-reveal-delay-2')
  );
  upDelay2.forEach((li) => {
    gsap.from(li, {
      scrollTrigger: scrollTriggerRevealConfig(li),
      ...scaleUpReveal,
      delay: 1
    });
  });

  const upDelay3 = gsap.utils.toArray<HTMLElement>(
    _as('scale-up-reveal-delay-3')
  );
  upDelay3.forEach((li) => {
    gsap.from(li, {
      scrollTrigger: scrollTriggerRevealConfig(li),
      ...scaleUpReveal,
      delay: 1.5
    });
  });

  const down = gsap.utils.toArray<HTMLElement>(_as('scale-down-reveal'));
  down.forEach((li) => {
    gsap.from(li, {
      scrollTrigger: scrollTriggerRevealConfig(li),
      ...scaleDownReveal
    });
  });

  // data-animation="fade-in-reveal"
  const fadeIn = gsap.utils.toArray<HTMLElement>(_as('fade-in-reveal'));
  fadeIn.forEach((li) => {
    gsap.from(li, {
      scrollTrigger: scrollTriggerRevealConfig(li),
      ...fadeReveal
    });
  });

  // data-animation="rotate-reveal-left"
  const rotateLeft = gsap.utils.toArray<HTMLElement>(_as('rotate-reveal-left'));
  rotateLeft.forEach((li) => {
    gsap.from(li, {
      scrollTrigger: scrollTriggerRevealConfig(li),
      ...rotateRevealLeft
    });
  });

  // data-animation="rotate-reveal-right"
  const rotateRight = gsap.utils.toArray<HTMLElement>(
    _as('rotate-reveal-right')
  );
  rotateRight.forEach((li) => {
    gsap.from(li, {
      scrollTrigger: scrollTriggerRevealConfig(li),
      ...rotateRevealRight
    });
  });

  // data-animation="rotate-reveal-sm-left"
  const rotateLeftSm = gsap.utils.toArray<HTMLElement>(
    _as('rotate-reveal-sm-left')
  );
  rotateLeftSm.forEach((li) => {
    gsap.from(li, {
      scrollTrigger: scrollTriggerRevealConfig(li),
      ...rotateRevealLeftSm
    });
  });

  // data-animation="rotate-reveal-sm-right"
  const rotateRightSm = gsap.utils.toArray<HTMLElement>(
    _as('rotate-reveal-sm-right')
  );
  rotateRightSm.forEach((li) => {
    gsap.from(li, {
      scrollTrigger: scrollTriggerRevealConfig(li),
      ...rotateRevealRightSm
    });
  });

  const counter = gsap.utils.toArray<HTMLElement>(_as('number-counter'));
  counter.forEach((box) => {
    gsap.from(box, {
      textContent: '0',
      duration: 2,
      ease: 'power1.inOut',
      modifiers: {
        textContent: (value) => formatNumber(value, 0)
      },
      scrollTrigger: {
        trigger: box,
        start: '100px 80%',
        end: 'top 100%'
      }
    });
  });
};
