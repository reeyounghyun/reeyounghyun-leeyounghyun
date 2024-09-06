import React from 'react'

function section3() {
  return (
    <section id='section3' className='parallax__item relative flex items-center justify-center w-full h-screen'>
      <span className="absolute bottom-5 right-5 text-[4vw] leading-none">03.가로</span>
        <div className='flex items-start justify-between gap-40 w-100'>
          <div className='flex-col items-start flex-1 gap-3'>
            <div className='flex items-center gap-3 pb-8'>
              <h3 className="xl:text-6xl text-5xl font-bold Paperlogy text-white">project</h3>
                <div className="inline-block w-100 rounded-2xl shadow-xl shadow-white">
                  <img src="/memoji-me.png" alt="이모지" width="100" height="auto" />
                </div>
            </div>
            <h4 className="xl:text-3xl text-xl font-semibold text-gray-100">반응형 웹페이지</h4>
            <div className="block my-2 text-xl font-semibold text-gray-200">
              <sapn className="text-yellow-400">HTML</sapn> CSS JavaScript JQuery
            </div>
            <p className="font-semibold text-base text-gray-500 leading-relaxed block w-100">
                <span className="text-gray-300 font-bold">반응형 웹 디자인</span>을 적용하여 다양한 디바이스에서 <br/>
                최적화된 사용자 경험을 제공하고,<br/> UX/UI 화면단<sapn className="text-gray-300 font-bold">퍼블리싱의 구축 및 유지보수</sapn>를 수행하여<br/>
                전반적인 웹사이트의 <span className="text-gray-300 font-bold">기능성과 사용성</span>을 향상시켰습니다.
            </p>
          </div>
          {/* 왼쪽 컨탠츠 */}
          <ul className="flex items-center justify-start gap-5">
            <li>
              <div className="text-black bg-white rounded-xl">
                <img src="/enter_img22.jpg" alt="소리아월렛"  width='auto' height='260' className="object-cover w-full rounded soriaImag"/>
                <div className="p-3 project-text-1">
                  <div className="flex flex-col gap-3 text-center txt-box-1">
                    <h2 className="text-xl font-bold">소리아웰렛</h2>
                      <p className="text-sm text-gray-500">[가상화페] HD/cloud Wallet</p>
                  </div>
                </div>
                <div className="flex flex-col content-center space-y-2 hoverItme">
                  <button type="button"
                    className="px-4 py-2 text-center text-black rounded hover:bg-gray-500 btn moerBtn">자세히보기</button>
                </div>
              </div>
            </li>
            <li>
              <div className=" text-black bg-white rounded-xl">
              <img src="/enter_img22.jpg" alt="소리아월렛"  width='auto' height='260' className="object-cover w-full rounded soriaImag"/>
                <div className="p-3 project-text-1">
                    <div className="flex flex-col gap-3 text-center txt-box-1">
                      <h2 className="text-xl font-bold">소리아웰렛</h2>
                        <p className="text-sm text-gray-500">[가상화페] HD/cloud Wallet</p>
                    </div>
                </div>
                <div className="flex flex-col content-center space-y-2 hoverItme">
                  <button type="button"
                    className="px-4 py-2 text-center text-black rounded hover:bg-gray-500 btn moerBtn">자세히보기</button>
                </div>
              </div>
            </li>
            <li>
              <div className=" text-black bg-white rounded-xl">
              <img src="/enter_img22.jpg" alt="소리아월렛"  width='auto' height='260' className="object-cover w-full rounded soriaImag"/>
                <div className="p-3 project-text-1">
                    <div className="flex flex-col gap-3 text-center txt-box-1">
                      <h2 className="text-xl font-bold">소리아웰렛</h2>
                        <p className="text-sm text-gray-500">[가상화페] HD/cloud Wallet</p>
                    </div>
                </div>
                <div className="flex flex-col content-center space-y-2 hoverItme">
                  <button type="button"
                    className="px-4 py-2 text-center text-black rounded hover:bg-gray-500 btn moerBtn">자세히보기</button>
                </div>
              </div>
            </li>
            <li>
              <div className=" text-black bg-white rounded-xl">
                <img src="/enter_img22.jpg" alt="소리아월렛" width='auto' height='260' className="object-cover w-full rounded soriaImag"/>
                <div className="p-3 project-text-1">
                    <div className="flex flex-col gap-3 text-center txt-box-1">
                      <h2 className="text-xl font-bold">소리아웰렛</h2>
                        <p className="text-sm text-gray-500">[가상화페] HD/cloud Wallet</p>
                    </div>
                </div>
                <div className="flex flex-col content-center space-y-2 hoverItme">
                  <button type="button" className="px-4 py-2 text-center text-black rounded hover:bg-gray-500 btn moerBtn">자세히보기</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
    </section>
  );
}
export default section3;