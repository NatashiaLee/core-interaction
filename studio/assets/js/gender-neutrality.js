var full_fade = document.getElementById('full_fade');
var elem = document.getElementById('full_fade');

// running fadeOut(); as-is will not work
setTimeout(fadeOut, 10);

function fadeOut() {
  full_fade.style.opacity = 0;
}

setTimeout(remove, 999);
function remove() {
  elem.remove();
}

var image_container = document.getElementById('image_container');

var images = ['./media/img/masc.png', './media/img/gen.png', './media/img/fem.png', ];

result.addEventListener('mouseenter', replaceImage);

var position = 0;

function replaceImage() {
  image_container.src = images[position];

  position++;

  if (position == images.length) {
    position = 0;
  }
}

window.onscroll = function() {
  myFunction1()
  myFunction2()
  myFunction3()
};

function myFunction1() {
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        document.getElementById("Mer").className = "slideUp";
    }
}

function myFunction2() {
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        document.getElementById("Dove").className = "slideUp2";
    }
}

function myFunction3() {
    if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
        document.getElementById("Apple").className = "slideUp3";
    }
}
