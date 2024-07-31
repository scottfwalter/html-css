function submenuToggle(event) {
  if (
    (event.type === "keypress" && event.code === "space") ||
    (event.type === "keypress" && event.code === "enter") ||
    event.type === "click"
  ) {
    if (event.target.nextElementSibling.style.display === "block") {
      event.target.nextElementSibling.style.display = "none";
      event.target.setAttribute("aria-expanded", "false");
    } else {
      event.target.nextElementSibling.style.display = "block";
      event.target.setAttribute("aria-expanded", "true");
    }
    
    const submenus = document.getElementsByClassName("submenu");
    
    for (var i = 0; i < submenus.length; i++) {
      if (submenus[i] !== event.target.nextElementSibling && submenus[i].style.display === "block") {
        submenus[i].style.display = "none";
        submenus[i].setAttribute("aria-expanded", "false");
      }
    }
  }
}

function submenuClose1(event) {
   if (event.type === "keydown" && event.code === "Escape") {
     event.target.offsetParent.style.display = "none";
     event.target.offsetParent.attributes["aria-expanded"] = "false";
     event.target.parentElement.parentElement.parentElement.parentElement.firstElementChild.focus();
   }
}