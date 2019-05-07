// Viene fornito l’HTML e il CSS, che dovrete leggere e comprendere e starà a voi scrivere il JS utilizzando jQuery, al fine di avere un hamburger menu simile a quello che trovate sul sito di Boolean.
// Appare il simbolo delle 3 linee solo quando lo schermo è < 1000px, al click del simbolo appare un div che copre l’intero schermo con i link alle sezioni del sito.
// Un click sul simbolo X, fa scomparire il div

// clicco sul 3 sbarre
$('.header-right > a').click(function(){
  // creo una classe active che mi farà vedere il menù aperto quando la dimensione dello schermo è < 1000px
  $('.hamburger-menu').addClass('active');
})

// quando clicco sulla X
$('.close').click(function(){
  // toglierò la classe active così si chiuderà
  $('.hamburger-menu').removeClass('active');
})

// oppure se nel css togliamo
// .hamburger-menu.active {
//     display: block;
// }

// allora possiamo fare direttamente
// $('.header-right > a').click(function(){
//   $('.hamburger-menu').show();
// })
//
// $('.close').click(function(){
//   $('.hamburger-menu').hide();
// })
