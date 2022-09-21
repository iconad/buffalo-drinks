import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Siema from 'siema';
const ST = ScrollTrigger;
gsap.registerPlugin(ScrollTrigger);


const aboutPopupWrapper = document.querySelector('#aboutPopupWrapper')
const aboutPopup = document.querySelector('#aboutPopup')
const popupHeaderText = document.querySelector('#popupHeaderText')
const popupHeader = document.querySelector('#popupHeader')
const popupAbout = document.querySelector('#popupAbout')
const popupIngredients = document.querySelector('#popupIngredients')
const popupImage = document.querySelector('#popupImage')
const closePopup = document.querySelector('#closePopup')
const openPopup = document.querySelectorAll('.open-popup')


const popupTL = gsap.timeline();

gsap.set(aboutPopupWrapper, {opacity: 0, zIndex: -1})
gsap.set(aboutPopup, {scale: 0, opacity: 1})

openPopup.forEach(element => {

  element.addEventListener('click', function (e) {


    console.log(e.currentTarget.dataset.ingredients)

    popupHeaderText.innerHTML = e.currentTarget.dataset.title
    popupAbout.innerHTML = e.currentTarget.dataset.about
    popupIngredients.innerHTML = e.currentTarget.dataset.ingredients
    popupImage.src = e.currentTarget.dataset.image
    popupHeader.style["background-color"] = '#'+e.currentTarget.dataset.color

    popupTL.play()
    popupTL.fromTo(aboutPopupWrapper, 0.3, {opacity: 0, zIndex: -1}, {opacity: 1, zIndex: 1}, 'one')
    .fromTo(aboutPopup, 0.3,
     {scale: 0, opacity: 1},
     {scale: 1, opacity: 1, ease: "back.out(1.7)" }, 'one')

  })

});

closePopup.addEventListener('click', function () {
  popupTL.reverse()
})



gsap.timeline({
    scrollTrigger: {
      trigger: ".do-more-image-big-section",
      start: "center 100%",
      end: "100% 0%",
      scrub: true
    }
  })
  .fromTo(".do-more-image-big",  { xPercent: 50, yPercent: -20 }, { xPercent: -50, yPercent: 20 }, 0)
  .fromTo(".do-more-image-sm",  { xPercent: 100, yPercent: -70 }, { xPercent: -50, yPercent: 20 }, 0)


  new Siema({
    selector: '.siema',
    perPage: {
      100: 1.5,
      600: 2.5,
      1000: 3.5,
      1380: 4.5,
      1680: 5.5,
    },
    loop: false,
  });
