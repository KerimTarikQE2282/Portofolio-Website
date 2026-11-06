// Page motion, matching the portfolio's GSAP style: a "Welcome"-style intro bar,
// drifting diagonal text behind the hero, "back"-eased slide-ins and staggered
// scroll reveals. Everything is skipped when the visitor prefers reduced motion.
//
// The HTML is fully visible without JS. An inline script in BaseLayout adds
// `anim-pending` to <html> to hide above-the-fold elements until GSAP takes
// over, and removes it after a timeout if this module never runs.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const root = document.documentElement;
const $ = <T extends Element = HTMLElement>(sel: string) => document.querySelector<T>(sel);
const $$ = <T extends Element = HTMLElement>(sel: string) => gsap.utils.toArray<T>(sel);

function ready() {
  root.classList.remove('anim-pending');
  root.classList.add('anim-ready');
}

/** Scroll progress bar, like the portfolio's Scroller. Shown even with reduced motion. */
function progressBar() {
  const bar = $('.scroll-progress__bar');
  if (!bar) return;
  gsap.set(bar, { scaleX: 0, transformOrigin: 'left center' });
  ScrollTrigger.create({
    start: 0,
    end: 'max',
    onUpdate: (self) => gsap.set(bar, { scaleX: self.progress }),
  });
}

/** Black bar that scales in from the centre and flies up, once per browser session. */
function intro(): number {
  const el = $('.intro');
  if (!el) return 0;
  let seen = false;
  try {
    seen = sessionStorage.getItem('blog-intro') === '1';
    sessionStorage.setItem('blog-intro', '1');
  } catch {
    /* storage blocked: just play it */
  }
  if (seen) return 0;

  el.hidden = false;
  gsap
    .timeline({ onComplete: () => el.remove() })
    .fromTo(el, { scaleX: 0, opacity: 0 }, { scaleX: 1, opacity: 1, duration: 0.5, ease: 'power2.out' })
    .fromTo(el.querySelector('span'), { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4 }, '-=0.1')
    .to(el, { yPercent: -120, duration: 0.6, ease: 'power3.in', delay: 0.6 });
  return 1.6; // seconds until the page content should start animating
}

/** Slow diagonal drift of the background text lines (same motion as the portfolio hero). */
function marquee() {
  $$('.marquee p').forEach((line, i) => {
    gsap.to(line, { x: -1000, y: -1000, duration: 90 + i * 10, ease: 'none', repeat: -1 });
  });
}

/** Typewriter for the `cat ./README` prompt. */
function typewriter(delay: number) {
  const el = $('[data-type]');
  if (!el) return;
  const text = el.dataset.type ?? '';
  const state = { n: 0 };
  el.textContent = '';
  gsap.to(state, {
    n: text.length,
    duration: text.length * 0.05,
    delay,
    ease: 'none',
    onUpdate: () => (el.textContent = text.slice(0, Math.round(state.n))),
  });
}

function header() {
  if (!$('.site-header')) return;
  gsap.from('.site-header', { yPercent: -100, opacity: 0, duration: 0.6, ease: 'power2.out' });
}

/** Above-the-fold content: staggered rise-in. */
function heroIn(selector: string, delay = 0) {
  const items = $$(selector);
  if (!items.length) return;
  gsap.fromTo(
    items,
    { y: 40, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, ease: 'back.out(1.4)', stagger: 0.12, delay },
  );
}

/** Cards slide in from the left with the portfolio's "back" ease as they enter the viewport. */
function slideIn(selector: string, delay = 0) {
  if (!$(selector)) return;
  gsap.set(selector, { x: -120, opacity: 0 });
  ScrollTrigger.batch(selector, {
    start: 'top 85%',
    once: true,
    onEnter: (batch) =>
      gsap.to(batch, { x: 0, opacity: 1, duration: 1, ease: 'back.out(1.6)', stagger: 0.15, delay, overwrite: true }),
  });
}

/** Long-form content: gentle fade-up as each block scrolls into view. */
function reveal(selector: string) {
  if (!$(selector)) return;
  gsap.set(selector, { y: 30, opacity: 0 });
  ScrollTrigger.batch(selector, {
    start: 'top 90%',
    once: true,
    onEnter: (batch) =>
      gsap.to(batch, { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out', stagger: 0.08, overwrite: true }),
  });
}

/** One-off entrance for a single element, skipped when the page doesn't have it. */
function enter(selector: string, from: gsap.TweenVars, delay: number) {
  if (!$(selector)) return;
  gsap.fromTo(selector, from, { x: 0, y: 0, scale: 1, opacity: 1, duration: 0.9, ease: 'back.out(1.4)', delay });
}

function run() {
  progressBar();

  const mm = gsap.matchMedia();
  mm.add('(prefers-reduced-motion: no-preference)', () => {
    const wait = intro();
    marquee();
    header();
    typewriter(wait + 0.3);

    // Home
    heroIn('.hero-inner > *', wait);
    slideIn('.cards > li', wait ? wait + 0.3 : 0);

    // Section listing
    heroIn('.listing .head, .listing .count');
    slideIn('.posts > li, .listing .empty');

    // Post
    heroIn('.post-header > *');
    enter('.cover', { scale: 0.94, opacity: 0 }, 0.3);
    enter('.toc', { x: 60, opacity: 0 }, 0.5);
    reveal('.prose > *, .post-footer');

    // 404
    heroIn('.wrap > *');

    ready();
  });

  // Reduced motion: nothing animates, just show everything.
  mm.add('(prefers-reduced-motion: reduce)', ready);
}

run();
