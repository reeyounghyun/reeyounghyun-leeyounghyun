import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Section1 = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ani6 = gsap.timeline();
    ani6.to(textRef.current, { scale: 5, duration: 2 })
    ani6.to(textRef.current, { scale: 10, duration: 2 })
    ani6.to(textRef.current, { scale: 20, duration: 2 })
    ani6.to(textRef.current, { scale: 30, duration: 2 })
    ani6.to(textRef.current, { scale: 50, duration: 2 })
    ani6.to(textRef.current, { scale: 60, duration: 2 })
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
  
    return () => {
      scrollTriggerInstance.kill();
      ani6.kill();
    };
  }, []);
  
  return (
    <section
      id="section1"
      ref={sectionRef}
      className="relative flex items-center justify-center w-full h-screen bg-[#0B1A2E]"
    >
      <span className="absolute bottom-5 right-5 text-[5vw] leading-none">01.세로</span>
      <div ref={textRef} className="text-center text-[5vw] font-bold uppercase"> Welcome to my <br/> projects </div>
    </section>
  );
};

export default Section1;