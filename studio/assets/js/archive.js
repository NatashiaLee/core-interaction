var theme = document.getElementById('theme');

theme.addEventListener('click', showText);

function showText() {

  var text = document.getElementById('text');

  console.log(text);
  text.style.opacity = 1;
}
