var button = document.querySelector('button')
button.addEventListener('click', function () {
  console.log("I've been clicked!!")
  myDebt += 100
  debtDiv.innerText = 'My Student Debt is $' + myDebt
})
