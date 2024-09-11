import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

//Section4

gsap.registerPlugin(ScrollTrigger);

const AnEffect4 = (triggerRef, gsapRefs) => {
  useEffect(() => {
    const timelineCards = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current, // 스크롤 트리거 대상: ul 요소
        start: 'top', // 트리거 시작점: 브라우저의 20%에서 시작
        end: 'bottom 10px ', // 트리거 종료점: 브라우저의 80%에서 종료
        scrub: 1, // 스크롤과 애니메이션이 연동되도록 설정
        pin: true, // 해당 요소 고정
        markers: true, // 스크롤트리거 디버깅 마커
      }
    });

   // 각 카드 요소에 대해 scale(크기 변화)과 opacity(투명도 변화) 적용
    gsapRefs.forEach(ref => {
      timelineCards.fromTo(ref.current, {x: -100, opacity: 0, rx: 0}, {x: 0, opacity: 1, rx: 100});
    });

    // timelineCards.fromTo(gsap01Ref.current, {x:-100, opacity: 0, rx: 0,}, {x: 0, opacity:1,  rx: 100, });
    // timelineCards.fromTo(gsap02Ref.current, {x:-100, opacity: 0, rx: 0,}, {x: 0, opacity:1,  rx: 100, });
    // timelineCards.fromTo(gsap03Ref.current, {x:-100, opacity: 0, rx: 0,}, {x: 0, opacity:1,  rx: 100, });
    // timelineCards.fromTo(gsap04Ref.current, {x:-100, opacity: 0, rx: 0,}, {x: 0, opacity:1,  rx: 100, });


    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [triggerRef, gsapRefs]);
};

export default AnEffect4;
