import gsap from "gsap";
import SplitType from 'split-type'

export function initAnimations() {
    const demo = document.querySelector('.book_a_demo');
    const header = document.querySelector('.header');
    const tl1 = gsap.timeline();
    tl1.to(".preloader", { duration: 1, delay: .5, xPercent: 100, })
        .from(".hero_title span", { duration: 2, x: 100, delay: 1, opacity: 0, ease: "expo", stagger: 0.25, }, '<-1')
        .from(".hero_phone", { duration: 3, delay: 1, opacity: 0 }, '<-.5')
        .from(".nav_menu", { duration: 2, y: -10, opacity: 0, ease: "expo", }, '<.5')
        .from(".book_a_demo", { duration: 2, x: 10, opacity: 0, ease: "expo", }, '<.25')
        .from(".hero_scroll", { duration: 2, y: 10, opacity: 0, ease: "expo", }, '<.25');


    installMediaQueryWatcher("(min-width: 767px)", function (matches) {
        const fullPageInstance = new fullpage("#fullpage", {
            licenseKey: 'gplv3-license',
            scrollOverflow: true,
            autoScrolling: true,
            verticalCentered: false,
            responsiveWidth: 767,
            menu: '.nav_menu',
            anchors: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
            normalScrollElements: 'footer',
            scrollHorizontally: true,
            slidesNavigation: false,
            afterLoad: function (anchorLink, index) {
                history.pushState(null, null, " ");
            },
            onLeave: function (index, nextIndex, direction) {

                if (nextIndex.anchor === '01') { // Hero

                    if (matches) {
                        const tl = gsap.timeline();
                        tl.from(".hero_title span", { duration: 2, x: 100, delay: 1, opacity: 0, ease: "expo", stagger: 0.25, }, '<-1');
                        tl.from(".hero_phone", { duration: 3, delay: 1, opacity: 0 }, '<-.5')
                    }
                    demo.classList.remove('hidden');
                    header.classList.remove('sticky');

                }
                else if (nextIndex.anchor === '02') { // What is it

                    if (matches) {
                        const tl1 = gsap.timeline();
                        tl1.from("#whatisit h2", { duration: 2, x: 100, delay: .5, opacity: 0, ease: "expo", });

                        //Slide #1
                        tl1.from(".foam", { duration: 2, x: -100, delay: .5, opacity: 0, ease: "expo", }, '<-.5');
                        tl1.from(".iphone", { duration: 2, x: 100, delay: .5, opacity: 0, ease: "expo", }, '<-.5');
                        const splitText1 = new SplitType("#whatisit_slide1 .slider_text", { type: "words,chars" });
                        const chars1 = splitText1.chars;
                        tl1.from(chars1, { duration: 0.8, opacity: 0, x: -25, ease: "back", stagger: 0.01 }, "-=2");
                        const splitText2 = new SplitType("#whatisit_slide1 .slider_text_back", { type: "chars" });
                        const chars2 = splitText2.chars;
                        tl1.from(chars2, { duration: 1, opacity: 0, x: -200, rotation: -20, ease: "back", stagger: 0.1 }, "-=2");

                        //Slide #3 
                        const tl2 = gsap.timeline();
                        tl2.from(".casquette", { duration: 2, x: -100, delay: .5, opacity: 0, ease: "expo", }, '<-.5');
                        const splitText3 = new SplitType("#whatisit_slide3 .slider_text", { type: "words,chars" });
                        const chars3 = splitText1.chars;
                        tl2.from(chars3, { duration: 0.8, opacity: 0, x: -25, ease: "back", stagger: 0.01 }, "-=2");
                        const splitText4 = new SplitType("#whatisit_slide3 .slider_text_back", { type: "chars" });
                        const chars4 = splitText4.chars;
                        tl2.from(chars4, { duration: 1, opacity: 0, x: -200, rotation: -20, ease: "back", stagger: 0.1 }, "-=2");
                    }
                    demo.classList.remove('hidden');
                    header.classList.add('sticky');
                }
                else if (nextIndex.anchor === '03') { // Get Results

                    if (matches) {
                        const tl = gsap.timeline();
                        tl.from("#getresults h2", { duration: 2, x: 100, delay: .5, opacity: 0, ease: "expo", });
                        tl.from("#getresults .aStats", { duration: 1, opacity: 0, scale: 1.5, stagger: 0.25 }, '<-.5');
                    }
                    demo.classList.remove('hidden');
                }
                else if (nextIndex.anchor === '04') { // Why SMS
                    if (matches) {
                        const tl = gsap.timeline();
                        tl.from("#whysms h2", { duration: 2, x: 100, delay: .5, opacity: 0, ease: "expo", });
                        tl.from("#whysms .aBox", { duration: 1, opacity: 0, scale: 1.5, stagger: 0.25 }, '<-.5');
                        const splitText = new SplitType(".whysms_text_back", { type: "chars" });
                        const chars = splitText.chars;
                        tl.from(chars, { duration: 1, opacity: 0, x: -200, rotation: -20, ease: "back", stagger: 0.1 }, "-=2");
                    }
                    demo.classList.remove('hidden');
                }
                else if (nextIndex.anchor === '05') { // Bring the action #1
                    if (matches) {
                        const tl = gsap.timeline();
                        tl.from("#bringtheaction1 h2", { duration: 2, x: 100, delay: .5, opacity: 0, ease: "expo", });
                        tl.from("#bringtheaction1 h3", { duration: 2, x: -100, opacity: 0, ease: "expo", }, "-=2");
                        tl.from("#bringtheaction1 p", { duration: 2, x: -100, opacity: 0, ease: "expo", }, "-=1.5");
                        tl.from("#bringtheaction1 .overlay_img2", { duration: 2, y: 100, opacity: 0, ease: "back", }, "-=3");
                        const splitText = new SplitType("#bringtheaction1 .movin_text_back", { type: "words,chars" });
                        const chars = splitText.chars;
                        tl.from(chars, { duration: 1, opacity: 0, x: -200, rotation: -20, ease: "back", stagger: 0.1 }, "-=6");
                    }
                    document.querySelector('[data-menuanchor="05"]').classList.remove('aActive');
                    demo.classList.remove('hidden');
                }
                else if (nextIndex.anchor === '06') { // Bring the action #2
                    if (matches) {
                        const tl = gsap.timeline();
                        tl.from("#bringtheaction2 h2", { duration: 2, x: 100, delay: .5, opacity: 0, ease: "expo", });
                        tl.from("#bringtheaction2 h3", { duration: 2, x: -100, opacity: 0, ease: "expo", }, "-=2");
                        tl.from("#bringtheaction2 p", { duration: 2, x: -100, opacity: 0, ease: "expo", }, "-=1.5");
                        tl.from("#bringtheaction2 .overlay_img2", { duration: 2, y: 100, opacity: 0, ease: "back", }, "-=3");
                        const splitText = new SplitType("#bringtheaction2 .movin_text_back", { type: "words,chars" });
                        const chars = splitText.chars;
                        tl.from(chars, { duration: 1, opacity: 0, x: -200, rotation: -20, ease: "back", stagger: 0.1 }, "-=6");
                    }
                    document.querySelector('[data-menuanchor="05"]').classList.add('aActive');
                    demo.classList.remove('hidden');
                }
                else if (nextIndex.anchor === '07') { // Bring the action #3
                    if (matches) {
                        const tl = gsap.timeline();
                        tl.from("#bringtheaction3 h2", { duration: 2, x: 100, delay: .5, opacity: 0, ease: "expo", });
                        tl.from("#bringtheaction3 h3", { duration: 2, x: -100, opacity: 0, ease: "expo", }, "-=2");
                        tl.from("#bringtheaction3 p", { duration: 2, x: -100, opacity: 0, ease: "expo", }, "-=1.5");
                        tl.from("#bringtheaction3 .overlay_img2", { duration: 2, y: 100, opacity: 0, ease: "back", }, "-=3");
                        const splitText = new SplitType("#bringtheaction3 .movin_text_back", { type: "words,chars" });
                        const chars = splitText.chars;
                        tl.from(chars, { duration: 1, opacity: 0, x: -200, rotation: -20, ease: "back", stagger: 0.1 }, "-=6");
                    }
                    document.querySelector('[data-menuanchor="05"]').classList.add('aActive');
                    demo.classList.remove('hidden');
                }
                else if (nextIndex.anchor === '08') { // Work
                    if (matches) {
                        const tl = gsap.timeline();
                        tl.from("#work h2", { duration: 2, x: 100, delay: .5, opacity: 0, ease: "expo", });
                        tl.from("#work .overlay_img", { duration: 3, opacity: 0 }, '<-.5')
                        tl.from("#work h3", { duration: 2, x: -100, opacity: 0, ease: "expo", }, "-=2");
                        tl.from("#work p", { duration: 2, x: -100, opacity: 0, ease: "expo", }, "-=1.5");
                        tl.from("#work .btn-blue", { duration: 2, y: -100, opacity: 0, ease: "expo", }, "-=2");
                        const splitText = new SplitType("#work .light_bg_text_top", { type: "words,chars" });
                        const chars = splitText.chars;
                        tl.from(chars, { duration: 1, opacity: 0, x: -200, rotation: -20, ease: "back", stagger: 0.1 }, "-=4");
                        const splitText2 = new SplitType("#work .light_bg_text_bottom", { type: "words,chars" });
                        const chars2 = splitText2.chars;
                        tl.from(chars2, { duration: 1, opacity: 0, x: 200, rotation: 20, ease: "back", stagger: 0.1 }, "-=4");
                    }
                    document.querySelector('[data-menuanchor="05"]').classList.remove('aActive');
                    demo.classList.remove('hidden');
                }
                else if (nextIndex.anchor === '09' && direction == 'down') { // Contact
                    if (matches) {
                        const tl = gsap.timeline();
                        tl.from("#contact h2", { duration: 2, x: 100, delay: .5, opacity: 0, ease: "expo" });
                        tl.from("#contact h4", { duration: 2, x: -100, opacity: 0, ease: "expo", stagger: 0.25 }, "-=2");
                        tl.from("#contact .aField", { duration: 2, x: 50, opacity: 0, ease: "expo", stagger: 0.25 }, "-=2");
                        tl.from("#contact button", { duration: 2, y: 50, opacity: 0, ease: "expo", stagger: 0.25 }, "-=2");
                    }
                    demo.classList.add('hidden');
                }
            },
            onSlideLeave: function (section, origin, destination, direction) {

                const slideID = destination.item.id;

                if (slideID === 'whatisit_slide1') {
                    if (matches) {
                        const tl = gsap.timeline();
                        tl.from("#" + slideID + " .foam", { duration: 2, x: -100, delay: 1, opacity: 0, ease: "expo", }, '<-.5');
                        tl.from("#" + slideID + " .iphone", { duration: 2, x: 100, delay: 1, opacity: 0, ease: "expo", }, '<-.5');
                        const splitText1 = new SplitType("#" + slideID + " .slider_text", { type: "words,chars" });
                        const chars1 = splitText1.chars;
                        tl.from(chars1, { duration: 0.8, opacity: 0, x: -25, ease: "back", stagger: 0.01 }, "-=2");
                        const splitText2 = new SplitType("#" + slideID + " .slider_text_back", { type: "chars" });
                        const chars2 = splitText2.chars;
                        tl.from(chars2, { duration: 1, opacity: 0, x: -200, rotation: -20, ease: "back", stagger: 0.1 }, "-=2");
                    }
                    updatePagination(0);


                } else if (slideID === 'whatisit_slide2') {
                    if (matches) {
                        const tl = gsap.timeline();
                        tl.from("#" + slideID + " .carres", { duration: 2, x: -100, delay: 1, opacity: 0, ease: "expo", }, '<-.5');
                        const splitText1 = new SplitType("#" + slideID + " .slider_text", { type: "words,chars" });
                        const chars1 = splitText1.chars;
                        tl.from(chars1, { duration: 0.8, opacity: 0, x: -25, ease: "back", stagger: 0.01 }, "-=2");
                        const splitText2 = new SplitType("#" + slideID + " .slider_text_back", { type: "chars" });
                        const chars2 = splitText2.chars;
                        tl.from(chars2, { duration: 1, opacity: 0, x: -200, rotation: -20, ease: "back", stagger: 0.1 }, "-=2");
                    }
                    updatePagination(1);

                } else if (slideID === 'whatisit_slide3') {
                    if (matches) {
                        const tl = gsap.timeline();
                        tl.from("#" + slideID + " .casquette", { duration: 2, x: -100, delay: 1, opacity: 0, ease: "expo", }, '<-.5');
                        const splitText1 = new SplitType("#" + slideID + " .slider_text", { type: "words,chars" });
                        const chars1 = splitText1.chars;
                        tl.from(chars1, { duration: 0.8, opacity: 0, x: -25, ease: "back", stagger: 0.01 }, "-=2");
                        const splitText2 = new SplitType("#" + slideID + " .slider_text_back", { type: "chars" });
                        const chars2 = splitText2.chars;
                        tl.from(chars2, { duration: 1, opacity: 0, x: -200, rotation: -20, ease: "back", stagger: 0.1 }, "-=2");
                    }
                    updatePagination(2);
                }

            },
            afterSlideLoad: function (section, origin, destination, direction) {
                history.pushState(null, null, " ");
            },
        });
    });

    // Float functions

    const randomX = random(1, 10);
    const randomY = random(1, 10);
    const randomDelay = random(0, 1);
    const randomTime = random(3, 5);
    const randomTime2 = random(5, 10);
    const randomAngle = random(-10, 10);
    const cans = gsap.utils.toArray('.float');

    cans.forEach(can => {
        gsap.set(can, {
            x: randomX(-1),
            y: randomX(1),
            rotation: randomAngle(-1)
        });

        moveX(can, 1);
        moveY(can, -1);
        rotate(can, 1);
    });

    function rotate(target, direction) {
        gsap.to(target, randomTime2(), {
            rotation: randomAngle(direction),
            delay: randomDelay(),
            ease: "sine.easeInOut",
            onComplete: rotate,
            onCompleteParams: [target, direction * -1]
        });
    }

    function moveX(target, direction) {
        gsap.to(target, randomTime(), {
            x: randomX(direction),
            ease: "sine.easeInOut",
            onComplete: moveX,
            onCompleteParams: [target, direction * -1]
        });
    }

    function moveY(target, direction) {
        gsap.to(target, randomTime(), {
            y: randomY(direction),
            ease: "sine.easeInOut",
            onComplete: moveY,
            onCompleteParams: [target, direction * -1]
        });
    }

    function random(min, max) {
        const delta = max - min;
        return (direction = 1) => (min + delta * Math.random()) * direction;
    }

    function updatePagination(num) {
        let pagination = document.querySelectorAll('.num_content');
        pagination.forEach((e) => {
            e.classList.remove('active')
        })
        pagination[num].classList.add('active');
    }


    //Header Menu

    const burger = document.querySelector('.burger');
    const nav_menu = document.querySelector('.nav_menu');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        nav_menu.classList.toggle('active');
    })

    const links = document.querySelectorAll('.nav_menu li');
    links.forEach(el=>{
        el.addEventListener('click',()=>{
            burger.classList.remove('active');
            nav_menu.classList.remove('active');
            header.classList.add('sticky');
        })
    })

    //  Media Watcher
    function installMediaQueryWatcher(mediaQuery, layoutChangedCallback) {
        var mql = window.matchMedia(mediaQuery);
        mql.addListener(function (e) { return layoutChangedCallback(e.matches); });
        layoutChangedCallback(mql.matches);
    }

    // Remove Banner
    setTimeout(
        function(){
            document.querySelector('body > div > a').parentElement.style.display = "none";
        }, 10
    )
}