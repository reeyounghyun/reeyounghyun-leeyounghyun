import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Section5
gsap.registerPlugin(ScrollTrigger);

const AnEffect5 = (triggerRef, gsapRefs) => {
  useEffect(() => {
    // 반응형 애니메이션 설정
    const mm = ScrollTrigger.matchMedia({
      // 768px 이상의 화면에서 적용할 애니메이션
      "(min-width: 768px)": function() {
        const timelineCards = gsap.timeline({
          scrollTrigger: {
            trigger: triggerRef.current, 
            start: 'top top', 
            end: '+=6000 top', 
            scrub: true, 
            pin: true, 
            anticipatePin: 1,
            pinSpacing: true,
            markers: true, 
          }
        });

        // 첫 번째 카드: x축 이동과 opacity 변화
        timelineCards.fromTo(gsapRefs[0].current, 
          { x: 1000, y: 0, scale: 0, opacity: 0 }, 
          { x: 800, y: 100, scale: 0.8, opacity: 1 }
        );

        // 두 번째 카드: y축 이동과 scale 변화
        timelineCards.fromTo(gsapRefs[1].current, 
          { x: -1000, y: 0, scale: 0, opacity: 0 }, 
          { x: 50, y: 25, scale: 0.8, opacity: 1 }
        );
      },

      // 769px 이하의 화면에서 적용할 애니메이션 (모바일)
      "(max-width: 769px)": function() {
        const timelineCards = gsap.timeline({
          scrollTrigger: {
            trigger: triggerRef.current, 
            start: 'top top', 
            end: '+=3000 top',  // 모바일에서 트리거 종료 지점 조정
            scrub: true, 
            pin: true, 
            anticipatePin: 1,
            pinSpacing: true,
            markers: true, 
          }
        });

        // 첫 번째 카드: 모바일에서의 x축 이동과 크기 변화
        timelineCards.fromTo(gsapRefs[0].current, 
          { x: 500, y: 0, scale: 0, opacity: 0 },  // 초기 위치와 크기 다르게 설정
          { x: -30, y: 150, scale: 0.7, opacity: 1 }  // 모바일에서 작은 크기로
        );

        // 두 번째 카드: 모바일에서의 y축 이동과 크기 변화
        timelineCards.fromTo(gsapRefs[1].current, 
          { x: -500, y: 0, scale: 0, opacity: 0 },  // 초기 위치와 크기 다르게 설정
          { x: -30, y:20, scale: 0.7, opacity: 1 }  // 모바일에서 작은 크기로
        );
      }
    });

    // Cleanup: 모든 ScrollTrigger 인스턴스 제거
    return () => {
      mm.revert();  // matchMedia 클린업
    };
  }, [triggerRef, gsapRefs]);
};

export default AnEffect5;