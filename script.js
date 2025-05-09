const title = document.querySelector('header h1');
let name = "Hi, I'm Bruce Wayne";
let index = 0;

function type() {
  if (index < name.length) {
    title.innerHTML += name.charAt(index);
    index++;
    setTimeout(type, 100);
  }
}

title.innerHTML = ""; // clear before typing
window.onload = type;