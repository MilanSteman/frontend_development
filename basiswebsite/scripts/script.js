// JavaScript Document
let navigation = document.querySelector('header nav');
let content = document.querySelector('main');
let topNav = navigation.offsetTop;

//variabelen sections
let voorpagina = document.querySelector('main > section:nth-of-type(1)');
let nieuwsAchtergrond = document.querySelector('main > section:nth-of-type(2)');
let columnsOpinie = document.querySelector('main > section:nth-of-type(3)');
let uitgelicht = document.querySelector('main > section:nth-of-type(4)');
let wetenschap = document.querySelector('main > section:nth-of-type(5)');
let mensen = document.querySelector('main > section:nth-of-type(6)');
let deGids = document.querySelector('main > section:nth-of-type(7)');
let cultuurMedia = document.querySelector('main > section:nth-of-type(8)');
let foto = document.querySelector('main > section:nth-of-type(9)');
let economie = document.querySelector('main > section:nth-of-type(10)');
let sport = document.querySelector('main > section:nth-of-type(11)');

//variabelen nav
let voorpaginaNav = document.querySelector('header nav ul li:nth-of-type(1) a');
let nieuwsAchtergrondNav = document.querySelector('header nav ul li:nth-of-type(2) a');
let columnsOpinieNav = document.querySelector('header nav ul li:nth-of-type(3) a');
let uitgelichtNav = document.querySelector('header nav ul li:nth-of-type(4) a');
let wetenschapNav = document.querySelector('header nav ul li:nth-of-type(5) a');
let mensenNav = document.querySelector('header nav ul li:nth-of-type(6) a');
let deGidsNav = document.querySelector('header nav ul li:nth-of-type(7) a');
let cultuurMediaNav = document.querySelector('header nav ul li:nth-of-type(8) a');
let fotoNav = document.querySelector('header nav ul li:nth-of-type(9) a');
let economieNav = document.querySelector('header nav ul li:nth-of-type(10) a');
let sportNav = document.querySelector('header nav ul li:nth-of-type(11) a');

//variabelen top sections
let topNieuwsAchtergrond = nieuwsAchtergrond.offsetTop - 50;
let topColumnsOpinie = columnsOpinie.offsetTop;
let topUitgelicht = uitgelicht.offsetTop;
let topWetenschap = wetenschap.offsetTop;
let topMensen = mensen.offsetTop;
let topDeGids = deGids.offsetTop;
let topCultuurMedia = cultuurMedia.offsetTop; 
let topFoto = foto.offsetTop;
let topEconomie = economie.offsetTop;
let topSport= sport.offsetTop;

function fixedNav() {
  if (window.pageYOffset >= topNav) {
    content.classList.add('fixedMargin')
    navigation.classList.add('fixed')
  } else {
    content.classList.remove('fixedMargin')
    navigation.classList.remove('fixed');
  }
}

function checkSection() {
  if(window.pageYOffset <= topNieuwsAchtergrond) { //voorpagina
    removeAllClasses();
    voorpaginaNav.classList.add('active');
    navigation.scroll({left: 0, behavior: 'smooth'});
  } else if (window.pageYOffset >= topNieuwsAchtergrond && window.pageYOffset <= topColumnsOpinie) { //nieuws & achtergrond
    removeAllClasses();
    nieuwsAchtergrondNav.classList.add('activeBlue');
    navigation.scroll({left: nieuwsAchtergrondNav.offsetLeft - 15, behavior: 'smooth'});
  } else if (window.pageYOffset >= topColumnsOpinie && window.pageYOffset <= topUitgelicht) { //columns & opinie
    removeAllClasses();
    columnsOpinieNav.classList.add('activeBlue');
    navigation.scroll({left: columnsOpinieNav.offsetLeft - 15, behavior: 'smooth'});
  } else if (window.pageYOffset >= topUitgelicht && window.pageYOffset <= topWetenschap) { //uitgelicht
    removeAllClasses();
    uitgelichtNav.classList.add('active');
    navigation.scroll({left: uitgelichtNav.offsetLeft - 15, behavior: 'smooth'});
  } else if (window.pageYOffset >= topWetenschap && window.pageYOffset <= topMensen) { //wetenschap
    removeAllClasses();
    wetenschapNav.classList.add('activeBlue');
    navigation.scroll({left: wetenschapNav.offsetLeft - 15, behavior: 'smooth'});
  } else if (window.pageYOffset >= topMensen && window.pageYOffset <= topDeGids) { //mensen
    removeAllClasses();
    mensenNav.classList.add('active');
    navigation.scroll({left: mensenNav.offsetLeft - 15, behavior: 'smooth'});
  } else if (window.pageYOffset >= topDeGids && window.pageYOffset <= topCultuurMedia) { //de gids
    removeAllClasses();
    deGidsNav.classList.add('active');
    navigation.scroll({left: deGidsNav.offsetLeft - 15, behavior: 'smooth'});
  } else if (window.pageYOffset >= topCultuurMedia && window.pageYOffset <= topFoto) { //cultuur & media
    removeAllClasses();
    cultuurMediaNav.classList.add('active');
    navigation.scroll({left: cultuurMediaNav.offsetLeft - 15, behavior: 'smooth'});
  } else if (window.pageYOffset >= topFoto && window.pageYOffset <= topEconomie) { //foto
    removeAllClasses();
    fotoNav.classList.add('active');
    navigation.scroll({left: fotoNav.offsetLeft - 15, behavior: 'smooth'});
  } else if (window.pageYOffset >= topEconomie && window.pageYOffset <= topSport) { //economie
    removeAllClasses();
    economieNav.classList.add('activePink');
  } else if (window.pageYOffset >= topSport) { //sport
    removeAllClasses();
    sportNav.classList.add('activeGreen');
  }
}

function removeAllClasses() {
  voorpaginaNav.classList.remove('active');
  nieuwsAchtergrondNav.classList.remove('activeBlue');
  columnsOpinieNav.classList.remove('activeBlue');
  uitgelichtNav.classList.remove('active');
  wetenschapNav.classList.remove('activeBlue');
  mensenNav.classList.remove('active');
  deGidsNav.classList.remove('active');
  cultuurMediaNav.classList.remove('active');
  fotoNav.classList.remove('active');
  economieNav.classList.remove('activePink');
  sportNav.classList.remove('activeGreen');
}

window.addEventListener('scroll' , function(){
    fixedNav();
    checkSection();
});

voorpaginaNav.addEventListener('click', function(event){
  event.preventDefault(); //stop a tag met refreshen
  window.scroll({top: topNav , behavior: "smooth"});
});

nieuwsAchtergrondNav.addEventListener('click', function(event){
  event.preventDefault(); //stop a tag met refreshen
  window.scroll({top: topNieuwsAchtergrond + 1, behavior: "smooth"});
});

columnsOpinieNav.addEventListener('click', function(event){
  event.preventDefault(); //stop a tag met refreshen
  window.scroll({top: topColumnsOpinie + 1, behavior: "smooth"});
});

uitgelichtNav.addEventListener('click', function(event){
  event.preventDefault(); //stop a tag met refreshen
  window.scroll({top: topUitgelicht + 1, behavior: "smooth"});
});

wetenschapNav.addEventListener('click', function(event){
  event.preventDefault(); //stop a tag met refreshen
  window.scroll({top: topWetenschap + 1, behavior: "smooth"});
});

mensenNav.addEventListener('click', function(event){
  event.preventDefault(); //stop a tag met refreshen
  window.scroll({top: topMensen + 1, behavior: "smooth"});
});

deGidsNav.addEventListener('click', function(event){
  event.preventDefault(); //stop a tag met refreshen
  window.scroll({top: topDeGids + 1, behavior: "smooth"});
});

cultuurMediaNav.addEventListener('click', function(event){
  event.preventDefault(); //stop a tag met refreshen
  window.scroll({top: topCultuurMedia + 1, behavior: "smooth"});
});

fotoNav.addEventListener('click', function(event){
  event.preventDefault(); //stop a tag met refreshen
  window.scroll({top: topFoto + 1, behavior: "smooth"});
});

economieNav.addEventListener('click', function(event){
  event.preventDefault(); //stop a tag met refreshen
  window.scroll({top: topEconomie + 1, behavior: "smooth"});
});

sportNav.addEventListener('click', function(event){
  event.preventDefault(); //stop a tag met refreshen
  window.scroll({top: topSport + 1, behavior: "smooth"});
});

console.log('lol')