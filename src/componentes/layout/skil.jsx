import React, { useEffect } from 'react';
import gsap from 'gsap';
import { useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Skil = () => {
    gsap.registerPlugin(ScrollTrigger);
    const gsapRef = useRef();
    const videoRef = useRef();

    useEffect(() => {
        gsap.timeline({
            yPercent: -100,
            ease: "none",
            duration: 0.5,
            scrollTrigger: {
                trigger: ".parallax__item__desc",
                start: "top bottom",
                ene: "bottom top",
                markers: true,
                scrub: true
            }
        })
        .to(gsapRef.current, { backgroundColor:'#fff', color:'#000', ease:'none', duration:10}, 0)
        // .to('.svgAni path', {stroke : "#000", ease:'none', duration:5}, 0)
        .fromTo(videoRef.current, 
            {'clip-path':'inset(60% 60% 60% 60% round 50%)'},
            {'clip-path':'inset(0% 0% 0% 0% round 0%)', ease:'none', duration:10}, 0
        );
    }, []);


            // gsap.to(".parallax__item__desc", {
        //     yPercent: -100,
        //     ease: "none",
        //     duration: 0.5,
        //     scrollTrigger: {
        //         trigger: ".parallax__item__desc",
        //         start: "top bottom",
        //         ene: "bottom top",
        //         markers: true,
        //         scrub: true
        //     }
        // });

    return (
        <>
            <section ref={gsapRef} className='h-dvh bg-black text-white flex justify-center items-center border-4 border-red-600'>
                <div className='text-8xl  leading-tight flex items-center'>
                    <span className='text-transparent block' style={{ WebkitTextStroke: '2px #b1dd40' }}>Skil</span>
                </div>
            </section>
        </>
    );
}

export default Skil;
