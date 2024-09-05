import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Section2 = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

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
  
    return () => {
      scrollTriggerInstance.kill(); 
      ani7.kill();
    };
  }, []);
  
  return (
    <section
      id="section2"
      ref={sectionRef}
      className="relative flex items-center justify-center w-full h-screen bg-[#222]"
    >
      <span className="absolute bottom-5 right-5 text-[5vw] leading-none">02.세로</span>
      <div ref={textRef} className="text1 parallax__item__text">[1.협업 툴] </div>
      <div ref={textRef} className="text2 parallax__item__text">git </div>
      <div ref={textRef} className="text3 parallax__item__text">github </div>
      <div ref={textRef} className="text4 parallax__item__text">VS Code </div>
      <div ref={textRef} className="text5 parallax__item__text">VS Studio </div>

      <div ref={textRef} className="text1 parallax__item__text">[1.협업 툴] </div>
      <div ref={textRef} className="text2 parallax__item__text">git </div>
      <div ref={textRef} className="text3 parallax__item__text">github </div>
      <div ref={textRef} className="text4 parallax__item__text">VS Code </div>
      <div ref={textRef} className="text5 parallax__item__text">VS Studio </div>

      <div ref={textRef} class="text6 parallax__item__text t6">[2.협업 툴]</div>
      <div ref={textRef} class="text7 parallax__item__text t7">노션 Notion</div>
      <div ref={textRef} class="text8 parallax__item__text t8">포토샵</div>
      <div ref={textRef} class="text9 parallax__item__text t9">제플린</div>
      <div ref={textRef} class="text10 parallax__item__text t10">피그마</div>
      <div ref={textRef} class="text11 parallax__item__text t11">지라 Jira</div>
      <div ref={textRef} class="text12 parallax__item__text t12">슬렉 Slack</div>
      <div ref={textRef} class="text13 parallax__item__text t13">노션 Notion</div>

      <div ref={textRef} class="text14 parallax__item__text t14">[개발 언어]</div>
      <div ref={textRef} class="text15 parallax__item__text t15">HTML5</div>
      <div ref={textRef} class="text16 parallax__item__text t16">CSS+SCSS</div>
      <div ref={textRef} class="text17 parallax__item__text t17">JQuery</div>
      <div ref={textRef} class="text18 parallax__item__text t18">javaScript</div>
      <div ref={textRef} class="text19 parallax__item__text t19">React+GSAP</div>
      <div ref={textRef} className="text20 parallax__item__text">성공!!!! </div>
    </section>
  );
};

export default Section2;