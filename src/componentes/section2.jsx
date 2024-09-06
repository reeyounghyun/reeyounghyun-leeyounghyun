import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextEffect2 from 'Hooks/TextEffect2';

gsap.registerPlugin(ScrollTrigger);

const Section2 = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  // 커스텀 훅 호출
  TextEffect2(sectionRef, textRef);
  
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

      <div ref={textRef} className="text6 parallax__item__text t6">[2.협업 툴]</div>
      <div ref={textRef} className="text7 parallax__item__text t7">노션 Notion</div>
      <div ref={textRef} className="text8 parallax__item__text t8">포토샵</div>
      <div ref={textRef} className="text9 parallax__item__text t9">제플린</div>
      <div ref={textRef} className="text10 parallax__item__text t10">피그마</div>
      <div ref={textRef} className="text11 parallax__item__text t11">지라 Jira</div>
      <div ref={textRef} className="text12 parallax__item__text t12">슬렉 Slack</div>
      <div ref={textRef} className="text13 parallax__item__text t13">노션 Notion</div>

      <div ref={textRef} className="text14 parallax__item__text t14">[개발 언어]</div>
      <div ref={textRef} className="text15 parallax__item__text t15">HTML5</div>
      <div ref={textRef} className="text16 parallax__item__text t16">CSS+SCSS</div>
      <div ref={textRef} className="text17 parallax__item__text t17">JQuery</div>
      <div ref={textRef} className="text18 parallax__item__text t18">javaScript</div>
      <div ref={textRef} className="text19 parallax__item__text t19">React+GSAP</div>
      <div ref={textRef} className="text20 parallax__item__text">성공!!!! </div>
    </section>
  );
};

export default Section2;