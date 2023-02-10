let cardnumber = document.querySelector('#cardnumber')
let cardholder = document.querySelector('#cardholder')
let cardmonth = document.querySelector('#cardmonth')
let cardyear = document.querySelector('#cardyear')
let cardcvc = document.querySelector('#cardcvc')

let cardnumberInput = document.querySelector('#cardnumberinput')
let cardholderInput = document.querySelector('#cardholderinput')
let cardmonthInput = document.querySelector('#cardmonthinput')
let cardyearInput = document.querySelector('#cardyearinput')
let cardcvcInput = document.querySelector('#cardcvcinput')




// CARD NUMBER
cardnumberInput.addEventListener('input', numberFunc)
function numberFunc () {
  cardnumber.innerHTML = cardnumberInput.value
}

//CARDHOLDER NAME
cardholderInput.addEventListener('input', holderFunc)
function holderFunc () {
  cardholder.innerHTML = cardholderInput.value
}

// CARD DATE
cardmonthInput.addEventListener('input', monthFunc)
function monthFunc() {
  cardmonth.innerHTML = cardmonthInput.value
}

cardyearInput.addEventListener('input', yearFunc)
function yearFunc() {
  cardyear.innerHTML = cardyearInput.value
}

//CARD CVC
cardcvcInput.addEventListener('input', cvcFunc)
function cvcFunc () {

  cardcvc.innerHTML = cardcvcInput.value
}
