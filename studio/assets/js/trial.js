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

window.onscroll = function() {
  myFunction1()
  myFunction2()
  myFunction3()
  myFunction4()
  myFunction5()
};

function myFunction1() {
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        document.getElementById("Mer").className = "slideUp";
    }
}

function myFunction2() {
    if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
        document.getElementById("Dove").className = "slideUp2";
    }
}

function myFunction3() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("Uni").className = "slideUp3";
    }
}

function myFunction4() {
    if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {
        document.getElementById("Ikea").className = "slideUp4";
    }
}

function myFunction5() {
    if (document.body.scrollTop > 650 || document.documentElement.scrollTop > 650) {
        document.getElementById("slidecontainer").className = "slideUp5";
    }
}

var slider = document.querySelector('.slider');
var number = document.querySelector('.number');
var images = document.querySelectorAll('.image');

// var slider_circle = document.getElementById('slider_circle');

slider.addEventListener('input', function () {
  number.innerText = slider.value
  var images = document.querySelectorAll('.image');

  if (slider.value < 15) {

  		// activate the neccessary image
  		images[0].classList.add('is-active');
  		images[1].classList.remove('is-active');
  		images[2].classList.remove('is-active');
      images[3].classList.remove('is-active');
      images[4].classList.remove('is-active');
      images[5].classList.remove('is-active');

      // slider_circle.style.color = 'blue';

  	} else if (slider.value < 35) {

  		images[0].classList.remove('is-active');
  		images[1].classList.add('is-active');
  		images[2].classList.remove('is-active');
      images[3].classList.remove('is-active');
      images[4].classList.remove('is-active');
      images[5].classList.remove('is-active');
      // slider_circle.style.color = 'green';

    } else if (slider.value < 55) {

      images[0].classList.remove('is-active');
      images[1].classList.remove('is-active');
      images[2].classList.add('is-active');
      images[3].classList.remove('is-active');
      images[4].classList.remove('is-active');
      images[5].classList.remove('is-active');
      // slider_circle.style.color = 'green';

    } else if (slider.value < 65) {

      images[0].classList.remove('is-active');
      images[1].classList.remove('is-active');
      images[2].classList.remove('is-active');
      images[3].classList.add('is-active');
      images[4].classList.remove('is-active');
      images[5].classList.remove('is-active');
      // slider_circle.style.color = 'green';

    } else if (slider.value < 80) {

      images[0].classList.remove('is-active');
      images[1].classList.remove('is-active');
      images[2].classList.remove('is-active');
      images[3].classList.remove('is-active');
      images[4].classList.add('is-active');
      images[5].classList.remove('is-active');
      // slider_circle.style.color = 'green';

  	} else {

  		images[0].classList.remove('is-active');
  		images[1].classList.remove('is-active');
  		images[2].classList.remove('is-active');
      images[3].classList.remove('is-active');
      images[4].classList.remove('is-active');
      images[5].classList.add('is-active');

  	}

  })



// var output = document.getElementById("demo");
// output.innerHTML = slider.value;
//
// slider.oninput = function() {
//   output.innerHTML = this.value;
// }
//
// slider.oninput = function() {
//   output.innerHTML = this.value;
// }
//
// document.getElementById("img").innerHTML = val + ".jpg";
