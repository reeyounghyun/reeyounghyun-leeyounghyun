import React from 'react'
import gsap from 'gsap';
import { useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnEffect5 from 'Hooks/anEffect5';

gsap.registerPlugin(ScrollTrigger); 
// 스크롤트리커 등록 : 이 부분부터 스크롤트리거 작성한다고 함수등록

const skillCategories = [
  {
    title: "웹 개발 프로젝트",
    experiences: [
      {
        project: "워크스타일",
        description: "소리아월렛 프로젝트 수행",
        skills: ["UI/UX", "Html+CSS"]
      },
      {
        project: "라임프렌즈",
        description: "자사 플랫폼 개발 및 외주 프로젝트 수행",
        skills: ["UI/UX", "Html+CSS", "JavaScript", "React"]
      },
      {
        project: "이트라이브",
        description: "롯데 계열사 유지보수",
        skills: ["UI/UX", "Html+CSS", "JavaScript"]
      },
      {
        project: "와이지엔",
        description: "자사 플랫폼 개발 및 외주 프로젝트",
        skills: ["UI/UX", "Html+CSS", "Jqeuy"]
      }
    ]
  }
];
const skillCategories2 = [
  {
    title: "교육 및 자격",
    experiences: [
      {
        project: "SBS 아카데미컴퓨터아트학원",
        description: "React 프론트엔드개발",
        skills: ["React", "GSAP", "JavaScript"]
      },        
      {
        project: "디코드 컴퓨터학원",
        description: "React 프론트엔드개발",
        skills: ["React", "JavaScript", "API"]
      },
      {
        project: "웹디자인기능사",
        description: "2021년 12월 취득",
        skills: ["Web publisher", "UI/UX"]
      },
      {
        project: "그린컴퓨터아트학원-안양캠퍼스",
        description: "UI/UX 반응형 웹디자인&웹퍼블리셔",
        skills: ["Html+css", "Jquey","PhtoShop"]
      }
    ]
  },
];

const Section5 = () => {
  const triggerRef = useRef();
  const item01Ref = useRef();
  const item02Ref = useRef();
  
  //Hooks 호출
  AnEffect5(triggerRef, [item01Ref, item02Ref]);

  return (
    <section 
      id="section5" 
      ref={triggerRef} 
      className='parallax__item flex justify-center items-start relative w-100'
      >
      {/* <span className="absolute top-5 left-5 text-[2vw] leading-none text-green-600 font-semibold">05.Education&Career</span> */}
      <div class="item">
        <div class="absolute 2xl:top-[10rem] md:top-[75px] top-0 2xl:left-[10rem] left-[23px]">
          <h3 class="lg:text-3xl text-lg pb-3 font-bold leading-tight flex items-start flex-col flex-1 text-white">
            <span class="inline-block">경력 요약🤔</span>
          </h3>
          <div class="flex flex-col items-start">
            <p class="lg:text-xl text-[12px] font-bold leading-snug text-[#ccc] max-w-[600px] w-full whitespace-break-spaces break-keep">
              "2019년부터 웹 개발 분야에서 다양한 프로젝트와 교육을 통해 퍼블리셔로서의 경력을 시작하였으며, HTML, CSS, JavaScript에 대한 탄탄한 기초를 바탕으로, 리액트와 같은 최신 프론트엔드 기술을 습득하고 적용해 왔습니다. 이를 통해 다양한 환경에서의 프로젝트 경험과 실무 능력을 쌓아, 폭넓은 기술 스택을 활용한 문제 해결 능력을 키웠습니다"
            </p>
          </div>
        </div>
        {/* title */}
        <ul className='itemBox'>
          <li ref={item01Ref} className='list-bg rounded-3xl px-5 py-5 cursor-pointer g:max-w-xs md:max-w-48  lg:w-full md:w-[350px] w-[100%]'>
          <div className="second-item">
            {skillCategories.map((category, index) => (
              <div key={index} className="mb-6 text-black">
                <h2 className="text-xl font-semibold mb-4">{category.title}</h2>
                <ul>
                  {category.experiences.map((exp, expIndex) => (
                    <li key={expIndex} className="mb-4 text-black">
                      <h3 className="text-base font-semibold">{exp.project}</h3>
                      <p className="text-base">{exp.description}</p>
                      <p className="text-base">
                        사용 기술: {exp.skills.join(', ')}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            </div>
          </li>
          <li ref={item02Ref} className='list-bg rounded-3xl px-5 py-5 cursor-pointer lg:max-w-xs md:max-w-48 lg:w-full md:w-[350px] w-[100%]'>
            <div className="third-item">
              {skillCategories2.map((category, index) => (
                <div key={index} className="mb-6">
                  <h2 className="text-xl font-semibold mb-4">{category.title}</h2>
                  <ul>
                    {category.experiences.map((exp, expIndex) => (
                      <li key={expIndex} className="mb-4">
                        <h3 className="text-base font-semibold">{exp.project}</h3>
                        <p className="text-base font-normal">{exp.description}</p>
                        <p className="text-base font-normal">
                          사용 기술: {exp.skills.join(', ')}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Section5