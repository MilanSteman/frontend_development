// JavaScript Document
let navigation = document.querySelector('header nav');
let content = document.querySelector('main');
let topNav = navigation.offsetTop;

let nieuwsAchtergrond = document.querySelector('.nieuws_achtergrond');
let voorpaginaNav = document.querySelector('header nav ul li:nth-of-type(1) a');
let nieuwsAchtergrondNav = document.querySelector('header nav ul li:nth-of-type(2) a');
let topNieuws = nieuwsAchtergrond.offsetTop;


window.addEventListener('scroll' , function(){
    if (window.pageYOffset >= topNav) {
        content.classList.add('fixedMargin')
        navigation.classList.add('fixed')
      } else {
        content.classList.remove('fixedMargin')
        navigation.classList.remove('fixed');
      }

      if (window.pageYOffset <= topNieuws) {
        voorpaginaNav.classList.add('active');
        nieuwsAchtergrondNav.classList.remove('activeBlue');
        navigation.scroll({left: 0, behavior: 'smooth'});
      } else if (window.pageYOffset >= topNieuws) {
        voorpaginaNav.classList.remove('active');
        nieuwsAchtergrondNav.classList.add('activeBlue');
        navigation.scroll({left: nieuwsAchtergrondNav.offsetLeft - 15, behavior: 'smooth'});
      }
});