import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const ST = ScrollTrigger;
gsap.registerPlugin(ScrollTrigger);


const mainNavbarBurger = document.querySelector('.main-navbar_burger')
const MegaMenu = document.querySelector('.mega-menu')
const CloseMegaMenu = document.querySelector('#closeMegaMenu')
const MegaLi = document.querySelectorAll('.mm-li')


let mmtl = gsap.timeline();

gsap.set(MegaMenu, {opacity: 0, zIndex: -50})

mainNavbarBurger.addEventListener('click', function() {
  openMegaMenu ()
})

CloseMegaMenu.addEventListener('click', function () {
  closeMegaMenu ()
})

for (var i=0; i<MegaLi.length; i++) {
  MegaLi[i].addEventListener('click', closeMegaMenu, false);
}


function openMegaMenu() {

  mmtl.play()
  mmtl.fromTo(MegaMenu, 0.4, {opacity: 0, zIndex: -50}, {opacity: 1, zIndex: 150}, 'one')
  .fromTo(MegaLi, 0.2, { y: -50, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1 }, 'one')

}

function closeMegaMenu() {
  mmtl.reverse()
}




document.onreadystatechange = function() {
  if (document.readyState !== "complete") {
      document.querySelector("body").style.visibility = "hidden";
      document.querySelector(".spinner-wrapper").style.visibility = "visible";
      document.querySelector(".spinner-wrapper").style.zIndex = 100;
// /      document.querySelector(".hidden-element").style.display = 'block';

  } else {
      document.querySelector(".spinner-wrapper").style.display = "none";
      document.querySelector(".spinner-wrapper").style.zIndex = -100;
      document.querySelector("body").style.visibility = "visible";
      // document.querySelector(".hidden-element").style.display = 'none';
  }
};
