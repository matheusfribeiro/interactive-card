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

let form = document.querySelector('#cardForm')




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


//FORM SUBMIT
form.addEventListener('submit', submitForm)
function submitForm (e) {
  e.preventDefault()

  let hasError = false

  let inputName = document.forms['cardForm']['cardholderName']
  let inputNumber = document.forms['cardForm']['cardNumber']
  let inputMonth = document.forms['cardForm']['cardmonth']
  let inputYear = document.forms['cardForm']['cardyear']
  let inputCvc = document.forms['cardForm']['cardcvc']


  if (!inputName.value) {
    hasError = true
    inputName.classList.add('inputError')
    let span = inputName.nextSibling.nextSibling
    span.style.opacity = "100"; 
  } else {
    inputName.classList.remove('inputError')
    let span = inputName.nextSibling.nextSibling
    span.style.opacity = "0";
  }

  if (!inputNumber.value || isNaN(inputNumber.value) ) {
    hasError = true
    inputNumber.classList.add('inputError')
    let span = inputNumber.nextSibling.nextSibling
    span.style.opacity = "100";
  } else {
    inputNumber.classList.remove('inputError')
    let span = inputNumber.nextSibling.nextSibling
    span.style.opacity = "0";
  }

  if (!inputMonth.value) {
    hasError = true
    inputMonth.classList.add('inputError')
    
  } else {
    inputMonth.classList.remove('inputError')
  }

  if (!inputYear.value) {
    hasError = true
    inputYear.classList.add('inputError')
    
  } else {
    inputYear.classList.remove('inputError')
  }

  if (!inputCvc.value || isNaN(inputCvc.value)) {
    hasError = true
    inputCvc.classList.add('inputError')
    
  } else {
    inputCvc.classList.remove('inputError')
  }

  if (!hasError) {
    let hideDiv = document.querySelector('.forms')
    let confirmedState = document.querySelector('.confirmedState')
    hideDiv.style.display = 'none'
    confirmedState.style.display = 'flex'
  }

  let continueButton = document.querySelector('#continueButton')
  continueButton.addEventListener('click', () => {
    form.submit()
  })
    
}