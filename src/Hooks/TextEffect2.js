import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TextEffect2 = (sectionRef, textRef) => {
  useEffect(() => {
    const ani7 = gsap.timeline();
    ani7.from("#section2 .text1", {autoAlpha: 0, duration: 0, y: 50}, "+=1")
    ani7.from("#section2 .text2", {autoAlpha: 0, duration: 0, y: 50}, "+=1")
    ani7.from("#section2 .text3", {autoAlpha: 0, duration: 0, y: 50}, "+=1")
    ani7.from("#section2 .text4", {autoAlpha: 0, duration: 0, y: 50}, "+=1")
    ani7.from("#section2 .text5", {autoAlpha: 0, duration: 0, y: 50}, "+=1")
    ani7.from("#section2 .text6", {autoAlpha: 0, duration: 0, y: 50}, "+=1")
    ani7.from("#section2 .text7", {autoAlpha: 0, duration: 0, y: 50}, "+=1")
    ani7.from("#section2 .text8", {autoAlpha: 0, duration: 0, y: 50}, "+=1")
    ani7.from("#section2 .text9", {autoAlpha: 0, duration: 0, y: 50}, "+=1")
    ani7.from("#section2 .text10", {autoAlpha: 0, duration: 0, y: 50}, "+=1")
    ani7.from("#section2 .text11", {autoAlpha: 0, duration: 0, y: 50}, "+=1")
    ani7.from("#section2 .text12", {autoAlpha: 0, duration: 0, y: 50}, "+=1")
    ani7.from("#section2 .text13", {autoAlpha: 0, duration: 0, y: 50}, "+=1")
    ani7.from("#section2 .text14", {autoAlpha: 0, duration: 0, y: 50}, "+=1")
    ani7.from("#section2 .text15", {autoAlpha: 0, duration: 0, y: 50}, "+=1")
    ani7.from("#section2 .text16", {autoAlpha: 0, duration: 0, y: 50}, "+=1")
    ani7.from("#section2 .text17", {autoAlpha: 0, duration: 0, y: 50}, "+=1")
    ani7.from("#section2 .text18", {autoAlpha: 0, duration: 0, y: 50}, "+=1")
    ani7.from("#section2 .text19", {autoAlpha: 0, duration: 0, y: 50}, "+=1")
    ani7.from("#section2 .text20", {autoAlpha: 0, duration: 0, y: 50}, "+=1")
    
    const scrollTriggerInstance = ScrollTrigger.create({
      animation: ani7,
      trigger: "#section2",
      start: "top top", 
      end: "+=6000",
      scrub: true, // 마우스 스크롤 속도에 따라 속도 조절
      pin: true, // 배경 고정 옵션
      anticipatePin: 1, // 부드럽게 전환옵션
      markers: true 
    });

    // 정리 함수 반환
    return () => {
      scrollTriggerInstance.kill(); 
      ani7.kill();
    };
  }, [sectionRef, textRef]);
};

export default TextEffect2;
