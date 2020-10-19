/***
 * Modal Functie
 */
let shareButton = document.querySelector('.full-article > header > section:first-of-type > a:last-of-type');
let shareModal = document.querySelector('.full-article header > section:nth-of-type(2)');
let shareLink = document.querySelector('.full-article header > section:nth-of-type(2) > a');
let bovenButton = document.querySelector('aside button');
let progressBar = document.querySelector('.full-article > header > section > div');
let fullArticle = document.querySelector('.full-article > main > article');
let navigation = document.querySelector('header nav');
let sportNav = document.querySelector('header nav ul li:nth-of-type(11) a');


/**
 * Wanneer je op het deel knopje klikt op mobile komt er een modal tevoorschijn.
 */
shareButton.addEventListener('click', function(event) {
    event.preventDefault(); //stop naar boven scrollen
    shareModal.classList.toggle('opacityModal');
});

/**
 * Deze functie zorgt ervoor dat wanneer je op link kopieren klikt, dat dan die tekst wordt vervangen met link gekopieerd.
 */
shareLink.addEventListener('click', function(event){ //update tekst als je op link kopieren klikt
    event.preventDefault();
    shareLink.innerHTML = "<svg width='20' height='10' class='share-modal__copy-icon'> <path fill='#000' fill-rule='nonzero' d='M1.9 5c0-1.7 1.4-3.1 3.1-3.1h4V0H5a5 5 0 0 0 0 10h4V8.1H5A3.1 3.1 0 0 1 1.9 5zM6 6h8V4H6v2zm9-6h-4v1.9h4a3.1 3.1 0 0 1 0 6.2h-4V10h4a5 5 0 0 0 0-10z'></path> </svg>Link gekopieerd"
});

/**
 * Functie showButton laat een button zien die je naar boven neemt als je 35% of meer van het artikel hebt gelezen.
 */
function showButton(genoegScroll) {
    genoegScroll = fullArticle.offsetHeight * 0.35; //35 van het artikel
    if(window.scrollY > genoegScroll && window.scrollY < fullArticle.offsetHeight) {
        bovenButton.classList.add('buttonOpacity');
    } else {
        bovenButton.classList.remove('buttonOpacity');
    }
}

/**
 * De functie progress kijkt hoe ver je in het artikel gescrollt bent.
 */
//inspiratie https://codepen.io/pimpiet/pen/bRqegQ
function progress(gelezen, textOver) {
    textOver = fullArticle.offsetHeight - window.innerHeight; //check de height van het volledige artikel - de hoogte van je scherm
    gelezen = window.scrollY / textOver * 100; //check hoever je bent door je scrollhoogte te delen door het aantal tekst waar nog niet door gescrollt is.
    progressBar.style.width = `${gelezen}%`; //progress bar breedte
}

window.addEventListener('scroll', function() {
    showButton();
    progress();

    shareModal.classList.remove('opacityModal'); //als je scrollt gaat de modal weg.
});

/**
 * Functie voor als je op de button klikt die je naar boven brengt
 */
bovenButton.addEventListener('click', function() {
    window.scroll({top: 0, behavior: "smooth"}); 
});

/**
 * Functie die ervoor zorgt dat de navigatie op de juiste plek staat (dus bij sport, omdat het
 * een sport artikel is)
 */
document.addEventListener('DOMContentLoaded', function(){
    navigation.scroll({left: sportNav.offsetLeft});
    console.log('lol')
});