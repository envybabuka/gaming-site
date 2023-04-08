let toggleBtnMain = document.querySelector(".toggle_btn")
let toggleBtnIcon = document.querySelector(".toggle_btn i")
let dropdownMenu = document.querySelector(".dropdown_menu")

toggleBtnMain.onclick = function() {
  dropdownMenu.classList.toggle("open")
  let isOpen =dropdownMenu.classList.contains('open')

}