import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TextEffect1 = (sectionRef, textRef) => {
  useEffect(() => {
    const ani6 = gsap.timeline();
    ani6.to(textRef.current, { scale: 5, duration: 2 })
        .to(textRef.current, { scale: 10, duration: 2 })
        .to(textRef.current, { scale: 20, duration: 2 })
        .to(textRef.current, { scale: 30, duration: 2 })
        .to(textRef.current, { scale: 50, duration: 2 })
        .to(textRef.current, { scale: 60, duration: 2 })
        .to(textRef.current, { autoAlpha: 0 });
    
    const scrollTriggerInstance = ScrollTrigger.create({
      animation: ani6,
      trigger: sectionRef.current,
      start: "top top",
      end: "+=1500",
      scrub: true,
      pin: true, 
      anticipatePin: 1,
      markers: true
    });

    // 정리 함수 반환
    return () => {
      scrollTriggerInstance.kill();
      ani6.kill();
    };
  }, [sectionRef, textRef]);
};

export default TextEffect1;
