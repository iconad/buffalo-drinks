import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const ST = ScrollTrigger;
gsap.registerPlugin(ScrollTrigger);


// Navbar
const userNameSection = document.querySelector('.username-section')
const bodytag = document.querySelector('.bodytag')
const userName = document.querySelector('#userName')
const mainNavbar = document.querySelector('.main-navbar')
const mainNavbarSwissLogo = document.querySelector('.main-navbar_swis_logo')
const mainNavbarSwissLogoLg = document.querySelector('.main-navbar_swis_logo_lg')
const mainNavbarSwissLogoSm = document.querySelector('.main-navbar_swis_logo_sm')
const mainNavbarMainLogo = document.querySelector('.main-navbar_main_logo')
const mainNavbarMainLogoLg = document.querySelector('.main-navbar_main_logo_lg')
const mainNavbarMainLogoSm = document.querySelector('.main-navbar_main_logo_sm')
const mainNavbarBurger = document.querySelector('.main-navbar_burger')
const mainNavbarBurgerIcon = document.querySelector('.main-navbar_burger_icon')
const loginWrapper = document.querySelector('.login-wrapper')
const loginWrapperBlack = document.querySelector('.login-wrapper-black')
const loginLogo = document.querySelector('.login-logo')
const hideOnLogin = document.querySelectorAll('.hide-on-login')
const loginInput = document.querySelector('#loginInput')
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
const can1One = document.querySelector('.can-1')
const can1Two = document.querySelector('.can-2')
const can1Three = document.querySelector('.can-3')
const clipPaths = document.querySelector('.clip-paths')
const classicCan = document.querySelector('.classic-can')
const loveEditionCan = document.querySelector('.love-edition-can')
const goldenCan = document.querySelector('.golden-can')
const three1CansText = document.querySelectorAll('.three-1-cans-text')
const classicPath = document.querySelectorAll('.classic-path')
const blueTitle = document.querySelectorAll('.blue-title')
const blueInfo = document.querySelectorAll('.blue-info')
const loveEdition = document.querySelectorAll('.love-edition-path')
const redTitle = document.querySelectorAll('.red-title')
const redInfo = document.querySelectorAll('.red-info')
const goldenPath = document.querySelectorAll('.golden-path')
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

const moreByBuffalo = document.querySelector('.more-by-buffalo')
const moreByBuffaloTitle = document.querySelector('.more-by-buffalo-title')
const moreByBuffaloInfo = document.querySelector('.more-by-buffalo-info')
const colorfulBottles = document.querySelector('.colorful-bottles')
const bottlePath = document.querySelectorAll('.bottle-path')
const bottleContainer = document.querySelectorAll('.bottle-container')
const bePartFamily = document.querySelector('.be-part-family')
const events = document.querySelector('.events')
const joinTheMovement = document.querySelector('.join-the-movement')
const joinTheMovementOne = document.querySelector('.join-the-movement-one')
const joinTheMovementTwo = document.querySelector('.join-the-movement-two')
const joinTheMovementThree = document.querySelector('.join-the-movement-three')
const joinTheMovementInfo = document.querySelector('.join-the-movement-info')
const changeTheColorToBlack = document.querySelector('.change-the-color-to-black')



let matchMedia = gsap.matchMedia()

  matchMedia.add({
    isMobile: "(min-width: 200px) and (max-width: 640px)",
    isTab: "(min-width: 641px) and (max-width: 1024px)",
    isSmallLaptop: "(min-width: 1025px) and (max-width: 1279px)",
    isLaptop: "(min-width: 1280px) and (max-width: 1536px)",
    isDesktop: "(min-width: 1537px)",
  }, (context) => {

    let { isMobile, isTab, isSmallLaptop, isLaptop, isDesktop } = context.conditions;


    gsap.set(mainNavbarSwissLogoSm, { y: 30, opacity: 0, width: '0px' })


    if(!localStorage.getItem("username")) {

    gsap.set(userNameSection, {opacity: 0})
    gsap.set(mainNavbar, {zIndex: 111, backgroundColor: 'transparent'})
    gsap.set(loginWrapperBlack, {backgroundColor: "rgba(0, 0, 0, 0.4)" , opacity: 1 })
    gsap.set(mainNavbarMainLogo,
        {
            zIndex: 111,
            x: '-45px',
            y: isMobile ? '35vh' : isTab ? '35vh' : isDesktop ? '40vh' : '35vh',
            scale: 2
        })
    }else{
        gsap.set(hideOnLogin, {opacity: 0})
        gsap.to(userNameSection, 0.5, { opacity: 1 })
    }



    loginInput.addEventListener('keypress', function(e) {


        if(e.keyCode === 13){

            e.preventDefault();
            let loginInputValue = loginInput.value
            localStorage.setItem("username", loginInputValue);
            userName.innerHTML =  localStorage.getItem("username");
            gsap.to(userNameSection, 0.5, { opacity: 1 }).delay(0.8)

            const tl0 = gsap.timeline();
            tl0.to(hideOnLogin, 1, { opacity: 0 }, 'one')
            .to(mainNavbar, 1, { backgroundColor: "#333333" }, 'one')
            .to(loginWrapperBlack, 1, { backgroundColor: "rgba(51, 51, 51, 0)", scale: 10 }, 'one')
            .fromTo(mainNavbarMainLogo, 0.5,
            { zIndex: 111, x: '-45px', y: isMobile ? '35vh' : isTab ? '35vh' : isDesktop ? '40vh' : '35vh', scale: 2  },
            { zIndex: 1, x: '0%', y: '0%', scale: 1}, 'one')

        }

    })


    // Animated Navbar
    const tlNavbar = gsap.timeline({
        scrollTrigger: {
          trigger: can1One,
          start: "bottom bottom",
          scrub: 1,
        }
      });

    tlNavbar.to(mainNavbarMainLogo, 1, { paddingTop: '1rem', paddingBottom: '1rem' }, 'one')
        .to(mainNavbarSwissLogoLg, 0.5, { y: -10, opacity: 0 }, 'one')
        .to(mainNavbarSwissLogoSm, 1, { y: '-1vmin', opacity: 1, width: 'auto' }, 'one')



    // Animated Cover
    const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: imageCoverSection,
          start: "top top",
          end: isMobile ? '+=500 bottom' : '+=1000 bottom',
          endTrigger: imageCoverSectionTextBlock2Child,
          scrub: 1,
          pin: true,

        }
      });

    tl1.from(imageCoverSectionTextBlock1Child, 3,
    {
        y: isMobile ? 0 : isTab ? 0 : isSmallLaptop ? 200 : isLaptop ? 200 : 0, autoAlpha:1, stagger:0.3
    }, 'one')
    .to(imageCoverSectionTextBlock1Child, 10, { y:-300, autoAlpha:0, stagger:0.3}, 'two')

    .from(coverImages, 5, { y:100, autoAlpha:1, stagger:1}, 'one')
    .from(coverImages, 5, { y:100, autoAlpha:1, stagger:1}, 'one')
    .from(coverImageCenter, 5, { y:100, autoAlpha:1}, 'one')
    .to(coverImages, 5, { y:-100, autoAlpha:1, stagger:1}, 'two')
    .to(coverImageCenter, 15, { y:-300, autoAlpha:1}, 'three-=5')

    .fromTo(imageCoverSectionTextBlock2Child, 10,
    {
        y: 300, autoAlpha:0}, { y: isMobile ? 0 : isTab ? 0 : 100, autoAlpha:1, stagger:0.3
    }, 'three-=1')



    // Animated Three1Cans
    const tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: three1Cans,
            start: isMobile ? 'center center' : isTab ? 'center center+=250' : isLaptop ? 'center center+=160' : isDesktop ? 'center center' : 'center center',
            end: '+=3000',
            scrub: 1,
            pin: true,

        }
    });


    tl2.fromTo(can1One, 1,
        { x:0, y: 0, rotation:0 },
        { x: '-50%', y: '-100%', rotation:25, transformOrigin:"top 100%" }, 'one-in' )
      .fromTo(can1Two, 1,
        { y:0, scale: 1 },
        { y: '-80%', }, 'one-in' )
      .fromTo(can1Three, 1,
        { x:0, y: 0, rotation:0 },
        { x: '50%', y: '-100%', rotation:-25, transformOrigin:"top 10%" }, 'one-in' )
      .fromTo(three1CansText, 1, { scale:0, autoAlpha: 0 }, { scale: 1 , autoAlpha: 1}, 'one-in')

      .fromTo(can1One, 2,
        { x: '-50%', y: '-100%', rotation:25, transformOrigin:"top 100%" },
        { x: '-550%' },
        'one-out+=0.5')
      .fromTo(can1Three, 2,
        {
          x: '50%', y: '-100%', rotation:-25, transformOrigin:"top 10%" },
        { x: '550%', },
        'one-out+=0.5')
      .fromTo(three1CansText, 1,
        { scale:1, autoAlpha: 1 },
        { scale: 0, autoAlpha: 0 }, //translate(120%, -110%) rotate(40deg) scale(1.5)
        'one-out+=0.5' )
      .fromTo(can1Two, 1,
        { y: '-80%', x: 0, rotation:0 },
        {
          x: '0%',
          y: '-235%' ,
        },
        'one-out+=0.5')


        .fromTo(classicPath, 1, { x: 3000, opacity: 0 } , { x: 0, opacity: 1 }, 'classic-in-=2.2')
        .fromTo(classicCan, 1, { y: -3000, opacity: 0 } , { y: 0, opacity: 1 }, 'classic-in-=2.2')

        .fromTo(classicPath, 1, { x: 0, opacity: 0 } , { x: 3000, opacity: 1 }, 'classic-out+=1')
        .fromTo(classicCan, 1, { y: 0, opacity: 0 } , { y: -3000, opacity: 1 }, 'classic-out+=1')

        .fromTo(loveEdition, 1, { x: -3000, opacity: 0 } , { x: 0, opacity: 1 }, 'love-in-=1.2')
        .fromTo(loveEditionCan, 1, { y: -3000, opacity: 0 } , { y: 0, opacity: 1 }, 'love-in-=1.2')

        .fromTo(loveEdition, 1, { x: 0, opacity: 0 } , { x: -3000, opacity: 1 }, 'love-out+=1')
        .fromTo(loveEditionCan, 1, { y: 0, opacity: 0 } , { y: -3000, opacity: 1 }, 'love-out+=1')

        .fromTo(goldenPath, 1, { x: -3000 } , { x: 0 }, 'golden-in-=1.2')
        .fromTo(goldenCan, 1, { y: -3000 } , { y: 0 }, 'golden-in-=1.2')

        .fromTo(goldenPath, 1, { x: 0 } , { x: -3000 }, 'golden-out+=1')
        .fromTo(goldenCan, 1, { y: 0 } , { y: -3000 }, 'golden-out+=1')


   // Why Buffalo Timeline
    const tl4 = gsap.timeline({
        scrollTrigger: {
        trigger: whyBuffalloSection,
        start: "top center+=20%",
        end: "center center",
        scrub: 1
        }
    });

    tl4.to(whyBuffalloTitle, 0.5, { scale: 0.8, opacity: 0.6 })
        .to(whyBuffalloBoxes, 0.5, { scale: 0.8, opacity: 0.6 });

    const tl5 = gsap.timeline({
        scrollTrigger: {
        trigger: doMoreSection,
        start: 'center center',
        end: isMobile ? '+=100%' : '+=250%',
        endTrigger: doMoreSection,
        scrub: bigDoMore,
        pin: true,
        }
    });

    tl5.fromTo( doMoreTextText, 1, { y: 500, opacity: 0 }, { y: 0, opacity: 1 }, "text-in-=1")
        .fromTo( doMoreTextText, 1, { y: 0, opacity: 1 }, { y: -1500, opacity: 0 }, "text-out+=0.1")
        .fromTo( doMoreTwoCans, 1, { y: 0, opacity: 1 }, { y: -1500, opacity: 0 }, isMobile ? "text-in-=1" : "do-more-in")
        .fromTo( bigDoMore, 1, { x: 0, y: 500, opacity: 0 }, { x: 0, y: 0, opacity: 1 }, "do-more-in-=1")
        .fromTo( bigDoMore, 1, { x: 0, scale: 1 },
        {
            x: isMobile ? -100 : isTab ? -200 : -290,
            scale: isMobile ? 0.5 : isTab ? 0.25 : 0.35
        }, "do-more-in")
        .fromTo( doMoreList, 1, { y: 500, x: 200, opacity: 0 }, { y: 300, x: 200, opacity: 1 }, "do-more-list-=1")

        .to(".do-more-list",
        {
            duration: isMobile ? 2 : 3,
            yPercent: isMobile ? -60 : isTab ? -125 : isSmallLaptop ? -215 : isLaptop ? -215 : -168,
            ease: 'none'
        })
        .to(".do-more-list li", {

        keyframes: {
            color: ['white', '#6b7280'],
        },

        duration: isMobile ? 0.2 : isTab ? 0.3 : isSmallLaptop ? 0.3 : isLaptop ? 0.3 : 0.3,
        stagger: {
            amount: isMobile ? 1.7 : isTab ? 3 : isSmallLaptop ? 3.1 : isLaptop ? 3.1 : 3
        }

        }, '<');


    // More Buffalo Timeline
    const tl6 = gsap.timeline({
        scrollTrigger: {
          trigger: moreByBuffalo,
          start: "top top",
          end: "+=2000 center",
          scrub: 1,
          pin: colorfulBottles,
        }
      });

      tl6.fromTo(moreByBuffaloTitle, 3, { y: '0%', scale: 1, opacity: 1 }, { y: '-50%', scale: 0.7, opacity: 0.6 }, 'one')
        .fromTo(moreByBuffaloInfo, 3, { y: '0%', scale: 1, opacity: 1 }, { y: '-50%', scale: 0.7, opacity: 0.6 }, 'one')
        .fromTo(bottlePath, isMobile ? 0.5 : isTab ? 0.5 : 2, { x:'-100%' },
          {
            x: '0%',
            stagger:0.3
          }, 'two-=2')
        .fromTo(bottleContainer, isMobile ? 10 : isTab ? 10 : 5, { x:'-130%' },
          {
            x:'50%',
            stagger:0.3
          }, 'two-=2')
        .fromTo(bottlePath, 2, { x:'0%' },
          {
            x:'100%',
            stagger:0.3
          }, 'three-=2')

      gsap.set(changeTheColorToBlack, {backgroundColor: 'white'});

      // Join The movement
      const tl7 = gsap.timeline({
        scrollTrigger: {
          trigger: joinTheMovement,
          start: "center center",
          end: isMobile ? '+=500' : '+=1000',
          scrub: 1,
          pin: true,
          pinSpacer: false
        }
      });

      tl7.fromTo(joinTheMovement, 1, { scale: 0.8, opacity: 0}, { scale: 1, opacity: 1 })
      .fromTo(joinTheMovementOne, 1, { y: '0%', scale: 1}, { y: '-130%', scale: 0.8 }, 'one')
      .fromTo(joinTheMovementTwo, 1, { y: '200%', opacity: 0 }, { y: '0%', opacity: 1 }, 'one')
      .fromTo(joinTheMovementOne, 1, { y: '-140%', opacity: 1 }, { y: '-340%', opacity: 0 }, 'two+=1')
      .fromTo(joinTheMovementTwo, 1, { y: '0%' }, { y: isMobile ? '-250%' : isTab ? '-200%' : '-140%', color: 'white' }, 'two+=1')
      .to(changeTheColorToBlack, 1, { backgroundColor: '#000000' }, 'two+=1')
      .fromTo(joinTheMovementThree, 1, { y: '0%', opacity: 0 }, { y: '-220%', opacity: 1 }, 'two+=1')
      .to(events, 1, { y: '-20%', opacity: 1 }, 'two')
      .to(bePartFamily, 1, { y: '-20%', opacity: 1 }, 'two')





// Main Wrapper
})
// Main Wrapper





