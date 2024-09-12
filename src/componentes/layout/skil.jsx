import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Skil = () => {
    gsap.registerPlugin(ScrollTrigger);
    const gsapRef = useRef();
    const videoRef = useRef();

    useEffect(() => {
        // .parallax__item__desc에 대한 yPercent 애니메이션 적용
        gsap.to(".parallax__item__desc", {
            yPercent: -100,
            ease: "none",
            duration: 0.5,
            scrollTrigger: {
                trigger: ".parallax__item__desc",
                start: "top bottom",
                end: "bottom top", // 'ene' 오타 수정 -> 'end'
                markers: true,
                scrub: true
            }
        });

        // 다른 애니메이션 설정
        gsap.timeline()
        .to(gsapRef.current, { backgroundColor:'#fff', color:'#000', ease:'none', duration:10 }, 0)
        // .to('.svgAni path', {stroke : "#000", ease:'none', duration:5}, 0)
        .fromTo(videoRef.current, 
            {'clip-path':'inset(60% 60% 60% 60% round 50%)'},
            {'clip-path':'inset(0% 0% 0% 0% round 0%)', ease:'none', duration:10 }, 0
        );
    }, []);

    return (
        <section ref={gsapRef} className="relative flex items-center justify-center w-full h-screen bg-black text-white">
            <div className="parallax__item__desc">This is a description with parallax effect</div>
            <video ref={videoRef} className="absolute w-full h-full object-cover" autoPlay muted loop>
                <source src="video.mp4" type="video/mp4" />
            </video>
        </section>
    );
};

export default Skil;
