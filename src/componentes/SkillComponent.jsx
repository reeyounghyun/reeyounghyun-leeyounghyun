import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const SkillComponent = () => {
  const horizontalRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const sections = sectionsRef.current;

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: horizontalRef.current,
        start: 'top top',
        end: () => `+=${horizontalRef.current.offsetWidth - window.innerWidth}`,
        pin: true,
        scrub: 1,
        snap: {
          snapTo: 1 / (sections.length - 1),
          inertia: false,
          duration: { min: 0.1, max: 0.1 },
        },
        invalidateOnRefresh: true,
        anticipatePin: 1,
      },
    });

    return () => {
      if (ScrollTrigger) ScrollTrigger.kill();
    };
  }, []);

  return (
    <div className="text-white bg-gray-800 ">
    </div>
  );
};

export default SkillComponent;
