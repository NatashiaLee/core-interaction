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

window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        document.getElementById("myImg").className = "slideUp";
    }
}

function myFunction() {
    if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
        document.getElementById("myImg2").className = "slideUp2";
    }
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
