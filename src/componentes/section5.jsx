// Lucide React 아이콘 라이브러리에서 필요한 아이콘들을 가져옵니다.
import { Code, GraduationCap, Award } from 'lucide-react';
import React, { useEffect } from 'react'
import gsap from 'gsap';
import { useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";


// 스킬 태그를 표시하는 컴포넌트
const SkillTag = ({ skill }) => (
  <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 mb-2 px-2.5 py-0.5 rounded">
    {skill}
  </span>
);

// 개별 경험(프로젝트)을 표시하는 컴포넌트
const Experience = ({ project, description, skills }) => (
  <div className="mb-4 last:mb-0">
    <h4 className="font-medium text-gray-800">{project}</h4>
    <p className="text-sm text-gray-600 mt-1">{description}</p>
    <div className="flex flex-wrap mt-2">
      {skills.map((skill, idx) => (
        <SkillTag key={idx} skill={skill} />
      ))}
    </div>
  </div>
);

// 스킬 카테고리 카드 컴포넌트
const SkillCard = ({ title, icon: Icon, experiences }) => (
  <div className="bg-white p-6 rounded-lg shadow-md mb-6">
    <div className="flex items-center mb-4">
      <Icon className="mr-2 text-blue-500" size={24} />
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    {experiences.map((exp, index) => (
      <Experience key={index} {...exp} />
    ))}
  </div>
);

// 메인 컴포넌트
const Section5 = () => {
  // 스킬 카테고리와 경험 데이터
  const skillCategories = [
    {
      title: "웹 개발 프로젝트",
      icon: Code,
      experiences: [
        {
          project: "라임프레즈 프로젝트",
          description: "자사 플랫폼 개발 및 다양한 외주 프로젝트 수행",
          skills: ["React", "TypeScript", "Next.js", "UI/UX"]
        },
        {
          project: "이트라이브 프로젝트",
          description: "롯데 계열사 시스템 유지보수",
          skills: ["Front-end", "Back-end", "System Maintenance"]
        },
        {
          project: "와이지엔 프로젝트",
          description: "자사 플랫폼 개발 및 외주 클라이언트 프로젝트",
          skills: ["Web Development", "Client Projects"]
        }
      ]
    },
    {
      title: "교육 및 자격",
      icon: GraduationCap,
      experiences: [
        {
          project: "SBS 아카데미컴퓨터아트학원",
          description: "리액트 강의 진행",
          skills: ["React", "Teaching", "Curriculum Development"]
        },
        {
          project: "웹디자인기능사",
          description: "2021년 12월 취득",
          skills: ["Web Design", "UI/UX"]
        },
        {
          project: "그린컴퓨터아트학원",
          description: "안양캠퍼스 6개월 과정 수료",
          skills: ["Web Fundamentals", "Programming"]
        }
      ]
    },
  ];

  gsap.registerPlugin(ScrollTrigger); // 스크롤트리커 등록 : 이 부분부터 스크롤트리거 작성한다고 함수등록
  const triggerRef = useRef();
  const gsap06Ref = useRef();
  const gsap07Ref = useRef();

  /*
      https://gsap.com/resources/get-started/
      [ 타임라인 ]
      - 쉽게 조정가능하고 탄력적인 애니메이션 시퀀스를 생성하는 요소
      - 타임라인에 트윈을 추가하면 기본적으로 트윈이 추가된 순서대로 차례로 재생
  */

  // con02
  useEffect(() => {
    const timelineCards = gsap.timeline({
          scrollTrigger : {
            trigger: triggerRef.current, // 스크롤 트리거 대상: ul 요소
            start: 'top', // 트리거 시작점: 브라우저의 20%에서 시작
            end: 'bottom 10px ', // 트리거 종료점: 브라우저의 80%에서 종료
            scrub: 1, // 스크롤과 애니메이션이 연동되도록 설정
            pin: true, // 해당 요소 고정
            markers: true, // 스크롤트리거 디버깅 마커
          }
      })

        // 각 카드 요소에 대해 scale(크기 변화)과 opacity(투명도 변화) 적용
        timelineCards.fromTo(gsap06Ref.current, {x:-80, opacity: 0, rx: 0,}, {x: 0, opacity:1,  rx: 100, });
        timelineCards.fromTo(gsap07Ref.current, {x:-100, opacity: 0, rx: 0,}, {x: 0, opacity:1,  rx: 100, });


        // 컴포넌트가 언마운트될 때 ScrollTrigger 제거
        return () => {
          ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // 모든 ScrollTrigger 인스턴스 제거
      };
  },[]);


  return (
    <section 
    id="section4" 
    ref={triggerRef} 
    className='parallax__item p-4 bg-white text-black flex justify-center items-start relative w-100'>
      <span className="absolute bottom-5 right-5 text-[4vw] leading-none">05.세로</span>
      <div
        className="max-w-3xl mx-auto">
        {/* 경력 요약 섹션 */}
        <div className="mt-8 pt-[6rem]">
          <h3 className=" flex items-center text-2xl font-bold mb-6">
            <Award className="mr-2 text-blue-500" size={24} />
            경력 요약
          </h3>
          <p  ref={gsap06Ref} className="title-l text-gray-700 text-2xl block mb-6" >
            2019년부터 현재까지 다양한 웹 개발 프로젝트와 교육 경험을 쌓아왔습니다.
            프론트엔드와 백엔드 개발, UI/UX 디자인, 그리고 교육 분야에서의 경험을 통해 
            폭넓은 기술 스택과 실무 능력을 갖추고 있습니다.
          </p>
        </div>
        <h2 className="text-xl font-semibold mb-4">전문 기술 및 프로젝트 경험</h2>
        {/* 각 스킬 카테고리에 대해 SkillCard 컴포넌트를 렌더링합니다 */}
        <div ref={gsap07Ref}>
        {skillCategories.map((category, index) => (
          <SkillCard key={index} {...category} />
        ))}
        </div>

      </div>
    </section>
  );
};

export default Section5;