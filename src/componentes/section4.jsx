import React, { useEffect } from 'react'
import gsap from 'gsap';
import { useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Step01 = () => {
    gsap.registerPlugin(ScrollTrigger); // 스크롤트리커 등록 : 이 부분부터 스크롤트리거 작성한다고 함수등록
    const triggerRef = useRef();
    const gsap01Ref = useRef();
    const gsap02Ref = useRef();
    const gsap03Ref = useRef();
    const gsap04Ref = useRef();

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
          timelineCards.fromTo(gsap01Ref.current, {x:-100, opacity: 0, rx: 0,}, {x: 0, opacity:1,  rx: 100, });
          timelineCards.fromTo(gsap02Ref.current, {x:-100, opacity: 0, rx: 0,}, {x: 0, opacity:1,  rx: 100, });
          timelineCards.fromTo(gsap03Ref.current, {x:-100, opacity: 0, rx: 0,}, {x: 0, opacity:1,  rx: 100, });
          timelineCards.fromTo(gsap04Ref.current, {x:-100, opacity: 0, rx: 0,}, {x: 0, opacity:1,  rx: 100, });


          // 컴포넌트가 언마운트될 때 ScrollTrigger 제거
          return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // 모든 ScrollTrigger 인스턴스 제거
        };
    },[]);


  return (
    <section 
      id="section4" 
      ref={triggerRef} 
      className='parallax__item bg-white text-black flex justify-center items-start relative w-100'
      >
      <span className="absolute bottom-5 right-5 text-[4vw] leading-none">03.가로</span>
      <div class="flex flex-col justify-around gap-40 item">
        <div class="mb-5 flex items-start justify-between gap-32" >
          <h5 class="text-6xl font-bold leading-tight flex items-start flex-col flex-1">
            <span class="inline-block">나의 도전은</span>
            <span class="inline-block">진행형</span>
          </h5>
          <div class="flex flex-col items-start">
            <p class="text-2xl font-bold leading-snug">
              수많은 시행착오 속에서 던져진 도전과 물음표는 새로운 정답을 찾아가는 <br/>
              과정이라 믿습니다.<br/>
              오늘도 나는 그 과정 속에서 성장하고 있고,
            </p>
            <span class="text-2xl font-extrabold">새로운 미래를 향한 모험과 도전은 계속되고 있습니다.</span>
          </div>
        </div>
        {/* title */}
        <ul className='flex items-center justify-between gap-1'>
          <li ref={gsap01Ref} className='flex-1 rounded-3xl px-5 cursor-pointer'>
            <div className="flex-1 max-w-xs text-black bg-white border-blue-400 shadow-md rounded-xl">
              <img src="/enter_img12.png" alt="소리아월렛" className="object-cover w-full rounded soriaImag" />
              <div className="p-3 project-text-1">
                  <div className="flex flex-col gap-3 text-center txt-box-1">
                    <h2 className="text-xl font-bold">이 부분은 타이틀 입니다.</h2>
                    <p className="text-sm text-gray-500">이 부분은 타이틀에 대한 설명을 적는 곳입니다. 이곳에 설명을 적어 넣으시오.</p>
                  </div>
              </div>
              <div className="flex flex-col content-center space-y-2 hoverItme">
                <button type="button"
                  className="px-4 py-2 text-center text-black rounded hover:bg-gray-500 btn moerBtn">자세히보기</button>
              </div>
            </div>
          </li>
          <li ref={gsap02Ref} className='flex-1 rounded-3xl px-5 cursor-pointer'>
            <div className="flex-1 max-w-xs text-black bg-white border-blue-400 shadow-md rounded-xl">
              <img src="/enter_img12.png" alt="소리아월렛" className="object-cover w-full rounded soriaImag" />
              <div className="p-3 project-text-1">
                  <div className="flex flex-col gap-3 text-center txt-box-1">
                    <h2 className="text-xl font-bold">이 부분은 타이틀 입니다.</h2>
                    <p className="text-sm text-gray-500">이 부분은 타이틀에 대한 설명을 적는 곳입니다. 이곳에 설명을 적어 넣으시오.</p>
                  </div>
              </div>
              <div className="flex flex-col content-center space-y-2 hoverItme">
                <button type="button"
                  className="px-4 py-2 text-center text-black rounded hover:bg-gray-500 btn moerBtn">자세히보기</button>
              </div>
            </div>
          </li>
          <li ref={gsap03Ref} className='flex-1 rounded-3xl px-5 cursor-pointer'>
            <div className="flex-1 max-w-xs text-black bg-white border-blue-400 shadow-md rounded-xl">
              <img src="/enter_img12.png" alt="소리아월렛" className="object-cover w-full rounded soriaImag" />
              <div className="p-3 project-text-1">
                  <div className="flex flex-col gap-3 text-center txt-box-1">
                    <h2 className="text-xl font-bold">이 부분은 타이틀 입니다.</h2>
                    <p className="text-sm text-gray-500">이 부분은 타이틀에 대한 설명을 적는 곳입니다. 이곳에 설명을 적어 넣으시오.</p>
                  </div>
              </div>
              <div className="flex flex-col content-center space-y-2 hoverItme">
                <button type="button"
                  className="px-4 py-2 text-center text-black rounded hover:bg-gray-500 btn moerBtn">자세히보기</button>
              </div>
            </div>
          </li>
          <li ref={gsap04Ref} className='flex-1 rounded-3xl px-5 cursor-pointer'>
            <div className="flex-1 max-w-xs text-black bg-white border-blue-400 shadow-md rounded-xl">
              <img src="/enter_img12.png" alt="소리아월렛" className="object-cover w-full rounded soriaImag" />
              <div className="p-3 project-text-1">
                  <div className="flex flex-col gap-3 text-center txt-box-1">
                    <h2 className="text-xl font-bold">이 부분은 타이틀 입니다.</h2>
                    <p className="text-sm text-gray-500">이 부분은 타이틀에 대한 설명을 적는 곳입니다. 이곳에 설명을 적어 넣으시오.</p>
                  </div>
              </div>
              <div className="flex flex-col content-center space-y-2 hoverItme">
                <button type="button"
                  className="px-4 py-2 text-center text-black rounded hover:bg-gray-500 btn moerBtn">자세히보기</button>
              </div>
            </div>
          </li>
        </ul>
      </div>

    </section>
  )
}

export default Step01