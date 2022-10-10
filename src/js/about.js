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


closePopup.addEventListener('click', function () {


    const popupTL = gsap.timeline();
    popupTL.fromTo(aboutPopupWrapper, 0.3, {opacity: 1, zIndex: 1}, {opacity: 0, zIndex: -1}, 'one')
    .fromTo(aboutPopup, 0.3,
     {scale: 1, opacity: 1, ease: "back.out(1.7)"},
     {scale: 0, opacity: 1}, 'one')

    //  window.location.href = location.protocol + '//' + window.location.host + window.location.pathname + window.location.hash

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




  function removeParam(key, sourceURL) {
    var rtn = sourceURL.split("?")[0],
        param,
        params_arr = [],
        queryString = (sourceURL.indexOf("?") !== -1) ? sourceURL.split("?")[1] : "";
    if (queryString !== "") {
        params_arr = queryString.split("&");
        for (var i = params_arr.length - 1; i >= 0; i -= 1) {
            param = params_arr[i].split("=")[0];
            if (param === key) {
                params_arr.splice(i, 1);
            }
        }
        if (params_arr.length) rtn = rtn + "?" + params_arr.join("&");
    }
    return rtn;
}
