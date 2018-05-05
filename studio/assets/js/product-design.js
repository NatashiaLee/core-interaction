var full_fade = document.getElementById('full_fade');
var elem = document.getElementById('full_fade');

setTimeout(fadeOut, 10);

function fadeOut() {
  full_fade.style.opacity = 0;
}

setTimeout(remove, 999);
function remove() {
  elem.remove();
}

window.onscroll = function() {
  myFunction1()
  myFunction2()
};

function myFunction1() {
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        document.getElementById("fshaver").className = "slideUp";
    }
}

function myFunction2() {
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        document.getElementById("mshaver").className = "slideUp2";
    }
}
