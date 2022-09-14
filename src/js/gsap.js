import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const ST = ScrollTrigger;
gsap.registerPlugin(ScrollTrigger);


// Navbar
const userNameSection = document.querySelector('.username-section')
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

    let username = localStorage.getItem("username");



    if(!username) {

      gsap.set(userNameSection, {opacity: 0})


      gsap.set(mainNavbar, {backgroundColor: "rgba(51, 51, 51, 0)", scale: 1})
      gsap.set(loginWrapperBlack, {backgroundColor: "rgba(0, 0, 0, 0.95)" , opacity: 1 })
      gsap.set(mainNavbarSwissLogo, { y: 30 })
      gsap.set(mainNavbarSwissLogoSm, { y: 30, opacity: 0 })
      gsap.set(mainNavbarBurger, { y: -30 })

    }else{

      userName.innerHTML = username

      gsap.to(hideOnLogin, 0, { opacity: 0 }, 'one')
      gsap.to(mainNavbar, 0, { backgroundColor: "rgba(51, 51, 51, 1)", height: 100 }, 'one')
      gsap.to(loginWrapperBlack, 0, { backgroundColor: "rgba(51, 51, 51, 0)", scale: 10 }, 'one')
      gsap.to('body', 0, {className: '-=overflow-y-hidden'}, 'one')
      gsap.to(loginLogo, 0,
        {
          y: isMobile ? '-450%' : isTab ? '-580%' : isSmallLaptop ? '-350%' : isLaptop ? '-295%' : '-780%' , scale: isMobile ? 0.5 : 0.6,
          objectFit: 'cover', objectPosition: 'bottom', height: 70
        }, 'one')
      gsap.set(mainNavbarSwissLogo, { y: isMobile ? 25 : 30, x: isMobile ? -20 : 0, scale: isMobile ? 0.8 : 1 })
      gsap.set(mainNavbarSwissLogoSm, { y: 30, opacity: 0 })
      gsap.set(mainNavbarBurger, { y: -15, scale: isMobile ? 0.8 : 1 })

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
          .to(mainNavbar, 1, { backgroundColor: "rgba(51, 51, 51, 1)", height: 100 }, 'one')
          .to(loginWrapperBlack, 1, { backgroundColor: "rgba(51, 51, 51, 0)", scale: 10 }, 'one')
          .to('body', 1, { overflowY: 'scroll' }, 'one')
          .fromTo(loginLogo, 0.5,
              { y: '0%', scale: 1, objectFit: 'cover', objectPosition: 'bottom', height: 'auto'  },
              {
                y: isMobile ? '-445%' : isTab ? '-520%' : isSmallLaptop ? '-360%' : isLaptop ? '-300%' : '-780%' ,
                scale: 0.6, objectFit: 'cover', objectPosition: 'bottom', height: 70 }, 'one')
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

    tlNavbar.to(mainNavbar, 1, { height: 50 }, 'one')
      .to(mainNavbarSwissLogoLg, 0.5, { y: -10, opacity: 0 }, 'one')
      .to(mainNavbarSwissLogoSm, 1, { y: isMobile ? -23 : -13, opacity: 1 }, 'one')
      .to(mainNavbarBurgerIcon, 1, { y: isMobile ? -30 : -24, scale: 0.7 }, 'one')
      .to(loginLogo, 0.5,
        {
          y: isMobile ? '-336%' : isTab ? '-429%' : isSmallLaptop ? '-270%' : isLaptop ? '-232%' : '-572%' , scale: isMobile ? 0.3 : 0.4, objectFit: 'cover', objectPosition: 'top', height: 100
        }, 'one')



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
        start: isMobile ? 'center center+=250' : isTab ? 'center center+=250' : isDesktop ? 'center center+=250' : 'center center',
        end: '+=2000 bottom',
        scrub: 1,
        pin: true
      }
    });

    gsap.set(goldenInfo, {opacity: 0, y: '300%'})
    gsap.set(goldenTitle, {opacity: 0})

    tl2.fromTo(can1One, 1,
      { x:0, y: 0, rotation:0 },
      { x: '-50%', y: '-100%', rotation:25, transformOrigin:"top 100%" }, 'one-in' )
    .fromTo(can1Two, 1,
      { y:0 },
      { y: '-80%' }, 'one-in' )
    .fromTo(can1Three, 1,
      { x:0, y: 0, rotation:0 },
      { x: '50%', y: '-100%', rotation:-25, transformOrigin:"top 10%" }, 'one-in' )
    .fromTo(three1CansText, 1, { scale:0, autoAlpha: 0 }, { scale: 1 , autoAlpha: 1}, 'one-in')

    .fromTo(can1One, 2,
      { x: '-50%', y: '-100%', rotation:25, transformOrigin:"top 100%" },
      { x: '-550%' },
      'one-out+=1')
    .fromTo(can1Three, 2,
      {
        x: '50%', y: '-100%', rotation:-25, transformOrigin:"top 10%" },
      { x: '550%', },
      'one-out+=1')
    .fromTo(three1CansText, 1,
      { scale:1, autoAlpha: 1 },
      { scale: 0, autoAlpha: 0 }, //translate(120%, -110%) rotate(40deg) scale(1.5)
      'one-out+=1' )
    .fromTo(can1Two, 1,
      { y: '-80%', x: 0, rotation:0 },
      {
        y: isMobile ? '-140%' : isTab ? '-100%' : isLaptop ? '-46%' : isDesktop ? '-80%' : '-35%' ,
        x: isMobile ? '140%' : isTab ? '90%' : isLaptop ? '22%' : isDesktop ? '50%' : '10%',
        scale: isMobile ? 2 : isTab ? 1.5 : isDesktop ? 1.5 : 1,
        rotation: isDesktop ? 35 : 40,
        transformOrigin:"12% 12%" },
      'one-out+=1')

    .fromTo(classicPath, 2,
      {
        x: 3000
      },
      {
        x: 0
      }, 'classic-in-=3')
    .fromTo(blueTitle, 2, { x:1500, y: 1500, opacity: 0 }, { x: 0, y: 0, opacity: 1 }, 'classic-in-=3')
    .fromTo(blueTitle, 1, { scale: 1 }, { scale: 0.9 }, 'classic-info-in')
    .fromTo(blueInfo, 1, { y: 500, opacity: 0 }, { y: 0, opacity: 1 }, 'classic-info-in-=0.3')

    .fromTo(can1Two, 3,
      {
        y: isMobile ? '-140%' : isTab ? '-100%' : isLaptop ? '-46%' : isDesktop ? '-80%' : '-35%' ,
        x: isMobile ? '140%' : isTab ? '90%' : isLaptop ? '22%' : isDesktop ? '50%' : '10%',
        rotation:40,
        transformOrigin:"12% 12%"
      },
      { y: '-346%', x: '422%' },
      'classic-out+=1')
    .fromTo(classicPath, 2, { x:0 }, { x: 5000 }, 'classic-out+=1')
    .fromTo(can1Three, 1,
      { y:0, x: '422%', rotation:0, scale: 1  },
      {
        y: isMobile ? '50%' : isDesktop ? '-50%' : '-46%',
        x: isMobile ? '50%' : isDesktop ? '270%' : '22%',
        scale: isMobile ? 3 : isDesktop ? 3 : 1.7,
        rotation: isMobile ? 36 : 33 ,
        transformOrigin:"120% 60%"
      },
      'love-in-=3')

    .fromTo(loveEdition, 1, { x:-3000 }, { x: 0 }, 'love-in-=3')
    .fromTo(redTitle, 1.4, { x:-3000 }, { x: 0 }, 'love-in-=3')
    .fromTo(loveEdition, 1, { x:0 },
      {
        x: isMobile ? '95%' : isTab ? '70%' : isSmallLaptop ? '60%' : isDesktop ? '32%' : '45%',
        y: isMobile ? 0 : isTab ? '68%' : 0,
      }, 'love-in-right')
    .fromTo(redTitle, 1, { x:0, scale: 1 },
      {
        x: isMobile ? '-445%' : isTab ? '-190%' : isSmallLaptop ? '-125%' : isDesktop ? '-50%' : '-78%',
        y: isMobile ? '200%' : isTab ? '-80%' : isSmallLaptop ? '-10%' : isDesktop ? '-10%' : 0,
        scale: 0.8
      }, 'love-in-right')
    .fromTo(can1Three, 1,
      {
        y: isMobile ? '50%' : isDesktop ? '-50%' : '-46%',
        x: isMobile ? '50%' : isDesktop ? '270%' : '22%',
        scale: isMobile ? 3 : isDesktop ? 3 : 1.7,
      },
      {
        x: isMobile ? '-50%' : isTab ? '-100%' : isDesktop ? '-160%' : '-180%',
        y: isMobile ? '-50%' : isTab ? '-100%' : isDesktop ? '-80%' : '-46%',
        rotation: 35,
        scale: isMobile ? 3 : isTab ? 2 : isDesktop ? 2.5 : 1.7
      },
      'love-in-right')
    .fromTo(redInfo, 1, { y: 500, opacity: 0 },
      {
        x: isMobile ? '-145%' : isTab ? '-180%' : isSmallLaptop ? '-114.5%' : isDesktop ? '-39.5%' : '-67.5%',
        y: isMobile ? '175%' : isTab ? '-100%' : isSmallLaptop ? '-15%' : isDesktop ? '-40%' : 0,
        opacity: 1
      }, 'love-in-right+=0.7')

    .fromTo(loveEdition, 3, {
      x: isMobile ? '95%' : isTab ? '70%' : isSmallLaptop ? '60%' : isDesktop ? '32%' : '45%',
      y: isTab ? '45%' : 0,
     }, { x: '200%', y: '-200%' }, 'love-out+=1')
    .fromTo(can1Three, 2,
      {
        x: isMobile ? '-50%' : isTab ? '-100%' : '-180%',
        y: isMobile ? '-50%' : isTab ? '-100%' : '-46%',
        scale: isMobile ? 3 : isTab ? 2 : 1.7
      }, { x: '300%', y: '-300%' }, 'love-out+=1')

    .fromTo(goldenPath, 1, { x: '200%' }, { x: 0 }, 'golden-in-=2.8')
    .fromTo(goldenTitle, 1, { x: '-400%', opacity: 0 },
      {
        x: 0,
        opacity: 1
      }, 'golden-in-=2.8')
    .fromTo(can1One, 1, { x: '-550%' },
    {
      x: isMobile ? '150%' : isTab ? '140%' : '120%',
      y: isMobile ? '-80%' : isTab ? '-85%' : isLaptop ? '-65%' : '-55%' ,
      scale: isMobile ? 2 : isTab ? 1.5 : 1.1,
      rotation:0
    }, 'golden-in-=2.5')

    .fromTo(goldenPath, 1, { x: 0 }, { x: 0, height: '100%' }, 'golden-in-full')
    .fromTo(can1One, 1,
      { x: '120%', y: isLaptop ? '-65%' : '-55%' , rotation:0, scale: 1.1 },
      {
        x: isMobile ? '100%' : isTab ? '150%' : isSmallLaptop ? '100%' : isLaptop ? '60%' : '60%',
        y: isMobile ? '-250%' : isTab ? '-200%' :  isSmallLaptop ? '-135%' : isLaptop ? '-150%' : isDesktop ? '-170%' : '-35%' ,
        rotation: isMobile ? 30 : isTab ? 40 : isSmallLaptop ? 40 : isDesktop ? 25 : 20,
        scale: isMobile ? 2.5 : isTab ? 2 : isDesktop ? 2 : 1.7,
        transformOrigin:"0% 0%"
      },
      'golden-in-full')
    .fromTo(goldenTitle, 1, { x: 0, scale: 1 },
      {
        x: isMobile ? '-15%' : isTab ? '0%' : isSmallLaptop ? '15%' : isDesktop ? '15%' : '23%',
        y: isMobile ? '600px' : isTab ? '380%' : isDesktop ? '250%' : '180%',
        scale: isMobile ? 1.2 : isTab ? 1 : 0.7
      }, 'golden-in-full')
    .fromTo(goldenInfo, 1, { y: '300%', opacity: 0 },
    {
      x: isMobile ? '2%' : isTab ? '-25%' : isDesktop ? '-145%' : '-33%',
      y: isMobile ? '625px' : isTab ? '220%' : isDesktop ? '230%' : '130%',
      opacity: 1
    }, 'golden-in')

  // Why Buffalo Timeline
  const tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: whyBuffalloSection,
      start: "top top+=20%",
      end: "center center",
      scrub: 1
    }
  });

  tl3
    .to(whyBuffalloTitle, 0.5, { scale: 0.8, opacity: 0.6 })
    .to(whyBuffalloBoxes, 0.5, { scale: 0.8, opacity: 0.6 });

  const tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: doMoreSection,
      start: 'center center',
      end: isMobile ? '+=100%' : '+=250%',
      endTrigger: doMoreSection,
      scrub: bigDoMore,
      pin: true,
     }
  });

  tl4.fromTo( doMoreTextText, 1, { y: 500, opacity: 0 }, { y: 0, opacity: 1 }, "text-in-=1")
    .fromTo( doMoreTextText, 1, { y: 0, opacity: 1 }, { y: -1500, opacity: 0 }, "text-out+=0.1")
    .fromTo( doMoreTwoCans, 1, { y: 0, opacity: 1 }, { y: -1500, opacity: 0 }, "do-more-in")
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
    const tl5 = gsap.timeline({
      scrollTrigger: {
        trigger: moreByBuffalo,
        start: "top top",
        end: isMobile ? "+=500 center" : "+=2000 center",
        scrub: 1,
        pin: colorfulBottles,
      }
    });

    tl5.fromTo(moreByBuffaloTitle, 3, { y: '0%', scale: 1, opacity: 1 }, { y: '-50%', scale: 0.7, opacity: 0.6 }, 'one')
      .fromTo(moreByBuffaloInfo, 3, { y: '0%', scale: 1, opacity: 1 }, { y: '-50%', scale: 0.7, opacity: 0.6 }, 'one')
      .fromTo(bottlePath, isMobile ? 0.5 : isTab ? 0.5 : 2, { x:'-100%' },
        {
          x: '0%',
          stagger:0.3
        }, 'two-=2')
      .fromTo(bottleContainer, isMobile ? 10 : isTab ? 10 : 5, { x:'-100%' },
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
    const tl6 = gsap.timeline({
      scrollTrigger: {
        trigger: joinTheMovement,
        start: "center center",
        end: isMobile ? '+=500' : '+=1000',
        scrub: 1,
        pin: true,
        pinSpacer: false
      }
    });

    tl6.fromTo(joinTheMovement, 1, { scale: 0.8, opacity: 0}, { scale: 1, opacity: 1 })
    .fromTo(joinTheMovementOne, 1, { y: '0%', scale: 1}, { y: '-130%', scale: 0.8 }, 'one')
    .fromTo(joinTheMovementTwo, 1, { y: '200%', opacity: 0 }, { y: '0%', opacity: 1 }, 'one')
    .fromTo(joinTheMovementOne, 1, { y: '-140%', opacity: 1 }, { y: '-340%', opacity: 0 }, 'two+=1')
    .fromTo(joinTheMovementTwo, 1, { y: '0%' }, { y: isMobile ? '-250%' : isTab ? '-200%' : '-140%', color: 'white' }, 'two+=1')
    .to(changeTheColorToBlack, 1, { backgroundColor: '#000000' }, 'two+=1')
    .fromTo(joinTheMovementThree, 1, { y: '0%', opacity: 0 }, { y: '-220%', opacity: 1 }, 'two+=1')
    .to(events, 1, { y: '-20%', opacity: 1 }, 'two')
    .to(bePartFamily, 1, { y: '-20%', opacity: 1 }, 'two')



  })






  // ======== Commented ========

// gsap.utils.toArray('.section').forEach(section => {

//     const lines = section.querySelectorAll('h1');

//     const move =  gsap.timeline({paused:true}).to(lines, {x:25, color:'green', duration:0.5, stagger:0.3})


//   })
