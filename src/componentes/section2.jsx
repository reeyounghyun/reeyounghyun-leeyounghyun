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
      <span className="absolute top-5 left-5 text-[2vw] colorText font-semibold leading-none">02.Skill Stack</span>
      <div ref={textRef} className="text1 parallax__item__text  sm:text-2xl md:text-[4rem]">협업 툴</div>
      <div ref={textRef} className="text2 parallax__item__text  sm:text-2xl md:text-[3rem]">git </div>
      <div ref={textRef} className="text3 parallax__item__text  sm:text-2xl md:text-[3rem]">github </div>
      <div ref={textRef} className="text4 parallax__item__text  sm:text-2xl md:text-[3rem]">VS Code </div>
      <div ref={textRef} className="text5 parallax__item__text  sm:text-2xl md:text-[3rem]">VS Studio </div>

      {/* <div ref={textRef} className="text6 parallax__item__text t6">[2.협업 툴]</div> */}
      <div ref={textRef} className="text7 parallax__item__text t7 sm:text-2xl md:text-[3rem]">Notion</div>
      <div ref={textRef} className="text8 parallax__item__text t8 sm:text-2xl md:text-[3rem]">Photoshop</div>
      <div ref={textRef} className="text9 parallax__item__text t9 sm:text-2xl md:text-[3rem]">Zeppelin</div>
      <div ref={textRef} className="text10 parallax__item__text t10 sm:text-2xl md:text-[3rem]">Figma</div>
      <div ref={textRef} className="text11 parallax__item__text t11 sm:text-2xl md:text-[3rem]">Jira</div>
      <div ref={textRef} className="text12 parallax__item__text t12 sm:text-2xl md:text-[3rem]">Slack</div>

      <div ref={textRef} className="text14 parallax__item__text t14 sm:text-2xl md:text-[3rem] ">개발 언어</div>
      <div ref={textRef} className="text15 parallax__item__text t15 sm:text-2xl md:text-[3rem]">HTML5</div>
      <div ref={textRef} className="text16 parallax__item__text t16 sm:text-2xl md:text-[3rem]">CSS+SCSS</div>
      <div ref={textRef} className="text17 parallax__item__text t17 sm:text-2xl md:text-[3rem]">JQuery</div>
      <div ref={textRef} className="text18 parallax__item__text t18 sm:text-2xl md:text-[3rem]">javaScript</div>
      <div ref={textRef} className="text19 parallax__item__text t19 sm:text-2xl md:text-[3rem]">React+GSAP</div>
      <div ref={textRef} className="text20 parallax__item__text md:text-[3rem] sm:text-2xl colorText">
        NEXT!!!!
        <div className='se2Img'>
          <img src="/exit.png" alt="비상구" className='se2Img__img'/>
        </div>
      </div>

    </section>
  );
};

export default Section2;