import React from 'react'
import gsap from 'gsap';
import { useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnEffect4 from 'Hooks/anEffect4';

gsap.registerPlugin(ScrollTrigger); // 스크롤트리커 등록 : 이 부분부터 스크롤트리거 작성한다고 함수등록

const Section4 = () => {
  const triggerRef = useRef();
  const gsap01Ref = useRef();
  const gsap02Ref = useRef();
  const gsap03Ref = useRef();
  
  //Hooks 호출
  AnEffect4(triggerRef, [gsap01Ref, gsap02Ref, gsap03Ref]);

  return (
    <section 
      id="section4" 
      ref={triggerRef} 
      className='parallax__item bg-white text-black flex justify-center items-start relative w-100 min-h-screen'
      >
      <span className="absolute top-5 left-5 text-[2vw] leading-none text-green-600 font-semibold">04.Porject</span>
      <div class="flex flex-col justify-around md:justify-start md:h-full md:mt-16 lg:gap-40 gap-20 item">
        <div class="pl-[1.25rem] lg:pt-24 lg:pl-0 lg:mb-5 flex items-start justify-between lg:flex-row flex-col lg:gap-24 md:gap-2 md:p-5">
          <h5 class="lg:text-6xl text-2xl pb-3 lg:pb-0 font-bold leading-tight flex items-start flex-col flex-1">
            <span class="inline-block">나의 도전은</span>
            <span class="inline-block">진행형😊</span>
          </h5>
          <div class="flex flex-col items-start">
            <p class="lg:text-2xl md:text-base text-sm font-bold leading-snug">
              수많은 시행착오 속에서 던져진 도전과 물음표는 새로운 정답을 찾아가는 <br/>
              과정이라 믿습니다.<br/>
              오늘도 나는 그 과정 속에서 성장하고 있고,
            </p>
            <span class="lg:text-2xl md:text-base text-sm font-extrabold">새로운 미래를 향한 모험과 도전은 계속되고 있습니다.</span>
          </div>
        </div>
        {/* title */}
        <ul className='flex lg:items-conter items-start justify-between md:flex-row flex-col lg:gap-1 gap-4'>
          <li ref={gsap01Ref} className='flex-1 rounded-3xl px-5  lg:max-w-xs'>
            <div className=" text-black bg-white border-blue-400 shadow-md rounded-xl">
              <div className='md:block flex'>
                <img src="/enter_img12.png" alt="소리아월렛" className="object-cover w-full rounded lg:max-w-xs max-w-48 h-full" />
                <div className='md:block p-3 flex flex-col items-start justify-around'>
                  <div className=" project-text-1">
                      <div className="flex flex-col gap-3 lg:text-center text-left txt-box-1">
                        <h2 className="lg:text-xl text-base font-bold">개인 프로젝트 타이틀</h2>
                        <p className="lg:text-sm text-xs text-gray-500">프로젝트에 대한 간단한 설명란</p>
                      </div>
                  </div>
                  <div className="flex flex-col content-center space-y-2 mt-3 hoverItme cursor-pointer transition-all duration-300 hover:rounded-2xl hover:bg-slate-500 w-full text-black hover:text-white">
                    <a href='/' className="px-4 py-2 md:text-base text-xs lg:text-xs  font-semibold text-black hover:text-white text-center btn moerBtn">자세히보기</a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li ref={gsap02Ref} className='flex-1 rounded-3xl px-5  lg:max-w-xs'>
            <div className=" text-black bg-white border-blue-400 shadow-md rounded-xl">
              <div className='md:block flex'>
                <img src="/enter_img12.png" alt="소리아월렛" className="object-cover w-full rounded lg:max-w-xs max-w-48 h-full" />
                <div className='md:block p-3 flex flex-col items-start justify-around'>
                  <div className=" project-text-1">
                      <div className="flex flex-col gap-3 lg:text-center text-left txt-box-1">
                        <h2 className="lg:text-xl text-base font-bold">개인 프로젝트 타이틀</h2>
                        <p className="lg:text-sm text-xs text-gray-500">프로젝트에 대한 간단한 설명란</p>
                      </div>
                  </div>
                  <div className="flex flex-col content-center space-y-2 mt-3 hoverItme cursor-pointer transition-all duration-300 hover:rounded-2xl hover:bg-slate-500 w-full text-black hover:text-white">
                    <a href='/' className="px-4 py-2 md:text-base text-xs lg:text-xs  font-semibold text-black hover:text-white text-center btn moerBtn">자세히보기</a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li ref={gsap03Ref} className='flex-1 rounded-3xl px-5  lg:max-w-xs'>
            <div className=" text-black bg-white border-blue-400 shadow-md rounded-xl">
              <div className='md:block flex'>
                <img src="/enter_img12.png" alt="소리아월렛" className="object-cover w-full rounded lg:max-w-xs max-w-48 h-full" />
                <div className='md:block p-3 flex flex-col items-start justify-around'>
                  <div className=" project-text-1">
                      <div className="flex flex-col gap-3 lg:text-center text-left txt-box-1">
                        <h2 className="lg:text-xl text-base font-bold">개인 프로젝트 타이틀</h2>
                        <p className="lg:text-sm text-xs text-gray-500">프로젝트에 대한 간단한 설명란</p>
                      </div>
                  </div>
                  <div className="flex flex-col content-center space-y-2 mt-3 hoverItme cursor-pointer transition-all duration-300 hover:rounded-2xl hover:bg-slate-500 w-full text-black hover:text-white">
                    <a href='/' className="px-4 py-2 md:text-base text-xs lg:text-xs  font-semibold text-black hover:text-white text-center btn moerBtn">자세히보기</a>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Section4