import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "../App.css";

gsap.registerPlugin(ScrollTrigger);

const Section2 = () => {
  const containerRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    const texts = textRefs.current;

    // GSAP 애니메이션 설정
    const textAnimation = gsap.timeline();

    texts.forEach((text, index) => {
      textAnimation.fromTo(text, 
        { autoAlpha: 0, y: 50 },  // 초기 상태 (보이지 않음)
        { autoAlpha: 1, y: 0, duration: 1, delay: index * 0.2 }  // 애니메이션 후 상태 (보임)
      );
    });

    const scrollTriggerInstance = ScrollTrigger.create({
      animation: textAnimation,
      trigger: containerRef.current,
      start: "top top",
      end: "+=6000 top",
      scrub: true,
      pin: true,
      anticipatePin: 1,
      pinSpacing: true,
      markers: false,
    });

    return () => {
      scrollTriggerInstance.kill();
      textAnimation.kill();
    };
  }, []);

  return (
    <section
      id="section2"
      ref={containerRef}
      className="relative flex items-center justify-center w-full h-screen bg-[#222] subTitle"
    >
      {[
        "협업 툴", "git", "github", "VS Code", "VS Studio","CMS", "Notion", "Photoshop", "Zeppelin", "Figma", "Jira", "Slack",
        "개발 언어", "HTML5", "CSS+SCSS", "JQuery", "javaScript", "React+GSAP"
      ].map((text, index) => (
        <div
          key={index}
          ref={(el) => (textRefs.current[index] = el)}  // 각 요소에 개별 ref 할당
          className="parallax__item__text text-3xl lg:text-[4rem]"
        >
          {text}
        </div>
      ))}
      {/* NEXT!!!!와 이미지 부분도 포함 */}
      <div
        ref={(el) => (textRefs.current[18] = el)}  // 18번째 요소로 ref 할당
        className="parallax__item__text text-3xl lg:text-[4rem] colorText"
      >
        NEXT!!!!
        <div className='se2Img'>
          <img src="/exit.png" alt="비상구" className='se2Img__img' />
        </div>
      </div>
    </section>
  );
};

export default Section2;
