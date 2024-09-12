import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useHorizontalScroll = (triggerRef, listRefs, imgBoxRefs, textBoxRefs, numRefs, counterRef, itemsLength) => {
  useEffect(() => {
    // ScrollTrigger의 미디어 쿼리 설정
    ScrollTrigger.matchMedia({
      '(min-width:1024px)': function() {
        let list = listRefs.current;

        let scrollTween = gsap.to(list, {
          xPercent: -100 * (list.length - 1),
          ease: 'none',
          scrollTrigger: {
            trigger: triggerRef.current,
            pin: true,
            scrub: 1,
            start: 'center center',
            end: '300%',
            markers: true,
          },
        });

        // 각 이미지 박스에 대해 clip-path 애니메이션 설정
        imgBoxRefs.current.forEach(imgBox => {
          gsap.timeline({
            scrollTrigger: {
              trigger: imgBox,
              containerAnimation: scrollTween,
              start: 'center right',
              end: 'center center',
              scrub: true,
            }
          })
          .to(imgBox, {'clip-path': 'inset(0%)', ease: 'none', duration: '1'}, 0);

          gsap.timeline({
            scrollTrigger: {
              trigger: imgBox,
              containerAnimation: scrollTween,
              start: 'center center',
              end: 'center left',
              scrub: true,
            }
          })
          .to(imgBox, {'clip-path': 'inset(30%)', ease: 'none', duration: '1'}, 0);
        });

        // 각 텍스트 박스에 대해 x축 이동 및 투명도 애니메이션 설정
        textBoxRefs.current.forEach(textBox => {
          gsap.timeline({
            scrollTrigger: {
              trigger: textBox,
              containerAnimation: scrollTween,
              start: 'center 70%',
              end: 'center 40%',
              scrub: true,
            }
          })
          .to(textBox, { 'opacity': '1', 'x': '-100' }, 0);

          gsap.timeline({
            scrollTrigger: {
              trigger: textBox,
              containerAnimation: scrollTween,
              start: 'center 30%',
              end: 'center 20%',
              scrub: true,
            }
          })
          .to(textBox, { 'opacity': '0' }, 0);
        });

        // 각 번호에 대한 ScrollTrigger 설정
        numRefs.current.forEach((text, index) => {
          let num = text.getAttribute('data-text');
          ScrollTrigger.create({
            trigger: text,
            start: '0% center',
            end: '100% center',
            scrub: true,
            containerAnimation: scrollTween,
            onEnter: () => { counterRef.current.innerText = num; },
            onEnterBack: () => { counterRef.current.innerText = num; },
          });
        });
      }
    });

    // 컴포넌트 언마운트 시 ScrollTrigger 인스턴스 정리
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [triggerRef, listRefs, imgBoxRefs, textBoxRefs, numRefs, counterRef, itemsLength]);
};

export default useHorizontalScroll;
