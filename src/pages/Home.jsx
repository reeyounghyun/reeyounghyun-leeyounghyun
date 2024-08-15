import React from 'react';
import WaveText from '../componentes/WaveText.jsx';
// import emojiMovie from '../emojimovie.gif';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full home h-dvh">
      <h1 className="mb-4 font-bold text-white h1-title big-title text-8xl">Welcome to my site!</h1>
      {/* <WaveText 
        text="퍼블리싱은 기본! 리엑트도 사용할 줄 아는 개발자 입니다." 
        direction="horizontal"
        className="text-white"
      /> */}
      <WaveText 
        text="지금까지 이런 개발자는 없었다, 퍼블리싱은 기본! 자바스크립트 리엑트 넥스트도 사용할 줄 아는 개발자" 
        direction="slide" 
        className="py-4 my-8 rounded-lg shadow-md mv-text"
    />
        {/* <img 
        src={emojiMovie} 
        alt="Emoji Movie" 
        width='100px'
        height='100px'
        className="w-full max-w-md mx-auto rounded-lg shadow-lg"
      /> */}
      {/* 다른 홈 페이지 콘텐츠 */}
    </div>
  );
}

export default Home;