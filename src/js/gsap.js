import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const ST = ScrollTrigger;
gsap.registerPlugin(ScrollTrigger);


// Navbar
const mainNavbar = document.querySelector('.main-navbar')
const mainNavbarSwissLogo = document.querySelector('.main-navbar_swis_logo')
const mainNavbarSwissLogoLg = document.querySelector('.main-navbar_swis_logo_lg')
const mainNavbarSwissLogoSm = document.querySelector('.main-navbar_swis_logo_sm')
const mainNavbarMainLogo = document.querySelector('.main-navbar_main_logo')
const mainNavbarMainLogoLg = document.querySelector('.main-navbar_main_logo_lg')
const mainNavbarMainLogoSm = document.querySelector('.main-navbar_main_logo_sm')
const mainNavbarBurger = document.querySelector('.main-navbar_burger')
const mainNavbarBurgerIcon = document.querySelector('.main-navbar_burger_icon')
// Cover
const imageCoverSection = document.querySelector('.images-cover-section')
const imageCoverSectionImages = document.querySelector('.images-cover-section_images')
const coverImages = document.querySelectorAll('.cover-images')
const coverImageCenter = document.querySelector('.cover-image-center')
const imageCoverSectionTextBlock1 = document.querySelector('.images-cover-section_text_block_1')
const imageCoverSectionTextBlock1Child = document.querySelectorAll('.images-cover-section_text_block_1_child')
const imageCoverSectionTextBlock2 = document.querySelector('.images-cover-section_text_block_2')
const imageCoverSectionTextBlock2Child = document.querySelectorAll('.images-cover-section_text_block_2_child')

const three1Cans = document.querySelector('.three-cans')
const can1One = document.querySelectorAll('.can-1')
const can1Two = document.querySelectorAll('.can-2')
const can1Three = document.querySelectorAll('.can-3')
const three1CansText = document.querySelectorAll('.three-1-cans-text')
const classicPath = document.querySelectorAll('.classic-path')
const blueTitle = document.querySelectorAll('.blue-title')
const blueInfo = document.querySelectorAll('.blue-info')
const loveEdition = document.querySelectorAll('.love-edition-path')
const redTitle = document.querySelectorAll('.red-title')
const redInfo = document.querySelectorAll('.red-info')
const goldenPath = document.querySelectorAll('.gold-path')
const goldenTitle = document.querySelectorAll('.golden-title')
const goldenInfo = document.querySelectorAll('.golden-info')
// DoMoreSection
const whyBuffalloSection = document.querySelector('.why-buffalo-section')
const whyBuffalloTitle = document.querySelector('.why-buffalo-title')
const whyBuffalloBoxes = document.querySelector('.why-buffalo-boxes')
const doMoreSection = document.querySelector('.do-more-section')
const doMoreTwoCans = document.querySelector('.do-more-two-cans')
const doMoreTextText = document.querySelectorAll('.do-more-text-text')
const bigDoMore = document.querySelector('.big-do-more')
const doMoreList = document.querySelector('.do-more-list')
const lastDoMoreList = document.querySelector('.last-do-more-list')




// const textBlock1 =  gsap.timeline({ paused:true }).fromTo(imageCoverSectionTextBlock1Child, 1, { y:100, opacity:0 }, { y:0, opacity:1, duration:0.5, stagger:0.3},)

  let matchMedia = gsap.matchMedia()

  matchMedia.add({
    isLaptop: "(min-width: 1150px) and (max-width: 1550px)",
    isDesktop: "(min-width: 1551px)",
  }, (context) => {

    let { isLaptop, isDesktop } = context.conditions;


    // Animated Cover
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: imageCoverSection,
        start: "top top",
        end: '+=2000 bottom',
        endTrigger: imageCoverSectionTextBlock2Child,
        scrub: 1,
        pin: true,

      }
    });

    tl1.from(imageCoverSectionTextBlock1Child, 3, { y:200, autoAlpha:1, stagger:0.3}, 'one')
    .to(imageCoverSectionTextBlock1Child, 10, { y:-300, autoAlpha:0, stagger:0.3}, 'two')

    .from(coverImages, 5, { y:100, autoAlpha:1, stagger:1}, 'one')
    .from(coverImageCenter, 5, { y:100, autoAlpha:1}, 'one')
    .to(coverImages, 5, { y:-100, autoAlpha:1, stagger:1}, 'two')
    .to(coverImageCenter, 15, { y:-300, autoAlpha:1}, 'three-=5')

    .fromTo(imageCoverSectionTextBlock2Child, 10, { y:300, autoAlpha:0}, { y:100, autoAlpha:1, stagger:0.3}, 'three-=1')

    // Animated Three1Cans
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: three1Cans,
        start: "center center",
        end: '+=2000 bottom',
        scrub: 1,
        pin: true
      }
    });

    gsap.set('goldenInfo', {opacity: 0, y: '300%'})

    tl2.fromTo(can1One, 1, { x:0, y: 0, rotation:0 }, { x: '-50%', y: '-100%', rotation:25, transformOrigin:"top 100%" }, 'one-in' )
    .fromTo(can1Two, 1, { y:0 }, { y: '-80%' }, 'one-in' )
    .fromTo(can1Three, 1, { x:0, y: 0, rotation:0 }, { x: '50%', y: '-100%', rotation:-25, transformOrigin:"top 10%" }, 'one-in' )
    .fromTo(three1CansText, 1, { scale:0, autoAlpha: 0 }, { scale: 1 , autoAlpha: 1}, 'one-in')

    .fromTo(can1One, 2,
      { x: '-50%', y: '-100%', rotation:25, transformOrigin:"top 100%" },
      { x: '-550%' },
      'one-out+=1')
    .fromTo(can1Three, 2,
      { x: '50%', y: '-100%', rotation:-25, transformOrigin:"top 10%" },
      { x: '550%' },
      'one-out+=1')
    .fromTo(three1CansText, 1,
      { scale:1, autoAlpha: 1 },
      { scale: 0, autoAlpha: 0 },
      'one-out+=1' )
    .fromTo(can1Two, 1,
      { y: '-80%', x: 0, rotation:0 },
      { y: isLaptop ? '-46%' : '-35%' , x: isLaptop ? '22%' : '10%', rotation:40, transformOrigin:"12% 12%" },
      'one-out+=1')

    .fromTo(classicPath, 2, { x:2500 }, { x: 0 }, 'classic-in-=3')
    .fromTo(blueTitle, 2, { x:1500, y: 1500, opacity: 0 }, { x: 0, y: 0, opacity: 1 }, 'classic-in-=3')
    .fromTo(blueTitle, 1, { scale: 1 }, { scale: 0.9 }, 'classic-info-in')
    .fromTo(blueInfo, 1, { y: 500, opacity: 0 }, { y: 0, opacity: 1 }, 'classic-info-in-=0.3')

    .fromTo(can1Two, 3,
      { y: '-46%', x: '22%', rotation:40, transformOrigin:"12% 12%" },
      { y: '-346%', x: '422%' },
      'classic-out')
    .fromTo(classicPath, 2, { x:0 }, { x: 2500 }, 'classic-out')
    .fromTo(can1Three, 1,
      { y:0, x: '422%', rotation:0, scale:1  },
      { y: '-46%', x: '22%', scale: 1.7, rotation:33, transformOrigin:"120% 60%" },
      'love-in-=3')

    .fromTo(loveEdition, 1, { x:-2500 }, { x: 0 }, 'love-in-=3')
    .fromTo(redTitle, 1.4, { x:-2500 }, { x: 0 }, 'love-in-=3')
    .fromTo(loveEdition, 1, { x:0 }, { x: '45%' }, 'love-in-right')
    .fromTo(redTitle, 1, { x:0, scale: 1 }, { x: '-78%', scale: 0.8 }, 'love-in-right')
    .fromTo(can1Three, 1,
      { y: '-46%', x: '22%', scale: 1.7, rotation:33, transformOrigin:"120% 60%"  },
      { x: '-180%'},
      'love-in-right')
    .fromTo(redInfo, 1, { y: 500, opacity: 0 }, { y: 0, x: '-67.5%', opacity: 1 }, 'love-in-right+=0.7')

    .fromTo(loveEdition, 3, { x: '45%', }, { x: '200%', y: '-200%' }, 'love-out+=1')
    .fromTo(can1Three, 2, { x: '-180%' }, { x: '200%', y: '-200%' }, 'love-out+=1')

    .fromTo(goldenPath, 1, { x: '200%' }, { x: 0 }, 'golden-in-=2.8')
    .fromTo(goldenTitle, 1, { x: '-400%' }, { x: 0 }, 'golden-in-=2.8')
    .fromTo(can1One, 1, { x: '-550%' }, { x: '120%', y: isLaptop ? '-65%' : '-55%' , rotation:0, scale: 1.1 }, 'golden-in-=2.5')

    .fromTo(goldenPath, 1, { x: 0 }, { x: 0, height: '100%' }, 'golden-in-full')
    .fromTo(can1One, 1,
      { x: '120%', y: isLaptop ? '-65%' : '-55%' , rotation:0, scale: 1.1 },
      { y: isLaptop ? '-150%' : '-35%' , x: isLaptop ? '60%' : '60%', rotation:20, transformOrigin:"0% 0%", scale: 1.7 },
      'golden-in-full')
    .fromTo(goldenTitle, 1, { x: 0, scale: 1 }, { x: '23%', y: '180%', scale: 0.7 }, 'golden-in-full')
    .fromTo(goldenInfo, 1, { y: '300%', opacity: 0 }, { x: '-33%', y: '130%', opacity: 1 }, 'golden-in')


    // Why Buffalo Timeline
    // const tl3 = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: whyBuffalloSection,
    //     start: "top top+=20%",
    //     end: 'center center',
    //     scrub: 1
    //   }
    // });

    // tl3.to(whyBuffalloTitle, 0.5, { scale: 0.8, opacity: 0.6 } )
    // .to(whyBuffalloBoxes, 0.5, { scale: 0.8, opacity: 0.6 } )


    // const tl4 = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: doMoreSection,
    //     start: "center center",
    //     end: '+=1000',
    //     endTrigger: doMoreSection,
    //     scrub: bigDoMore,
    //     pin: true
    //   }
    // });


    // tl4.fromTo(doMoreTextText, 1, {y: 500, opacity: 0}, { y: 0, opacity: 1 }, "text-in-=1" )
    // .fromTo(doMoreTextText, 1, {y: 0, opacity: 1}, { y: -1500, opacity: 0 }, "text-out+=0.1" )
    // .fromTo(doMoreTwoCans, 1, {y: 0, opacity: 1}, { y: -1500, opacity: 0 }, "do-more-in" )
    // .fromTo(bigDoMore, 1, {x: 0, y: 500, opacity: 0}, {x: 0,  y: 0, opacity: 1 }, "do-more-in-=1" )
    // .fromTo(bigDoMore, 1, {x: 0, scale: 1}, { x:-290, scale: 0.35}, "do-more-in" )
    // .fromTo(doMoreList, 1, {y: 500, x: 200, opacity: 0}, { y: 300, x: 200, opacity: 1 }, "do-more-list-=1" )


    // const tl5 = gsap.timeline({
    //     ScrollTrigger: {
    //     trigger: bigDoMore,
    //     start: "center center",
    //     end: '+=1150',
    //     endTrigger: lastDoMoreList,
    //     markers: true,
    //     pin: true,
    //     scrub: 1
    //   }
    // });

    // tl5.fromTo(bigDoMore, 1, {x: 0, scale: 1}, { x:-290, scale: 0.35}, "do-more-in" )

  // Why Buffalo Timeline
const tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: whyBuffalloSection,
    start: "top top+=20%",
    end: "center center",
    scrub: 1
  }
});

tl4
  .to(whyBuffalloTitle, 0.5, { scale: 0.8, opacity: 0.6 })
  .to(whyBuffalloBoxes, 0.5, { scale: 0.8, opacity: 0.6 });

const tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: doMoreSection,
    start: "center center",
    end: "+=1000",
    endTrigger: doMoreSection,
    scrub: bigDoMore,
    pin: true,
    markers: true
  }
});

tl5.fromTo( doMoreTextText, 1, { y: 500, opacity: 0 }, { y: 0, opacity: 1 }, "text-in-=1")
  .fromTo( doMoreTextText, 1, { y: 0, opacity: 1 }, { y: -1500, opacity: 0 }, "text-out+=0.1")
  .fromTo( doMoreTwoCans, 1, { y: 0, opacity: 1 }, { y: -1500, opacity: 0 }, "do-more-in")
  .fromTo( bigDoMore, 1, { x: 0, y: 500, opacity: 0 }, { x: 0, y: 0, opacity: 1 }, "do-more-in-=1")
  .fromTo( bigDoMore, 1, { x: 0, scale: 1 }, { x: -290, scale: 0.35 }, "do-more-in")
  .fromTo( doMoreList, 1, { y: 500, x: 200, opacity: 0 }, { y: 300, x: 200, opacity: 1 }, "do-more-list-=1")

  .to(".do-more-list", { duration: 3, yPercent: -200, ease: 'none' })
  .to(".do-more-list li", {
    keyframes: {
      color: ['red', 'white'],
    },
    duration: 0.2,
    stagger: {
      amount: 3
    }
  }, '<');








  })









  // ======== Commented ========

// gsap.utils.toArray('.section').forEach(section => {

//     const lines = section.querySelectorAll('h1');

//     const move =  gsap.timeline({paused:true}).to(lines, {x:25, color:'green', duration:0.5, stagger:0.3})


//   })
