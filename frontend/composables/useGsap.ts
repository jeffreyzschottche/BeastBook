import { gsap } from 'gsap'

export const useGsap = () => {
  return {
    gsap,
    // Common animation presets
    fadeIn: (target: gsap.TweenTarget, duration = 0.5) => {
      return gsap.fromTo(target, { opacity: 0 }, { opacity: 1, duration })
    },
    fadeOut: (target: gsap.TweenTarget, duration = 0.5) => {
      return gsap.to(target, { opacity: 0, duration })
    },
    slideInFromBottom: (target: gsap.TweenTarget, duration = 0.5) => {
      return gsap.fromTo(target, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration })
    },
    slideInFromLeft: (target: gsap.TweenTarget, duration = 0.5) => {
      return gsap.fromTo(target, { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration })
    },
    slideInFromRight: (target: gsap.TweenTarget, duration = 0.5) => {
      return gsap.fromTo(target, { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration })
    },
    scaleIn: (target: gsap.TweenTarget, duration = 0.5) => {
      return gsap.fromTo(target, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration })
    },
  }
}
