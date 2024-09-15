import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

//Section4

gsap.registerPlugin(ScrollTrigger);

const AnEffect4 = (triggerRef, gsapRefs) => {
  useEffect(() => {
    // matchMedia를 통해 반응형 애니메이션 설정
    const mm = ScrollTrigger.matchMedia({
      // 768px 이상의 화면에서 적용할 애니메이션
      "(min-width: 768px)": function() {
        const timelineCards = gsap.timeline({
          scrollTrigger: {
            trigger: triggerRef.current, 
            start: 'top', //트리거 시작점
            end: 'bottom 10px', //트리거 종료점
            scrub: 1, //스크롤과 애니메이션이 연동되도록 설정
            pin: true, 
            markers: false, 
          }
        });

        gsapRefs.forEach(ref => {
          timelineCards.fromTo(ref.current, { x: -100, opacity: 0 }, { x: 0, opacity: 1 });
        });
      },

      // 769px 이하의 화면에서 적용할 애니메이션 (높이 조정 추가)
      "(max-width: 769px)": function() {
        const timelineCards = gsap.timeline({
          scrollTrigger: {
            trigger: triggerRef.current, 
            start: 'top', 
            end: '+=3000',
            scrub: 1, 
            pin: true, 
            markers: false, 
          }
        });

        gsapRefs.forEach(ref => {
          timelineCards.fromTo(ref.current, 
            { x: -50, opacity: 0, height: '1000vh', duration: 1.5 },  // 초기 높이 설정
            { x: 0, opacity: 1, height: '100px', duration: 1.5  }     // 애니메이션 후 높이 증가
          );
        });
      }
    });

    // Cleanup: 모든 ScrollTrigger 인스턴스 제거
    return () => {
      mm.revert(); // matchMedia 클린업
    };
  }, [triggerRef, gsapRefs]);
};

export default AnEffect4;
