import React from 'react'
import Guestbook from '../componentes/Guestbook';

function Footer() {
  return (
    <div className="bg-white ">
      <div className='bg-black border-4 border-red-600 py-[4rem] rounded-t-[50px] '>
        <section className='flex justify-around items-end  gap-[15px] p-2 md:gap-[100px] shadow-[0px_0px_30px_rgba(0,0,0,0.3)] '>
          <div className='flex flex-col items-center justify-center flex-1 leading-tight uppercase text-8xl'>
            <strong className='block md:text-[5rem] sm:text-5xl text-3xl text-center pt-[7rem] text-white font'>Thank You</strong>
            <p className="block pb-4 mx-auto sm:w-96"> 
              <img src="/emog.png" className='w-full mx-auto Emog-img' alt="Emog" />
            </p>
            <p className="endingDeac text-center block pt-[39px] pb-[14px] text-slate-300 leading-7 fo md:text-base text-sm">
              " <strong className='font-medium text-white'>HTML과 CSS에 강한 게 제 <span className='text-sm underline md:text-lg'>장점</span>입니다.</strong> 많은 프론트엔드 개발자가 어려워하는 부분이라고 생각합니다.
            JavaScript 기본기가 탄탄하고, <strong className='font-medium text-white'> <sapn className='text-sm md:text-lg'>React</sapn> 같은 최신 라이브러리</strong>를 이용하여 프로젝트를 만들었던 경험이 있습니다.
            <strong className='font-medium text-white'><span className='text-sm md:text-lg'>지속적인 성장</span>을 추구</strong>하는 개발자로서, 협업을 통해 얻은 경험과 스킬을 바탕으로 <strong className='font-medium text-white'>사용자 만족도가 높은 웹 서비스를 구현하는 게 저의 <span className='text-sm underline md:text-lg'>목표</span>입니다.</strong> "
            </p>
          </div>
        <Guestbook />
        </section>
        <span className="block font-sans text-xs text-center Copyright font-extralight text-zinc-600">Copyright 2024. younghyun all rights reserved.</span>
      </div>
    </div>
  )
}

export default Footer
