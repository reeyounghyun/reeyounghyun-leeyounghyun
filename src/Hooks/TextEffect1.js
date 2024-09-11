import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Section1
gsap.registerPlugin(ScrollTrigger);

const TextEffect1 = (sectionRef, textRef) => {
  useEffect(() => {
    // 반응형 애니메이션 설정
    const mm = ScrollTrigger.matchMedia({
      // 768px 이상의 화면에서 적용할 애니메이션
      "(min-width: 768px)": function() {
        const ani6 = gsap.timeline();
        ani6.to(textRef.current, { scale: 5, duration: 2 })
            .to(textRef.current, { scale: 10, duration: 2 })
            .to(textRef.current, { scale: 20, duration: 2 })
            .to(textRef.current, { scale: 30, duration: 2 })
            .to(textRef.current, { scale: 50, duration: 2 })
            .to(textRef.current, { scale: 60, duration: 2 })
            .to(textRef.current, { autoAlpha: 0 });
        
        ScrollTrigger.create({
          animation: ani6,
          trigger: sectionRef.current,
          start: "top top",
          end: "+=1500",
          scrub: true,
          pin: true, 
          anticipatePin: 1,
          pinSpacing: true,
          markers: false
        });
      },

      // 769px 이하의 화면에서 적용할 애니메이션 (모바일)
      "(max-width: 769px)": function() {
        const ani6 = gsap.timeline();
        ani6.to(textRef.current, { scale: 3, duration: 1.5 })  // 모바일에서 더 작은 크기와 빠른 애니메이션
            .to(textRef.current, { scale: 5, duration: 1.5 })
            .to(textRef.current, { scale: 7, duration: 1.5 })
            .to(textRef.current, { scale: 10, duration: 1.5 })
            .to(textRef.current, { scale: 15, duration: 1.5 })
            .to(textRef.current, { scale: 20, duration: 1.5 })
            .to(textRef.current, { autoAlpha: 0 });
        
        ScrollTrigger.create({
          animation: ani6,
          trigger: sectionRef.current,
          start: "top top",
          end: "+=1500",  // 모바일에서 스크롤 길이를 줄임
          scrub: true,
          pin: true, 
          anticipatePin: 1,
          pinSpacing: true,
          markers: false
        });
      }
    });

    // 정리 함수 반환
    return () => {
      mm.revert();  // matchMedia 클린업
    };
  }, [sectionRef, textRef]);
};

export default TextEffect1;
