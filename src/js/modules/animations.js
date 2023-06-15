import  gsap  from "gsap";
import fullpage from "fullpage.js";
import SplitType from 'split-type'

export function initAnimations() {
    // Hero Section

    let tl1 = gsap.timeline();
    tl1.to(".preloader", { duration: 1, delay: .5, xPercent: 100, })
       .from(".hero_title span", { duration: 2, x: 100, delay: 1, opacity: 0, ease: "expo", stagger: 0.25, }, '<-1')
       .from(".hero_phone", { duration: 3, delay: 1, opacity: 0 }, '<-.5')
       .from(".nav_menu", { duration: 2, y: -10, opacity: 0, ease: "expo", }, '<.5')
       .from(".book_a_demo", { duration: 2, x: 10, opacity: 0, ease: "expo", }, '<.25')
       .from(".hero_scroll", { duration: 2, y: 10, opacity: 0, ease: "expo", }, '<.25');


    const fullPageInstance = new fullpage("#fullpage", {
        licenseKey: 'gplv3-license',
        anchors:['01', '02', '03', '04'],
        scrollOverflow: true,
        menu: '.nav_menu',
        afterLoad: function(anchorLink, index) {
            history.pushState(null, null, " ");
        },
        onLeave: function(index, nextIndex, direction) {
            let section =  document.getElementById(nextIndex.item.id);

            if(nextIndex.anchor == '01'){
                let tl = gsap.timeline();
                tl.from(".hero_title span", { duration: 2, x: 100, delay: 1, opacity: 0, ease: "expo", stagger: 0.25, }, '<-1');
                tl.from(".hero_phone", { duration: 3, delay: 1, opacity: 0 }, '<-.5')
            }
            else if(nextIndex.anchor == '03'){
                let tl = gsap.timeline();
                tl.from("#getresults h2", { duration: 2, x: 100, delay: .5, opacity: 0, ease: "expo", });
                tl.from("#getresults .aStats", { duration: 1, opacity: 0, scale: 1.5, stagger: 0.25 }, '<-.5');
            } 
            else if(nextIndex.anchor == '04') {
                let tl = gsap.timeline();
                tl.from("#whysms h2", { duration: 2, x: 100, delay: .5, opacity: 0, ease: "expo", });
                tl.from("#whysms .aBox", { duration: 1, opacity: 0, scale: 1.5, stagger: 0.25 }, '<-.5');
                let splitText = new SplitType(".whysms_text_back", {type:"chars"});
                let chars = splitText.chars;
                tl.from(chars, {duration: 1, opacity:0, x:-200, rotation:-20,  ease:"back", stagger: 0.1}, "-=2");
            }
        }
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
}