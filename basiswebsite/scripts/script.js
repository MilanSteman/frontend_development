// JavaScript Document
let navigation = document.querySelector('header nav');
let content = document.querySelector('main');
let topNav = navigation.offsetTop;

let nieuwsAchtergrond = document.querySelector('.nieuws_achtergrond');
let podcasts = document.querySelector('.podcasts')

let voorpaginaNav = document.querySelector('header nav ul li:nth-of-type(1) a');
let nieuwsAchtergrondNav = document.querySelector('header nav ul li:nth-of-type(2) a');
let podcastsNav = document.querySelector('header nav ul li:nth-of-type(4) a');

console.log(podcasts)

/**
 * Vraagje voor morgen
 * Nu addeventlistener met scroll maar smooth scroll werkt nu niet als je terugnavigeert via
 * navbar, want je nav.scroll conflict er dan mee.
 * 
 * Misschien een fix is om alle a'tjes van de nav een click functie te geven
 * met scroll. TODO <<<<<<<<<<<<
 */
window.addEventListener('scroll' , function(){
    if (window.pageYOffset >= topNav) {
        content.classList.add('fixedMargin')
        navigation.classList.add('fixed')
      } else {
        content.classList.remove('fixedMargin')
        navigation.classList.remove('fixed');
      }

      if (window.pageYOffset <= nieuwsAchtergrond.offsetTop) {
        voorpaginaNav.classList.add('active');
        nieuwsAchtergrondNav.classList.remove('activeBlue');
        navigation.scroll({left: 0, behavior: 'smooth'});

      } else if (window.pageYOffset >= nieuwsAchtergrond.offsetTop && window.pageYOffset <= podcasts.offsetTop) {
        voorpaginaNav.classList.remove('active');
        nieuwsAchtergrondNav.classList.add('activeBlue');
        podcastsNav.classList.remove('activeBlue');
        navigation.scroll({left: nieuwsAchtergrondNav.offsetLeft - 15, behavior: 'smooth'});

      } else if (window.pageYOffset >= podcasts.offsetTop) {
        voorpaginaNav.classList.remove('active');
        nieuwsAchtergrondNav.classList.remove('activeBlue');
        podcastsNav.classList.add('activeBlue');
        navigation.scroll({left: podcastsNav.offsetLeft - 15, behavior: 'smooth'});
      }
});

