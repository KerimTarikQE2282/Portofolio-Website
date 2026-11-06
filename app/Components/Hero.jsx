"use client";
import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ArrowBigDownDash, Github, Linkedin, Mail } from 'lucide-react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Me from '../../Resources/Me.JPG';
import Image from 'next/image';

const SKILLS =
    'OSCP • HTB CPTS • Penetration Testing • Active Directory • Kerberoasting • BloodHound • Impacket • NetExec • Mimikatz • Burp Suite • OWASP Top 10 • Metasploit • Nmap • Pivoting • Ligolo-ng • Chisel • Privilege Escalation • Hashcat • Python • Bash • PowerShell • Kali Linux • Wireshark • Reporting';

// Starting offsets of the three diagonal skill lines, as % of the hero box.
const LINES = [
    { left: '20%', top: '-25%' },
    { left: '-15%', top: '5%' },
    { left: '-50%', top: '35%' },
];

function Hero() {
    const hero = React.useRef(null);
    const welcome = React.useRef(null);
    const card = React.useRef(null);
    const scroll = React.useRef(null);
    const scrollIcon = React.useRef(null);
    const lines = React.useRef([]);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        const mm = gsap.matchMedia();

        mm.add('(prefers-reduced-motion: no-preference)', () => {
            // Slow diagonal drift of the skill lines
            lines.current.forEach((el) => gsap.to(el, { x: -1000, y: -1000, duration: 90, repeat: -1, ease: 'none' }));

            // "Welcome" bar: scales in from the centre, then flies up
            gsap.timeline()
                .fromTo(welcome.current, { scaleX: 0, opacity: 0 }, { scaleX: 1, opacity: 1, duration: 0.5 })
                .to(welcome.current, { yPercent: -400, opacity: 0, duration: 0.5, delay: 1 });

            // Name card fades in after the welcome bar, then shrinks and lightens as you scroll away
            gsap.fromTo(card.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, delay: 2 });
            gsap.to(card.current, {
                scale: 0.85,
                yPercent: 25,
                backgroundColor: '#ffffff',
                color: '#000000',
                ease: 'none',
                scrollTrigger: { trigger: hero.current, start: 'top top', end: 'bottom top', scrub: 1 },
            });

            gsap.fromTo(scroll.current, { opacity: 0 }, { opacity: 1, duration: 1, delay: 3 });
            gsap.to(scrollIcon.current, { y: 10, repeat: -1, yoyo: true, duration: 0.8 });
        });

        // Reduced motion: no intro, everything visible straight away
        mm.add('(prefers-reduced-motion: reduce)', () => {
            gsap.set(welcome.current, { display: 'none' });
        });

        return () => mm.revert();
    });

    return (
        <section ref={hero} className="relative h-[100svh] min-h-[32rem] overflow-hidden">

            {/* Decorative diagonal skill lines */}
            <div className="pointer-events-none absolute inset-0 select-none" aria-hidden="true">
                {LINES.map((pos, i) => (
                    <p
                        key={i}
                        ref={(el) => (lines.current[i] = el)}
                        className="absolute origin-top-left rotate-45 whitespace-nowrap text-3xl text-gray-600 sm:text-4xl md:text-6xl"
                        style={pos}
                    >
                        {SKILLS}
                    </p>
                ))}
            </div>

            {/* Welcome bar */}
            <div
                ref={welcome}
                className="absolute inset-x-0 top-[35%] z-20 flex h-[30%] scale-x-0 items-center justify-center bg-black text-6xl font-bold text-white md:text-8xl"
                aria-hidden="true"
            >
                Welcome
            </div>

            {/* Name card */}
            <div className="relative z-10 flex h-full items-center justify-center px-4">
                <div
                    ref={card}
                    className="flex w-full max-w-3xl flex-col items-center gap-6 rounded-lg bg-black px-6 py-8 text-white sm:flex-row sm:gap-8 sm:px-10 md:py-12"
                >
                    <Image
                        src={Me}
                        alt="Kerim Tarik"
                        priority
                        sizes="(min-width: 768px) 112px, 96px"
                        className="h-24 w-24 flex-none rounded-full object-cover md:h-28 md:w-28"
                    />
                    <div className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-left">
                        <h1 className="text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">Hi, I&apos;m Kerim</h1>
                        <div className="flex gap-6">
                            <a href="#" aria-label="GitHub" className="p-1 transition-transform hover:scale-110">
                                <Github className="h-8 w-8 md:h-9 md:w-9" />
                            </a>
                            <a href="#" aria-label="LinkedIn" className="p-1 transition-transform hover:scale-110">
                                <Linkedin className="h-8 w-8 md:h-9 md:w-9" />
                            </a>
                            <a href="#Contact" aria-label="Contact" className="p-1 transition-transform hover:scale-110">
                                <Mail className="h-8 w-8 md:h-9 md:w-9" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll hint */}
            <div
                ref={scroll}
                className="absolute inset-x-0 bottom-[max(1.5rem,env(safe-area-inset-bottom))] z-10 flex flex-col items-center gap-2"
            >
                <p>Scroll Down</p>
                <span ref={scrollIcon}>
                    <ArrowBigDownDash className="h-10 w-10" />
                </span>
            </div>
        </section>
    );
}

export default Hero;
