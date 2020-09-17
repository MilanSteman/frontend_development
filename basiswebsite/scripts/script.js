// JavaScript Document
var navigation = document.querySelector('header nav');
var content = document.querySelector('main');
var topNav = navigation.offsetTop;

window.addEventListener('scroll' , function(){
    if (window.pageYOffset >= topNav) {
        content.classList.add('fixedMargin')
        navigation.classList.add('fixed')
      } else {
        content.classList.remove('fixedMargin')
        navigation.classList.remove('fixed');
      }
});