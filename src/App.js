import './App.css';
import PageTitle from './common/PageTitle';
import Guestbook from './componentes/Guestbook';
import Home from './pages/Home';

function App() {
  return (
    <>
      <PageTitle />
      <section className='flex items-center justify-center text-white truncate bg-black border-4 border-red-600 h-dvh'>
        <div className='leading-tight uppercase text-8xl'>
          <span className='block text-transparent' style={{WebkitTextStroke:'2px #b1dd40'}}>GSAP</span>
          ScrollTrigger
          <Home />
        </div>
      </section>
      <section className='flex justify-around bg-black border-4 border-red-600 h-dvh gap-[15px] p-2'>
        <div className='flex flex-col items-center justify-center flex-1 leading-tight uppercase text-8xl'>
          <strong className='block text-[5rem] text-center pt-[7rem] text-white font'>Thank You</strong>
          <span className='block text-[2rem] text-center text-white'>방문해 주셔서 감사합니다:)</span>
          <p className="block pb-4 mx-auto"> 
            <img src="/emog.png" className='w-full max-w-xs mx-auto' alt="Emog" />
          </p>
          <p className="endingDeac text-center block pt-[39px] pb-[14px] text-slate-300 leading-7 fo text-base">
          " <strong className='font-medium text-white'>HTML과 CSS에 강한 게 제 <span className='text-lg underline'>장점</span>입니다.</strong> 많은 프론트엔드 개발자가 어려워하는 부분이라고 생각합니다. <br/>
          JavaScript 기본기가 탄탄하고, <strong className='font-medium text-white'> <sapn className='text-lg'>React</sapn> 같은 최신 라이브러리</strong>를 이용하여 프로젝트를 만들었던 경험이 있습니다. <br/>
          <strong className='font-medium text-white'> <span className='text-lg'>지속적인 성장</span>을 추구</strong>하는 개발자로서, 협업을 통해 얻은 경험과 스킬을 바탕으로 <strong className='font-medium text-white'>사용자 만족도가 높은 웹 서비스를 구현하는 게 저의 <span className='text-lg underline'>목표</span>입니다.</strong> "
          </p>
          <span 
          className="block font-sans text-xs text-center Copyright font-extralight text-zinc-600">Copyright 2024. younghyun all rights reserved.</span>
        </div>
        <Guestbook />
      </section>
    </> 
  );
}

export default App;