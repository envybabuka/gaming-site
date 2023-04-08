// -----------------------------------------------------------------------
const button = document.getElementById('counter');
const valueElem = document.getElementById('value');
let value = 40;
let isClicked = false;

button.addEventListener('click', function() {
  if (!isClicked) {
    value++;
    valueElem.innerHTML = value +" Followers";
    isClicked = true;
  } else {
    value--;
    valueElem.innerHTML = value +" Followers";
    isClicked = false;
  }
});
// -----------------------------------------------------------------------
const button1 = document.getElementById('counter1');
const valueElem1 = document.getElementById('value1');
let value1 = 40;
let isClicked1 = false;

button1.addEventListener('click', function() {
  if (!isClicked1) {
    value1++;
    valueElem1.innerHTML = value1 +" Followers";
    isClicked1 = true;
  } else {
    value1--;
    valueElem1.innerHTML = value1 +" Followers";
    isClicked1 = false;
  }
});
//------------------------------------------------------------------------
const button2 = document.getElementById('counter2');
const valueElem2 = document.getElementById('value2');
let value2 = 40;
let isClicked2 = false;

button2.addEventListener('click', function() {
  if (!isClicked2) {
    value2++;
    valueElem2.innerHTML = value2 +" Followers";
    isClicked2 = true;
  } else {
    value2--;
    valueElem2.innerHTML = value2 +" Followers";
    isClicked2 = false;
  }
});
// ----------------------------------------------------------------------------------
const button3 = document.getElementById('counter3');
const valueElem3 = document.getElementById('value3');
let value3 = 40;
let isClicked3 = false;

button3.addEventListener('click', function() {
  if (!isClicked3) {
    value3++;
    valueElem3.innerHTML = value3 +" Followers";
    isClicked3 = true;
  } else {
    value3--;
    valueElem3.innerHTML = value3 +" Followers";
    isClicked3= false;
  }
});
// ----------------------------------------------------------------------------


const card = document.querySelector('.card9');
const toggleBtn = document.getElementById('toggle');

toggleBtn.addEventListener('click', function() {
  if (card.style.display === 'none') {
    fadeIn(card, 500);
  } else {
    fadeOut(card, 500);
  }
});

function fadeIn(elem, duration) {
  elem.style.opacity = 0;
  elem.style.display = 'block';

  let start = performance.now();
  requestAnimationFrame(function animate(time) {
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    elem.style.opacity = timeFraction;
    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
}

function fadeOut(elem, duration) {
  elem.style.opacity = 1;

  let start = performance.now();
  requestAnimationFrame(function animate(time) {
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    elem.style.opacity = 1 - timeFraction;
    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    } else {
      elem.style.display = 'none';
    }
  });
}
// ////////////////////////////////----------------------- navbar responsive
let toggleBtnMain = document.querySelector(".toggle_btn")
let toggleBtnIcon = document.querySelector(".toggle_btn i")
let dropdownMenu = document.querySelector(".dropdown_menu")

toggleBtnMain.onclick = function() {
  dropdownMenu.classList.toggle("open")
  let isOpen =dropdownMenu.classList.contains('open')

}