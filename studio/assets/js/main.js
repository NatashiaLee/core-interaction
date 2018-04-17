// return random numbers no repeat

//change class each time (css: font)

// var result = document.getElementById('result');
// var image_container = document.getElementById('image_container');
//
// var images = ['./media/img/masc.png', './media/img/gen.png', './media/img/fem.png', ];
//
// result.addEventListener('mouseenter', replaceImage);
//
// var position = 0;
//
// function replaceImage() {
//   image_container.src = images[position];
//
//   position++;
//
//   if (position == images.length) {
//     position = 0;
//   }
// }

// document.body.className = 'fade';
//
// document.addEventListener("DOMContentLoaded", function(e) {
//   document.body.className = '';
// });

// document.body += ' fade-out';
//
// // document.body.classList.add('fade');
// window.onload.body.removeClass('fade-out');
// document.addEventListener("DOMContentLoaded", function(e) {
//     document.body.classList.remove('fade');
// window.onload = function setFadeIn(){
//     document.body.className = 'body fade'
//     setTimeout(setFadeOut, 500);
//
//     function setFadeOut(){
//     document.body.className = 'body';

// window.onload = function ()	{fadein()};
//
// function fadein() {("#wrapper").addClass("fadein");
// };

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
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        document.getElementById("myImg").className = "slideUp";
    }
}

function myFunction2() {
    if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
        document.getElementById("myImg2").className = "slideUp2";
    }
}

var image_container = document.getElementById('image_container');

var images = ['./media/img/masc.png', './media/img/gen.png', './media/img/fem.png', ];

var result = document.getElementById('result');
if (result) {
  result.addEventListener('mouseenter', replaceImage);
}

var position = 0;

function replaceImage() {
  image_container.src = images[position];

  position++;

  if (position == images.length) {
    position = 0;
  }
}

// document.getElementById("theme").innerHTML = "<p>This is a <span>new</span> paragraph</p>";

// window.onscroll = function() {
//   myFunction1()
//   myFunction2()
//   myFunction3()
//   myFunction4()
// };
//
// function myFunction1() {
//     if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
//         document.getElementById("Mer").className = "slideUp";
//     }
// }
//
// function myFunction2() {
//     if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
//         document.getElementById("Dove").className = "slideUp2";
//     }
// }
//
// function myFunction3() {
//     if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
//         document.getElementById("Uni").className = "slideUp3";
//     }
// }
//
// function myFunction4() {
//     if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {
//         document.getElementById("Ikea").className = "slideUp4";
//     }
// }
