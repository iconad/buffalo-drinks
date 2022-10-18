import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const productID = urlParams.get('p')
if(productID) {
  const product = document.querySelector(`#${productID}`)
  openProductPopupFromURL(product)
}





gsap.set(aboutPopupWrapper, {opacity: 0, zIndex: -1})
gsap.set(aboutPopup, {scale: 0, opacity: 1})

openPopup.forEach(element => {

  element.addEventListener('click', function (e) {

    popupHeaderText.innerHTML = e.currentTarget.dataset.title
    popupAbout.innerHTML = e.currentTarget.dataset.about
    popupIngredients.innerHTML = e.currentTarget.dataset.ingredients
    popupImage.src = e.currentTarget.dataset.image
    popupHeader.style["background-color"] = '#'+e.currentTarget.dataset.color

    const popupTL = gsap.timeline();
    popupTL.play()
    popupTL.fromTo(aboutPopupWrapper, 0.3, {opacity: 0, zIndex: -1}, {opacity: 1, zIndex: 20}, 'one')
    .fromTo(aboutPopup, 0.3,
     {scale: 0, opacity: 1},
     {scale: 1, opacity: 1, ease: "back.out(1.7)" }, 'one')

  })

});



function openProductPopupFromURL (e) {


    popupHeaderText.innerHTML = e.dataset.title
    popupAbout.innerHTML = e.dataset.about
    popupIngredients.innerHTML = e.dataset.ingredients
    popupImage.src = e.dataset.image
    popupHeader.style["background-color"] = '#'+e.dataset.color

    console.log(e.dataset)

    const popupTL = gsap.timeline();
    popupTL.play()
    popupTL.fromTo(aboutPopupWrapper, 0.3, {opacity: 0, zIndex: -1}, {opacity: 1, zIndex: 20}, 'one')
    .fromTo(aboutPopup, 0.3,
     {scale: 0, opacity: 1},
     {scale: 1, opacity: 1, ease: "back.out(1.7)" }, 'one')
}


if(closePopup){
  closePopup.addEventListener('click', function () {


    const popupTL = gsap.timeline();
    popupTL.fromTo(aboutPopupWrapper, 0.3, {opacity: 1, zIndex: 1}, {opacity: 0, zIndex: -1}, 'one')
    .fromTo(aboutPopup, 0.3,
     {scale: 1, opacity: 1, ease: "back.out(1.7)"},
     {scale: 0, opacity: 1}, 'one')

    //  window.location.href = location.protocol + '//' + window.location.host + window.location.pathname + window.location.hash

})
}



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

