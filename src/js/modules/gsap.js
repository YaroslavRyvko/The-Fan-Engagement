import { gsap } from "gsap";

export function initGsap() {
    let tl1 = gsap.timeline();
    tl1.to(".preloader", { duration: 1, delay: .5, xPercent: 100, })
       .from(".hero_title span", { duration: 2, x: 100, delay: 1, opacity: 0, ease: "expo", stagger: 0.25, }, '<-1')
       .from(".hero_phone", { duration: 3, delay: 1, opacity: 0 }, '<-.5')
       .from(".nav_menu", { duration: 2, y: -10, opacity: 0, ease: "expo", }, '<.5')
       .from(".book_a_demo", { duration: 2, x: 10, opacity: 0, ease: "expo", }, '<.25')
       .from(".hero_scroll", { duration: 2, y: 10, opacity: 0, ease: "expo", }, '<.25');
}