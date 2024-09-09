import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TextEffect6 = (sectionRef, textRefs) => {
  useEffect(() => {
    const section = sectionRef.current;
    const textElements = textRefs.current.filter(Boolean); // 빈 참조 제외

    if (section && textElements.length > 0) {
      const animation = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=5000",
          scrub: true,
          pin: true,
          anticipatePin: 1,
          markers: true,
        },
      });

      textElements.forEach((el, index) => {
        animation.fromTo(el, 
          { 
            opacity: 0, // 시작 상태
            y: -100,
            autoAlpha: 0
          }, 
          {
            opacity: 1, // 종료 상태
            y: 0, // 제자리로 돌아감
            autoAlpha: 1,
            ease: "back.out(4)",
            duration: 1,
            delay: index * 0.5, // Delay each element by index * 0.5
          }
        );
      });
      

      return () => {
        animation.kill();
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }
  }, [sectionRef, textRefs]);
};

export default TextEffect6;
