let toggleBtnMain = document.querySelector(".toggle_btn")
let toggleBtnIcon = document.querySelector(".toggle_btn i")
let dropdownMenu = document.querySelector(".dropdown_menu")

toggleBtnMain.onclick = function() {
  dropdownMenu.classList.toggle("open")
  let isOpen = dropdownMenu.classList.contains('open')

}

// ----------------


// const cards = document.querySelector('.cards');
// const prevButton = document.querySelector('.prev-button');
// const nextButton = document.querySelector('.next-button');
// const cardWidth = document.querySelector('.card').offsetWidth;
// const numCards = 3;

// prevButton.addEventListener('click', () => {
//   const firstCard = cards.firstElementChild;
//   const lastCard = cards.lastElementChild;
//   cards.insertBefore(lastCard, firstCard);
// });

// nextButton.addEventListener('click', () => {
//   const firstCard = cards.firstElementChild;
//   const lastCard = cards.lastElementChild;
//   cards.insertBefore(firstCard, null);
// });





var carouselWidth = $('.carousel-inner')[0].scrollWidth;
var cardWidth = $('.carousel-item').width();

var scrollPosition = 0;

$('.carousel-control-next').on('click', function(){
    if(scrollPosition < (carouselWidth - (cardWidth * 4))){
    console.log('next');
    scrollPosition = scrollPosition + cardWidth;
    $('.carousel-inner').animate({scrollLeft: scrollPosition},600);
  }


});

$('.carousel-control-prev').on('click', function(){
  if(scrollPosition > 0){
    console.log('prev');
    scrollPosition = scrollPosition - cardWidth;

    $('.carousel-inner').animate({scrollLeft: scrollPosition},600);
  }


});
