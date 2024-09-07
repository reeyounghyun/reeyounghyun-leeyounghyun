import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Horizontal = () => {
  const horizontalRef = useRef(null);


  useEffect(() => {
    const horizontalScroll  = horizontalRef.current;
    let sections = gsap.utils.toArray('.section');

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1), // 각 섹션의 너비만큼 이동
      ease: 'none',
      scrollTrigger: {
        trigger: horizontalScroll ,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + horizontalScroll.offsetWidth // 끝나는 지점 설정
      }
    });
  }, []);


  return () => {
    horizontalRef.kill();
  };
};

export default Horizontal;