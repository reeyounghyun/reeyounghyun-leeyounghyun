import React, { useEffect } from 'react';
import gsap from 'gsap';
import { useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Porject = () => {
    gsap.registerPlugin(ScrollTrigger);
    const gsapRef = useRef();
    const videoRef = useRef();

    useEffect(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: gsapRef.current,  // gsapRef 사용
                start: '50% 30%',
                end: '100% 100%',
                scrub: 1,
                markers: true
            }
        })
        .to(gsapRef.current, { backgroundColor:'#fff', color:'#000', ease:'none', duration:10}, 0)
        // .to('.svgAni path', {stroke : "#000", ease:'none', duration:5}, 0)
        .fromTo(videoRef.current, 
            {'clip-path':'inset(60% 60% 60% 60% round 30%)'},
            {'clip-path':'inset(0% 0% 0% 0% round 0%)', ease:'none', duration:10}, 0
        );
    }, []);

    return (
        <>
            <section ref={gsapRef} className='h-dvh bg-black text-white flex justify-center items-center border-4 border-red-600'>
                <div className='text-8xl  leading-tight flex items-center'>
                    <span className='text-transparent block' style={{ WebkitTextStroke: '2px #b1dd40' }}>Porject</span>
                </div>
            </section>
        </>
    );
}

export default Porject;
