import React from 'react'

function section3() {
  return (
      <section 
      id="section3"
      // ref={sectionRef}
      className='relative flex items-center justify-center w-full h-screen bg-[#1f1f1f]'
      >
        <span className="absolute bottom-5 right-5 text-[5vw] leading-none">03.가로</span>  
        <div class="flex items-center justify-around gap-72">
          <div class="flex items-start justify-between gap-40 w-100">
            <div class="flex-col items-start flex-1 gap-3">
              <div class="flex items-center gap-3 pb-8">
                <h3 class="xl:text-6xl text-5xl font-bold Paperlogy text-white">project</h3>
                <div class="inline-block w-100 rounded-2xl shadow-md shadow-white">
                  <img src={'/memoji-me.png'} alt="menoji" width="100px" height="auto" />
                </div>
              </div>
              <h4 class="xl:text-3xl text-xl font-semibold text-gray-100">반응형 웹페이지</h4>
              <div class="block my-2 text-xl font-semibold text-gray-200">
                <sapn class="text-yellow-400">HTML</sapn> CSS JavaScript JQuery
              </div>
              <div class="font-semibold text-base text-gray-500 leading-relaxed">
                <p class="block w-100">
                  <span class="text-gray-300 font-bold">반응형 웹 디자인</span>을 적용하여 다양한 디바이스에서 <br/> 최적화된 사용자 경험을 제공하고,<br/>UX/UI 화면단 <sapn class="text-gray-300 font-bold">퍼블리싱의 구축 및 유지보수</sapn>를 수행하여<br/>전반적인 웹사이트의 <span class="text-gray-300 font-bold">기능성과 사용성</span>을 향상시켰습니다.
                </p>
              </div>
            </div>
          </div>
          {/* 전체_div_end */}
        </div>
      </section>

  )
}

export default section3
