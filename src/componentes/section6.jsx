import React, { useRef } from 'react';
import TextEffect6 from 'Hooks/TextEffect6';

const Section6 = () => {
  const sectionRef = useRef(null);
  const textRefs = useRef([]);
  const texts = ['i', 'wait', 'for', 'you', 'to', 'choose', 'me', '!'];

  // 커스텀 훅으로 애니메이션 로직 관리
  TextEffect6(sectionRef, textRefs);

  return (
    <section id="Section6" ref={sectionRef} className="parallax__item">
      <span className="absolute bottom-5 right-5 text-[4vw] leading-none">06.세로</span>
      {texts.map((text, index) => (
        <div
          key={index}
          ref={(el) => (textRefs.current[index] = el)}
          className={`parallax__item__img ${text === 'me' ? 'text-[4.5rem]' : 'text-[3rem]'}`}
          // Here we apply a larger font size if the text is "me"
          >
          {text}
        </div>


      ))}
    </section>
  );
};

export default Section6;
