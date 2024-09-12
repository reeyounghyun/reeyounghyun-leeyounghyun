import React, { useRef } from 'react';
import HorizontalScroll from 'Hooks/HorizontalScroll'; // 커스텀 훅 가져오기

const items = [
  { id: 1, image: 'work1.jpg', title: '소리아월렛', description: 'UI/UX Design, Web Publishing', category: 'Design' },
  { id: 2, image: 'work2.jpg', title: '펀데이코리아', description: 'Frontend Development', category: 'Development' },
  { id: 3, image: 'work3.jpg', title: '자람콘텐츠', description: 'React and GSAP Animation', category: 'Animation' },
  { id: 4, image: 'work4.jpg', title: '소리빛', description: 'Responsive Web Design', category: 'Design' },
  { id: 5, image: 'work5.jpg', title: '박피디와황배우', description: 'Fullstack Application', category: 'Fullstack' },
  { id: 6, image: 'work6.jpg', title: '메디프', description: 'E-commerce Platform', category: 'E-commerce' },
  { id: 7, image: 'work7.jpg', title: '에너지드림센터', description: 'Mobile App Design', category: 'Mobile' },
  { id: 8, image: 'work8.jpg', title: '롯데', description: 'API Integration', category: 'API' },
];

const Horizontal = () => {
  const triggerRef = useRef(null);
  const listRefs = useRef([]);
  const imgBoxRefs = useRef([]);
  const textBoxRefs = useRef([]);
  const numRefs = useRef([]);
  const counterRef = useRef(null);

  // 커스텀 훅 사용
  HorizontalScroll(triggerRef, listRefs, imgBoxRefs, textBoxRefs, numRefs, counterRef, items.length);

  return (
    <section ref={triggerRef} className='relative overflow-hidden text-white bg-black border-4 border-red-500 h-dvh'>
        {/* 스크롤 카운터 */}
        <div className='absolute text-white text-8xl right-10 bottom-10'>
            <span ref={counterRef}></span>
            <span>/ {items.length}</span> {/* items의 총 길이를 표시 */}
        </div>
        <ul className='flex px-[30%] box-border'>
          {items.map((item, index) => (
            <li
              key={item.id}
              ref={el => listRefs.current[index] = el}
              className='w-[700px] p-[100px] box-border flex-shrink-0'
            >
              <a className='relative block w-full' href="/">
                <div className='num' data-text={index + 1} ref={el => numRefs.current[index] = el}></div>
                <div className='relative imgBox' ref={el => imgBoxRefs.current[index] = el}>
                  <img className='w-full' src={item.image} alt={item.title} />
                </div>
                <div className='absolute left-0 opacity-0 bottom-10' ref={el => textBoxRefs.current[index] = el}>
                  <p className='text-6xl'>{item.title}</p>
                  <p className='text-xl'>{item.description}</p>
                  <p className='text-sm'>{item.category}</p> {/* 카테고리 추가 */}
                </div>
              </a>
            </li>
          ))}
        </ul>
    </section>
  );
};

export default Horizontal;
