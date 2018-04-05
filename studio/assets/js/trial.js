window.onscroll = function() {
  myFunction1()
  myFunction2()
  myFunction3()
  myFunction4()
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
