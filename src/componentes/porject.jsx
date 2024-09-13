import React, { useEffect } from 'react'
import gsap from 'gsap';
import { useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Porject = () => {
    gsap.registerPlugin(ScrollTrigger);
    const sectionsRef = useRef([]);

    useEffect(() => {
        sectionsRef.current.forEach((section, i) => {
            ScrollTrigger.create({
                trigger:section,
                start:'top top',
                pin:true,
                /*
                    1.핀 고정 시 공간 처리:
                    false로 설정하면 핀으로 고정된 요소가 차지하는 공간을 제거합니다.
                    즉, 스크롤 시 다음 섹션이 바로 위로 올라오게 됩니다.
                    2.연속적인 스크롤 효과:
                    각 섹션이 서로 붙어있는 듯한 효과를 만들어냅니다.
                    사용자가 스크롤할 때 부드럽게 다음 섹션으로 전환되는 느낌을 줍니다.
                    3. 레이아웃 영향:
                    핀 고정된 요소 아래의 콘텐츠가 자연스럽게 흐르도록 합니다.
                    페이지 전체 길이에 영향을 주어 스크롤 동작을 더 예측 가능하게 만듭니다.
                    이 설정은 특히 전체 화면 섹션을 순차적으로 보여주는 디자인에 효과적입니다. 각 섹션이 화면에 꽉 차게 표시되고, 스크롤 시 다음 섹션이 부드럽게 나타나는 효과를 만들 수 있습니다.
                */
                pinSpacing:false,
                markers:false,
            })
            // ScrollTrigger.create({
            //     snap : 1 / (section.length - 1) // 탑에 좀 더 달라붙는다는데 잘 모르겠음
            // })
        })
    }, []);
    
  return (
    <section className='w-full pb-[100vh] relative mx-auto my-0 bg-black overflow-hidden'>
        <div ref={el => sectionsRef.current[0] = el} className='w-full h-[110vh]'>
            <div className="bg-[#0a3651] text-white rounded-t-[50px] shadow-[0px_0px_30px_rgba(0,0,0,0.3)] overflow-hidden">
                <ul className="flex justify-between lg:flex-row flex-wrap">
                    <li className="w-1/2">
                        <a href="/">
                            <p className="w-full">
                                <img src="pc/porject1.png" alt="" className="w-full" />
                            </p>
                        </a>
                    </li>
                    <li className="w-1/2 pt-[150px] pl-[100px] box-border">
                        <div className="mb-[30px]">
                            <h2 className='text-[100px] leading-[0.9] '>자람콘텐츠</h2>
                            <div className='w-[60%]'>
                                <p className="text-[19px] pt-[3rem] mb-[30px] break-keep text-[#e9e9e9]">
                                    자람 콘텐츠는 체험학습 예약, 교육 프로그램 제공 및 온라인 학습에 필요한 자료 제공하는 웹 사이트입니다. <br/>
                                    <strong className='text-white font-bold'>JSX와 SCSS를</strong> 이용하여 Component 개발하였으며 <strong className='text-white font-bold'>Media Query를</strong> 사용하여 반응형 구현했습니다.
                                </p>
                            </div>
                        </div>
                        <div className="w-[60%] text-[14px] leading-[1.5]">
                            <span className="block">
                                <strong className='text-[16px] pb-2'>[참여 인원]</strong><br/> 
                                기획1명 디자인 1명 프론트1명 백앤드 1명</span>
                            <p className="mb-[30px] pt-8 tracking-[-1px] break-keep">
                                <strong className='text-[16px] pb-2'>[작업 기여도]</strong><br/>
                                체험 교육 콘텐츠 제공 웹페이지 구축&유지 보수 <br/> 
                                (100% 사용자UI 구현했습니다)
                            </p>
                            <ul className='flex flex-wrap gap-3 text-sm text-[#ccc]'>
                                <li>#React</li>
                                <li>#반응형</li>
                                <li>#협업</li>
                                <li>#구축&유지 보수</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <div ref={el => sectionsRef.current[1] = el} className='w-full h-[110vh]'>
            <div className="bg-[#5f5c53] text-white rounded-t-[50px] shadow-[0px_0px_30px_rgba(0,0,0,0.3)] overflow-hidden">
                <ul className="flex justify-between">
                    <li className="w-1/2">
                        <a href="/">
                            <p className="w-full">
                                <img src="pc/porject2.png" alt="" className="w-full" />
                            </p>
                        </a>
                    </li>
                    <li className="w-1/2 pt-[150px] pl-[100px] box-border">
                        <div className="mb-[30px]">
                            <h2 className='text-[100px] leading-[0.9] '>펀데이코리아</h2>
                            <div className='w-[60%]'>
                                <p className="text-[19px] pt-[3rem] mb-[30px] break-keep text-[#e9e9e9]">
                                    패키지여행 예약 및 리뷰, 체험단 모집 등 이벤트를 이용할 수 있는 웹 페이지입니다. <strong className='text-white font-bold'>JSX로 퍼블리싱</strong> 진행하였으며, 반복 레이아웃 <strong className='text-white font-bold'>컴포넌트 개발</strong> 진행 담당을 맡았습니다. <br/>
                                    <strong className='text-white font-bold'>Tailwind를 이용하여</strong> 작업 속도를 향상하여 UI 구현하는 <br/> 
                                    <strong className='text-white font-bold'>기간을 단축</strong>하는 데 도움이 되었습니다.
                                </p>
                            </div>
                        </div>
                        <div className="w-[60%] text-[14px] leading-[1.5]">
                            <span className="block">
                                <strong className='text-[16px] pb-2'>[참여 인원]</strong><br/> 
                                기획1명 디자인 1명 프론트2명 백앤드 1명</span>
                            <p className="mb-[30px] pt-8 tracking-[-1px] break-keep">
                                <strong className='text-[16px] pb-2'>[작업 기여도]</strong><br/>
                                서브페이지 페이지 구축 <br/> 
                                (60% UI 구현했습니다)
                            </p>
                            <ul className='flex flex-wrap gap-3 text-sm text-[#ccc]'>
                                <li>#React</li>
                                <li>#tailwind</li>
                                <li>#JAVASCTIPT</li>
                                <li>#구축</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div ref={el => sectionsRef.current[2] = el} className='w-full h-[110vh]'>
            <div className="bg-[#222] text-white rounded-t-[50px] shadow-[0px_0px_30px_rgba(0,0,0,0.3)] overflow-hidden">
                <ul className="flex justify-between">
                    <li className="w-1/2">
                        <a href="/">
                            <p className="w-full">
                                <img src="pc/project3.png" alt="" className="w-full" />
                            </p>
                        </a>
                    </li>
                    <li className="w-1/2 pt-[150px] pl-[100px] box-border">
                        <div className="text-[120px] leading-[0.9] mb-[85px]">
                            Design <span className="block">Agency</span>
                        </div>
                        <div className="w-[60%] leading-[1.5]">
                            <p className="text-[26px] leading-[1.2] mb-[30px]">
                                In order to improve understanding of the layout, I personally cloned website, which uses a lot of animation and various layout.
                            </p>
                            <p className="text-[15px] mb-[20px] tracking-[-1px]">
                                ox구조와 전체적 레이아웃 제작에 대한 이해 및 실력향상을 위해 국내 기업사이트 중 2023년 트렌드에 맞고 인터렉션 구현이 화려하며 비쥬얼적으로 탁월한 웹사이트를 선정하여 Clone Coding으로 퍼블리싱 실력을 키우기위해 노력하였습니다.
                            </p>
                            <ul>
                                <li className="relative pl-[20px] mb-[10px] before:content-[''] before:w-[5px] before:h-[5px] before:rounded-full before:bg-[rgba(0,0,0,0.5)] before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2">
                                    Html5 CSS
                                </li>
                                <li className="relative pl-[20px] mb-[10px] before:content-[''] before:w-[5px] before:h-[5px] before:rounded-full before:bg-[rgba(0,0,0,0.5)] before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2">
                                    jQuery
                                </li>
                                <li className="relative pl-[20px] mb-[10px] before:content-[''] before:w-[5px] before:h-[5px] before:rounded-full before:bg-[rgba(0,0,0,0.5)] before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2">
                                    Javascript
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div ref={el => sectionsRef.current[3] = el} className='w-full h-[110vh]'>
            <div className="bg-[#545454] text-white rounded-t-[50px] shadow-[0px_0px_30px_rgba(0,0,0,0.3)] overflow-hidden">
                <ul className="flex justify-between">
                    <li className="w-1/2">
                        <a href="/">
                            <p className="w-full">
                                <img src="pc/project4.png" alt="" className="w-full" />
                            </p>
                        </a>
                    </li>
                    <li className="w-1/2 pt-[150px] pl-[100px] box-border">
                        <div className="text-[120px] leading-[0.9] mb-[85px]">
                            Design <span className="block">Agency</span>
                        </div>
                        <div className="w-[60%] leading-[1.5]">
                            <p className="text-[26px] leading-[1.2] mb-[30px]">
                                In order to improve understanding of the layout, I personally cloned website, which uses a lot of animation and various layout.
                            </p>
                            <p className="text-[15px] mb-[20px] tracking-[-1px]">
                                ox구조와 전체적 레이아웃 제작에 대한 이해 및 실력향상을 위해 국내 기업사이트 중 2023년 트렌드에 맞고 인터렉션 구현이 화려하며 비쥬얼적으로 탁월한 웹사이트를 선정하여 Clone Coding으로 퍼블리싱 실력을 키우기위해 노력하였습니다.
                            </p>
                            <ul>
                                <li className="relative pl-[20px] mb-[10px] before:content-[''] before:w-[5px] before:h-[5px] before:rounded-full before:bg-[rgba(0,0,0,0.5)] before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2">
                                    Html5 CSS
                                </li>
                                <li className="relative pl-[20px] mb-[10px] before:content-[''] before:w-[5px] before:h-[5px] before:rounded-full before:bg-[rgba(0,0,0,0.5)] before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2">
                                    jQuery
                                </li>
                                <li className="relative pl-[20px] mb-[10px] before:content-[''] before:w-[5px] before:h-[5px] before:rounded-full before:bg-[rgba(0,0,0,0.5)] before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2">
                                    Javascript
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div ref={el => sectionsRef.current[4] = el} className='w-full h-[110vh]'>
            <div className="bg-[#c2c2c0] text-black rounded-t-[50px] shadow-[0px_0px_30px_rgba(0,0,0,0.3)] overflow-hidden">
                <ul className="flex justify-between">
                    <li className="w-1/2">
                        <a href="/">
                            <p className="w-full">
                                <img src="pc/project5.png" alt="" className="w-full" />
                            </p>
                        </a>
                    </li>
                    <li className="w-1/2 pt-[150px] pl-[100px] box-border">
                        <div className="text-[120px] leading-[0.9] mb-[85px]">
                            Design <span className="block">Agency</span>
                        </div>
                        <div className="w-[60%] leading-[1.5]">
                            <p className="text-[26px] leading-[1.2] mb-[30px]">
                                In order to improve understanding of the layout, I personally cloned website, which uses a lot of animation and various layout.
                            </p>
                            <p className="text-[15px] mb-[20px] tracking-[-1px]">
                                ox구조와 전체적 레이아웃 제작에 대한 이해 및 실력향상을 위해 국내 기업사이트 중 2023년 트렌드에 맞고 인터렉션 구현이 화려하며 비쥬얼적으로 탁월한 웹사이트를 선정하여 Clone Coding으로 퍼블리싱 실력을 키우기위해 노력하였습니다.
                            </p>
                            <ul>
                                <li className="relative pl-[20px] mb-[10px] before:content-[''] before:w-[5px] before:h-[5px] before:rounded-full before:bg-[rgba(0,0,0,0.5)] before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2">
                                    Html5 CSS
                                </li>
                                <li className="relative pl-[20px] mb-[10px] before:content-[''] before:w-[5px] before:h-[5px] before:rounded-full before:bg-[rgba(0,0,0,0.5)] before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2">
                                    jQuery
                                </li>
                                <li className="relative pl-[20px] mb-[10px] before:content-[''] before:w-[5px] before:h-[5px] before:rounded-full before:bg-[rgba(0,0,0,0.5)] before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2">
                                    Javascript
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div ref={el => sectionsRef.current[5] = el} className='w-full h-[110vh]'>
            <div className="bg-[#000] text-white rounded-t-[50px] shadow-[0px_0px_30px_rgba(0,0,0,0.3)] overflow-hidden">
                <ul className="flex justify-between">
                    <li className="w-1/2">
                        <a href="/">
                            <p className="w-full">
                                <img src="pc/project6.png" alt="" className="w-full" />
                            </p>
                        </a>
                    </li>
                    <li className="w-1/2 pt-[150px] pl-[100px] box-border">
                        <div className="text-[120px] leading-[0.9] mb-[85px]">
                            Design <span className="block">Agency</span>
                        </div>
                        <div className="w-[60%] leading-[1.5]">
                            <p className="text-[26px] leading-[1.2] mb-[30px]">
                                In order to improve understanding of the layout, I personally cloned website, which uses a lot of animation and various layout.
                            </p>
                            <p className="text-[15px] mb-[20px] tracking-[-1px]">
                                ox구조와 전체적 레이아웃 제작에 대한 이해 및 실력향상을 위해 국내 기업사이트 중 2023년 트렌드에 맞고 인터렉션 구현이 화려하며 비쥬얼적으로 탁월한 웹사이트를 선정하여 Clone Coding으로 퍼블리싱 실력을 키우기위해 노력하였습니다.
                            </p>
                            <ul>
                                <li className="relative pl-[20px] mb-[10px] before:content-[''] before:w-[5px] before:h-[5px] before:rounded-full before:bg-[rgba(0,0,0,0.5)] before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2">
                                    Html5 CSS
                                </li>
                                <li className="relative pl-[20px] mb-[10px] before:content-[''] before:w-[5px] before:h-[5px] before:rounded-full before:bg-[rgba(0,0,0,0.5)] before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2">
                                    jQuery
                                </li>
                                <li className="relative pl-[20px] mb-[10px] before:content-[''] before:w-[5px] before:h-[5px] before:rounded-full before:bg-[rgba(0,0,0,0.5)] before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2">
                                    Javascript
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div ref={el => sectionsRef.current[6] = el} className='w-full h-[110vh]'>
            <div className="bg-[#000] text-white rounded-t-[50px] shadow-[0px_0px_30px_rgba(0,0,0,0.3)] overflow-hidden">
                <ul className="flex justify-between">
                    <li className="w-1/2">
                        <a href="/">
                            <p className="w-full">
                                <img src="pc/project7.png" alt="" className="w-full" />
                            </p>
                        </a>
                    </li>
                    <li className="w-1/2 pt-[150px] pl-[100px] box-border">
                        <div className="text-[120px] leading-[0.9] mb-[85px]">
                            Design <span className="block">Agency</span>
                        </div>
                        <div className="w-[60%] leading-[1.5]">
                            <p className="text-[26px] leading-[1.2] mb-[30px]">
                                In order to improve understanding of the layout, I personally cloned website, which uses a lot of animation and various layout.
                            </p>
                            <p className="text-[15px] mb-[20px] tracking-[-1px]">
                                ox구조와 전체적 레이아웃 제작에 대한 이해 및 실력향상을 위해 국내 기업사이트 중 2023년 트렌드에 맞고 인터렉션 구현이 화려하며 비쥬얼적으로 탁월한 웹사이트를 선정하여 Clone Coding으로 퍼블리싱 실력을 키우기위해 노력하였습니다.
                            </p>
                            <ul>
                                <li className="relative pl-[20px] mb-[10px] before:content-[''] before:w-[5px] before:h-[5px] before:rounded-full before:bg-[rgba(0,0,0,0.5)] before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2">
                                    Html5 CSS
                                </li>
                                <li className="relative pl-[20px] mb-[10px] before:content-[''] before:w-[5px] before:h-[5px] before:rounded-full before:bg-[rgba(0,0,0,0.5)] before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2">
                                    jQuery
                                </li>
                                <li className="relative pl-[20px] mb-[10px] before:content-[''] before:w-[5px] before:h-[5px] before:rounded-full before:bg-[rgba(0,0,0,0.5)] before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2">
                                    Javascript
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Porject