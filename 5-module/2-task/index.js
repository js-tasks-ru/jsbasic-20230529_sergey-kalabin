function toggleText() {
  // ваш код...
  let button = document.querySelector('.toggle-text-button');
  let text = document.getElementById('text');
  button.onclick = function() {
    if (text.getAttribute("hidden")) {
      text.removeAttribute("hidden")
     } else {
     text.setAttribute("hidden", "hidden")
     };
  };
}
