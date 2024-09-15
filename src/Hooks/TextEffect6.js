import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TextEffect6 = (sectionRef, textRefs) => {
  useEffect(() => {
    const section = sectionRef.current;
    const textElements = textRefs.current.filter(Boolean); // 빈 참조 제외

    if (section && textElements.length > 0) {
      // 반응형 애니메이션 설정
      const mm = ScrollTrigger.matchMedia({
        // 768px 이상의 화면에서 적용할 애니메이션
        "(min-width: 768px)": function() {
          const animation = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "+=5000",
              scrub: true,
              pin: true,
              anticipatePin: 1,
              markers: false,
            },
          });

          textElements.forEach((el, index) => {
            animation.fromTo(el, 
              { 
                opacity: 0, // 시작 상태
                y: -100,
                autoAlpha: 0,
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
        },

        // 769px 이하의 화면에서 적용할 애니메이션 (모바일)
        "(max-width: 769px)": function() {
          const animation = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "+=3000", // 모바일에서 스크롤 길이를 줄임
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
                y: -50,  // 모바일에서는 작은 y축 이동
                autoAlpha: 0,
              }, 
              {
                opacity: 1, // 종료 상태
                y: 0,
                autoAlpha: 1,
                ease: "back.out(4)",
                duration: 0.8,  // 모바일에서 좀 더 빠르게
                delay: index * 0.3,  // 모바일에서는 짧은 딜레이
              }
            );
          });
        }
      });

      return () => {
        mm.revert();  // matchMedia 클린업
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }
  }, [sectionRef, textRefs]);
};

export default TextEffect6;
