let toggleBtnMain = document.querySelector(".toggle_btn")
let toggleBtnIcon = document.querySelector(".toggle_btn i")
let dropdownMenu = document.querySelector(".dropdown_menu")

toggleBtnMain.onclick = function() {
  dropdownMenu.classList.toggle("open")
  let isOpen =dropdownMenu.classList.contains('open')

}
// ------------


// Get references to the button and image elements
const btn = document.getElementById('btn');
const image = document.getElementById('image');

// Add an event listener to the button element
btn.addEventListener('click', function() {
  // Get the current text of the button
  const buttonText = btn.textContent;

  if (buttonText === '1 of 2') {
    // Change the image source to the second image
    image.src = 'about-us/cyber.png';

    // Change the text of the button to '2 of 2'
    btn.textContent = '2 of 2';
  } else {
    // Change the image source back to the first image
    image.src = 'about-us/meore.png';

    // Change the text of the button back to '1 of 2'
    btn.textContent = '1 of 2';
  }
});
