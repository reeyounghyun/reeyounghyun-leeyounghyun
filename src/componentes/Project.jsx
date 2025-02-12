import React, { useEffect } from 'react'
import gsap from 'gsap';
import { useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Project = () => {
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
        <div ref={el => sectionsRef.current[1] = el} className='w-full h-[110vh]'>
            <div className="bg-[#000] text-white rounded-t-[50px] shadow-[0px_0px_30px_rgba(0,0,0,0.3)] overflow-hidden">
                <ul className="flex justify-between md:flex-row flex-col md:py-0 py-[5rem]">
                    <li className="md:w-1/2 w-[65%] mx-auto project-list-item">
                        <a href="https://shop.kt.com/deal/pick.do" alt="케이티닷컴" target='blank'>
                            <p className="w-full img-wrap">
                                <span className="link">Click!!</span>
                                <img src="/pc/project8.png" alt="케이티닷컴" className="w-full" />
                            </p>
                        </a>
                    </li>
                    <li className="md:w-1/2 w-full md:pt-[150px] pt-0 md:pl-[100px] pl-0 box-border">
                        <div className="mb-[30px]">
                            <h2 className='md:text-[100px] text-[40px] md:text-left text-center leading-[0.9] text text-[#FF0000]'>KT닷컴</h2>
                            <div className='md:w-[60%] w-full'>
                                <p className="md:text-[19px] text-[14px] md:text-left text-center md:pt-[3rem] pt-[1rem] mb-[30px] break-keep text-[#e9e9e9]">
                                    KT닷컴 메인 타임딜과 서브 5시핫픽 페이지의 유지보수를 CMS를 활용해 진행했습니다. <strong className='text-white font-bold'>타임딜은</strong> 월, 수, 금마다 새로운 배너가 업데이트되는 이벤트 영역이며, <strong className='text-white font-bold'>5시핫픽은</strong> 매주 수요일 업데이트되는 이벤트 서브페이지입니다. CMS에 디자이너가 제공한 이미지를 등록하고 서버에 업로드했으며, 기획서를 확인한 후 HTML과 CSS를 수정하여 반영하는 작업을 수행했습니다.
                                </p>
                            </div>
                        </div>
                        <div className="md:w-[60%] w-full md:text-left text-center text-[14px] leading-[1.5]">
                            <span className="block">
                                <strong className='text-[16px] pb-2'>[참여 인원]</strong><br/> 
                                퍼블1명 디자인 1명</span>
                            <p className="mb-[30px] pt-8 tracking-[-1px] break-keep">
                                <strong className='text-[16px] pb-2'>[작업 기여도]</strong><br/>
                                메인(타임딜), 서브(5시핫픽) 유지보수
                            </p>
                            <ul className='flex flex-wrap md:justify-start justify-center gap-3 text-sm text-[#ccc]'>
                                <li>CMS</li>
                                <li>#HTML</li>
                                <li>#CSS</li>
                                <li>#JavaScript</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div ref={el => sectionsRef.current[2] = el} className='w-full h-[110vh]'>
            <div className="bg-[#000] text-white rounded-t-[50px] shadow-[0px_0px_30px_rgba(0,0,0,0.3)] overflow-hidden">
                <ul className="flex justify-between md:flex-row flex-col md:py-0 py-[5rem]">
                    <li className="md:w-1/2 w-[65%] mx-auto ">
                        <a href="/">
                            <p className="w-full">
                                <img src="/pc/project7.png" alt="" className="w-full" />
                            </p>
                        </a>
                    </li>
                    <li className="md:w-1/2 w-full md:pt-[150px] pt-0 md:pl-[100px] pl-0 box-border">
                        <div className="mb-[30px]">
                            <h2 className='md:text-[100px] text-[40px] md:text-left text-center leading-[0.9] text-[#C40452]'>롯데</h2>
                            <div className='md:w-[60%] md:mx-0 w-[85%] mx-auto'>
                                <p className="md:text-[19px] text-[14px] md:text-left text-center md:pt-[3rem] pt-[1rem] mb-[30px] break-keep text-[#e9e9e9]">
                                <strong className='text-white font-bold'>롯데 계열사 '롯데월드 세븐일레븐 롯데리조트 롯데스카이힐'</strong> 등 프로젝트에 참여하여
                                    HTML,CSS,JavaScript를 사용하여 유지보수 진행했습니다.
                                </p>
                            </div>
                        </div>
                        <div className="md:w-[60%] w-full md:text-left text-center text-[14px] leading-[1.5]">
                            <span className="block  md:mx-0 w-[85%] mx-auto">
                                <strong className='text-[16px] pb-2'>[유지 보수]</strong>
                                <br/> 
                                <span classNaem="block"><strong  className='text-white font-bold'>스타일 가이드</strong>를 준수하여 CSS를 사용하여 프로젝트 규칙에 어긋나지 않도록 진행</span>
                                <span classNaem="block">프로젝트 관리와 이슈를 체크하기 위해 Jira를 사용하여 효율적으로 작업을 관리</span>
                                <span classNaem="block">웹 사이트의 텍스트와 이미지를 정기적으로 업데이트하여 최신 정보를 제공</span>
                            </span>
                            <p className="mb-[30px] pt-8 tracking-[-1px] break-keep">
                                <strong className='text-[16px] pb-2'>[작업 기여도]</strong><br/>
                                최신 정보를 유지하기 위한 유지 보수
                            </p>
                            <ul className='flex flex-wrap md:justify-start justify-center gap-3 text-sm text-[#ccc]'>
                                <li>#HTML</li>
                                <li>#SCSS</li>
                                <li>#협업</li>
                                <li>#유지 보수</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div ref={el => sectionsRef.current[3] = el} className='w-full h-[110vh]'>
            <div className="bg-[#000] text-white rounded-t-[50px] shadow-[0px_0px_30px_rgba(0,0,0,0.3)] overflow-hidden">
                <ul className="flex justify-between md:flex-row flex-col md:py-0 py-[5rem]">
                    <li className="md:w-1/2 w-[65%] mx-auto project-list-item">
                        <a href="https://fundaykorea.com/" alt="펀데이코리아" target='blank'>
                            <p className="w-full img-wrap">
                                <span className="link">Click!!</span>
                                <img src="/pc/porject2.png" alt="펀데이코리아" className="w-full" />
                            </p>
                        </a>
                    </li>
                    <li className="md:w-1/2 w-full md:pt-[150px] pt-0 md:pl-[100px] pl-0 box-border">
                        <div className="mb-[30px]">
                            <h2 className='md:text-[100px] text-[40px] md:text-left text-center leading-[0.9] text-[#0075C2]'>펀데이코리아</h2>
                            <div className='md:w-[60%] w-full'>
                                <p className="md:text-[19px] text-[14px] md:text-left text-center md:pt-[3rem] pt-[1rem] mb-[30px] break-keep text-[#e9e9e9]">
                                    패키지여행 예약 및 리뷰,체험단 모집 등 이벤트를 이용할 수 있는 웹 페이지입니다.
                                    JSX언어로 퍼블리싱 진행하여 메인 페이지를 제외한 <strong className='text-white font-bold'>서브페이지(70%)</strong>를 진행 했으며
                                    CSS 프레임워크 <strong className='text-white font-bold'>Tailwind</strong>를 이용하여 작업 속도를 향상시켜 UI 구현하는 기간을 단축 하는데 도움이 되었습니다.
                                </p>
                            </div>
                        </div>
                        <div className="md:w-[60%] w-full md:text-left text-center text-[14px] leading-[1.5]">
                            <span className="block">
                                <strong className='text-[16px] pb-2'>[참여 인원]</strong><br/> 
                                기획1명 디자인 1명 프론트2명 백앤드 1명</span>
                            <p className="mb-[30px] pt-8 tracking-[-1px] break-keep">
                                <strong className='text-[16px] pb-2'>[작업 기여도]</strong><br/>
                                서브페이지 페이지 구축 <br/> 
                                (60% UI 구현했습니다)
                            </p>
                            <ul className='flex flex-wrap md:justify-start justify-center gap-3 text-sm text-[#ccc]'>
                                <li>#React</li>
                                <li>#Tailwind</li>
                                <li>#JavaScript</li>
                                <li>#SI</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div ref={el => sectionsRef.current[4] = el} className='w-full h-[110vh]'>
            <div className="bg-[#000] text-white rounded-t-[50px] shadow-[0px_0px_30px_rgba(0,0,0,0.3)] overflow-hidden">
                <ul className="flex justify-between md:flex-row flex-col md:py-0 py-[5rem]">
                    <li className="md:w-1/2 w-[65%] mx-auto project-list-item">
                        <a href="https://cancertainment.com/" alt="박피디와황배우" target='blank' >
                            <p className="w-full img-wrap">
                                <span className="link">Click!!</span>
                                <img src="/pc/project4.png" alt="박피디와황배우" className="w-full" />
                            </p>
                        </a>
                    </li>
                    <li className="md:w-1/2 w-full md:pt-[150px] pt-0 md:pl-[100px] pl-0 box-border">
                        <div className="mb-[30px]">
                            <h2 className='md:text-[100px] text-[40px] md:text-left text-center leading-[0.9] text-[#ff6a2a]  '>박피디와황배우</h2>
                            <div className='md:w-[60%] md:mx-0 w-[85%] mx-auto'>
                                <p className="md:text-[19px] text-[14px] md:text-left text-center md:pt-[3rem] pt-[1rem] mb-[30px] break-keep text-[#e9e9e9]">
                                    청각 및 언어 발달에 관련된 프로그램 소개와 서비스를 이용할 수 있는 웹페이지입니다.
                                    <strong className='text-white font-bold'>PHP 개발 환경에서 퍼블리싱</strong> 진행하였으며
                                    제플린을 이용하여 사용자 UI 구축 및 유지보수 진행했습니다.
                                    HTML,CSS,JavaScript를 이용하여 메인페이지를 제외한 <strong className='text-white font-bold'>서브페이지(70%)</strong>를 Media Query를 이용하여 구현했습니다.
                                </p>
                            </div>
                        </div>
                        <div className="md:w-[60%] w-full md:text-left text-center text-[14px] leading-[1.5]">
                            <span className="block">
                                <strong className='text-[16px] pb-2'>[참여 인원]</strong><br/> 
                                기획1명 디자인 1명 프론트1명 백앤드 1명</span>
                            <p className="mb-[30px] pt-8 tracking-[-1px] break-keep">
                                <strong className='text-[16px] pb-2'>[작업 기여도]</strong><br/>
                                소리 빛 반응형 웹페이지 구축&유지 보수 <br/> 
                                (100% 사용자UI 구현했습니다)
                            </p>
                            <ul className='flex flex-wrap md:justify-start justify-center gap-3 text-sm text-[#ccc]'>
                                <li>#HTML</li>
                                <li>#PHP</li>
                                <li>#협업</li>
                                <li>#반응형</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

    </section>
  )
}

export default Project