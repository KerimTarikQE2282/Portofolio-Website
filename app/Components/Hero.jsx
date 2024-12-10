"use client";
import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ArrowBigDownDash } from 'lucide-react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Me from '../../Resources/Me.jpg';
import Image from 'next/image';

function Hero() {
    const WelcomeSection = React.useRef(null);
    const Skills1 = React.useRef(null);
    const Skills2 = React.useRef(null);
    const Skills3 = React.useRef(null);
    const me = React.useRef(null);
    const scrollBall = React.useRef(null);
    const scroll=React.useRef(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Create matchMedia context
        const mm = gsap.matchMedia();

        // Add animation rules for larger screens
        mm.add("(min-width: 1024px)", () => {
            const tl = gsap.timeline();
            tl.from(WelcomeSection.current, { scaleX: 0, transformOrigin: "center", opacity: 0 })
              .to(WelcomeSection.current, { scaleX: 1, duration: 0.5 })
              .to(WelcomeSection.current, { y: -1000, duration: 0.5, delay: 1 });

            gsap.to(Skills1.current, { x: -1000, y: -1000, duration: 90, repeat: 100 });
            gsap.to(Skills2.current, { x: -1000, y: -1000, duration: 90, repeat: 100 });
            gsap.to(Skills3.current, { x: -1000, y: -1000, duration: 90, repeat: 100 });

            const t2 = gsap.timeline();
            t2.fromTo(
                me.current,
                { opacity: 0 },
                { opacity: 1, duration: 1, delay: 2 }
            ).to(me.current, {
                y: 570,
                x: -300,
                fontWeight: "lighter",
                backgroundColor: "white",
                scale: 0.8,
                color: "black",
                duration: 10,
                scrollTrigger: {
                    trigger: me.current,
                    start: "bottom center",
                    end: "bottom 200px",
                    scrub: 2,
                },
            });
        });
        gsap.to(scroll.current, { opacity:1, duration: 1,delay:4 });

        // Add animation rules for all screens (if needed)
        gsap.to(scrollBall.current, { y: 10, repeat: -1, duration: 1 });

        // Cleanup on unmount
        return () => mm.revert();
    });

    return (
        <div className="h-[100vh]">
            <div className="relative overflow-hidden h-full ">
                <p
                    className="text-4xl md:text-6xl text-gray-600 whitespace-nowrap rotate-45 ml-[50vw] md:ml-[15vw]"
                    ref={Skills1}
                >
React • Next.js • Express.js • Node.js • Django • MongoDB • PostgreSQL • Tailwind CSS • Redux • Scikit-learn • TensorFlow • Pandas • NumPy • Matplotlib • Python • JavaScript • TypeScript • Prisma ORM • REST APIs • GraphQL • Docker • Git • Heroku • Firebase                </p>
                <p
                    className="text-4xl md:text-6xl text-gray-600 whitespace-nowrap rotate-45 h-[20vh] md:h-[30vh] mr-[105vw] md:mr-[55vw]"
                    ref={Skills3}
                >
React • Next.js • Express.js • Node.js • Django • MongoDB • PostgreSQL • Tailwind CSS • Redux • Scikit-learn • TensorFlow • Pandas • NumPy • Matplotlib • Python • JavaScript • TypeScript • Prisma ORM • REST APIs • GraphQL • Docker • Git • Heroku • Firebase                </p>
                <p
                    className="text-4xl md:text-6xl text-gray-600 whitespace-nowrap rotate-45 h-[20vh] md:h-[30vh] mr-[425vw] relative lg:right-0 right-[30vw] md:mr-[85vw]"
                    ref={Skills2}
                >
React • Next.js • Express.js • Node.js • Django • MongoDB • PostgreSQL • Tailwind CSS • Redux • Scikit-learn • TensorFlow • Pandas • NumPy • Matplotlib • Python • JavaScript • TypeScript • Prisma ORM • REST APIs • GraphQL • Docker • Git • Heroku • Firebase                </p>
            </div>

            <div className="h-[30vh] text-center font-bold text-8xl bg-black text-white py-[8vh] w-full relative bottom-[70vh] scale-x-0" ref={WelcomeSection}>
                <p>Welcome</p>
            </div>

            <div className="h-[30vh] text-center font-bold text-8xl w-[60vw] ml-[17vw] rounded-lg p-0 bg-black relative bottom-[95vh] text-white opacity-0 flex flex-col gap-5" ref={me}>
                <div className="rounded-full h-[150px] w-[150px] relative top-8 left-24">
                    <Image src={Me} className="rounded-full h-[15vh] w-[15vh] items-center ml-5 mt-5" alt="Me" />
                </div>
                <p className="text-7xl font-bold relative bottom-[10vh] ml-[10vw]">Hi, I'm Kerim</p>
            </div>

            <div className="relative bottom-[83vh] lg:bottom-[80vh] left-[45vw] w-[30vw] opacity-0" ref={scroll}>
                <p>Scroll Down</p>
                <ArrowBigDownDash className="w-11 h-11 ml-5 mt-3" ref={scrollBall} />
            </div>
        </div>
    );
}

export default Hero;
