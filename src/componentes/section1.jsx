import React, {useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import TextEffect1 from 'Hooks/TextEffect1';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Section1 = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  // 커스텀 훅 호출
  TextEffect1(sectionRef, textRef);
  
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