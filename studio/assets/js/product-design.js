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
