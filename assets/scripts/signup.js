const _fistname = document.querySelector('.firstname')
const _lastname = document.querySelector('.lastname')
const _emailInput = document.querySelector('.email')
const _passwordinput = document.querySelector('.password')
const _peepButton = document.querySelector('#peepButton')
const _signupButton = document.querySelector('.signupButton')
const _generalError = document.querySelector('.generalError')

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/ //Minimum eight characters, at least one letter, one number and one special character

// change password type _peepButton starts here
let type = false;
_peepButton.addEventListener('click', () => {
  type = !type
  const _passwordInput = _peepButton.previousElementSibling.previousElementSibling
  const _icon = _peepButton.querySelector('i')

  _passwordInput.setAttribute('type', type ? 'text' : 'password')

  if (type) {
    _icon.classList.remove('fa-eye')
    _icon.classList.add('fa-eye-slash')
  } else {
    _icon.classList.add('fa-eye')
    _icon.classList.remove('fa-eye-slash')
  }
})
// change password type _peepButton stops here




















// validate firstname input on keypress
_fistname.addEventListener('keypress', () => {
  let iconDiv = _fistname.previousElementSibling
  let icon = _fistname.previousElementSibling.querySelector('i')

  if (_fistname.value == '') {//check if first name input is not empty
    // Remove normal classes
    iconDiv.classList.remove('rais')
    icon.classList.remove('raisIcon')
    _fistname.nextElementSibling.classList.remove('activeLabel')

    // Add error classes
    iconDiv.classList.add('raisError')
    icon.classList.add('raisIconError')
    _fistname.nextElementSibling.classList.add('activeLabelError')
    _fistname.classList.add('errorInput')
  }
})

// validate firstname input on keypress
_fistname.addEventListener('blur', () => {
  let iconDiv = _fistname.previousElementSibling
  let icon = _fistname.previousElementSibling.querySelector('i')

  if (_fistname.value == '') {//check if first name input is not empty
    // Remove normal classes
    iconDiv.classList.remove('rais')
    icon.classList.remove('raisIcon')
    _fistname.nextElementSibling.classList.remove('activeLabel')

    // Add error classes
    iconDiv.classList.add('raisError')
    icon.classList.add('raisIconError')
    _fistname.nextElementSibling.classList.add('activeLabelError')
    _fistname.classList.add('errorInput')
  } else {//check if first name input is empty
    // Remove normal classes
    iconDiv.classList.add('rais')
    icon.classList.add('raisIcon')
    _fistname.nextElementSibling.classList.add('activeLabel')

    // Add error classes
    iconDiv.classList.remove('rais')
    icon.classList.remove('raisIcon')
    _fistname.nextElementSibling.classList.remove('activeLabel')
    iconDiv.classList.remove('raisError')
    icon.classList.remove('raisIconError')
    _fistname.nextElementSibling.classList.remove('activeLabelError')
    _fistname.classList.remove('errorInput')
  }
})



















// validate lastname input on keypress
_lastname.addEventListener('keypress', () => {
  let iconDiv = _lastname.previousElementSibling
  let icon = _lastname.previousElementSibling.querySelector('i')

  if (_lastname.value == '') {//check if first name input is not empty
    // Remove normal classes
    iconDiv.classList.remove('rais')
    icon.classList.remove('raisIcon')
    _lastname.nextElementSibling.classList.remove('activeLabel')

    // Add error classes
    iconDiv.classList.add('raisError')
    icon.classList.add('raisIconError')
    _lastname.nextElementSibling.classList.add('activeLabelError')
    _lastname.classList.add('errorInput')
  }
})

// validate firstname input on keypress
_lastname.addEventListener('blur', () => {
  let iconDiv = _lastname.previousElementSibling
  let icon = _lastname.previousElementSibling.querySelector('i')

  if (_lastname.value == '') {//check if first name input is not empty
    // Remove normal classes
    iconDiv.classList.remove('rais')
    icon.classList.remove('raisIcon')
    _lastname.nextElementSibling.classList.remove('activeLabel')

    // Add error classes
    iconDiv.classList.add('raisError')
    icon.classList.add('raisIconError')
    _lastname.nextElementSibling.classList.add('activeLabelError')
    _lastname.classList.add('errorInput')
  } else {//check if first name input is empty
    // Remove normal classes
    iconDiv.classList.add('rais')
    icon.classList.add('raisIcon')
    _lastname.nextElementSibling.classList.add('activeLabel')

    // Add error classes
    iconDiv.classList.remove('rais')
    icon.classList.remove('raisIcon')
    _lastname.nextElementSibling.classList.remove('activeLabel')
    iconDiv.classList.remove('raisError')
    icon.classList.remove('raisIconError')
    _lastname.nextElementSibling.classList.remove('activeLabelError')
    _lastname.classList.remove('errorInput')
  }
})




















// validate email input on keypress
_emailInput.addEventListener('keypress', () => {
  let iconDiv = _emailInput.previousElementSibling
  let icon = _emailInput.previousElementSibling.querySelector('i')

  if (!_emailInput.value.match(emailRegex)) {//check if first name input is not empty
    // Remove normal classes
    iconDiv.classList.remove('rais')
    icon.classList.remove('raisIcon')
    _emailInput.nextElementSibling.classList.remove('activeLabelEmail')

    // Add error classes
    iconDiv.classList.add('raisError')
    icon.classList.add('raisIconError')
    _emailInput.nextElementSibling.classList.add('activeLabelEmailError')
    _emailInput.classList.add('errorInput')
  } else {
    // Remove normal classes
    iconDiv.classList.add('rais')
    icon.classList.add('raisIcon')
    _emailInput.nextElementSibling.classList.add('activeLabelEmail')

    // Add error classes
    iconDiv.classList.remove('raisError')
    icon.classList.remove('raisIconError')
    _emailInput.nextElementSibling.classList.remove('activeLabelEmailError')
    _emailInput.classList.remove('errorInput')
  }
})

// validate email input on keypress
_emailInput.addEventListener('blur', () => {
  let iconDiv = _emailInput.previousElementSibling
  let icon = _emailInput.previousElementSibling.querySelector('i')

  if (!_emailInput.value.match(emailRegex)) {//check if first name input is not empty
    // Remove normal classes
    iconDiv.classList.remove('rais')
    icon.classList.remove('raisIcon')
    _emailInput.nextElementSibling.classList.remove('activeLabelEmail')

    // Add error classes
    iconDiv.classList.add('raisError')
    icon.classList.add('raisIconError')
    _emailInput.nextElementSibling.classList.add('activeLabelEmailError')
    _emailInput.classList.add('errorInput')
  } else {//check if first name input is empty
    // Remove normal classes
    iconDiv.classList.add('rais')
    icon.classList.add('raisIcon')
    _emailInput.nextElementSibling.classList.add('activeLabelEmail')

    // Add error classes
    iconDiv.classList.remove('rais')
    icon.classList.remove('raisIcon')
    _emailInput.nextElementSibling.classList.remove('activeLabelEmail')
    iconDiv.classList.remove('raisError')
    icon.classList.remove('raisIconError')
    _emailInput.nextElementSibling.classList.remove('activeLabelEmailError')
    _emailInput.classList.remove('errorInput')
  }
})






















// validate password input on keypress
_passwordinput.addEventListener('keypress', () => {
  let iconDiv = _passwordinput.previousElementSibling
  let icon = _passwordinput.previousElementSibling.querySelector('i')

  if (!_passwordinput.value.match(passwordRegex)) {//check if first name input is not empty
    // Remove normal classes
    iconDiv.classList.remove('rais')
    icon.classList.remove('raisIcon')
    _passwordinput.nextElementSibling.classList.remove('activeLabelPassword')

    // Add error classes
    iconDiv.classList.add('raisError')
    icon.classList.add('raisIconError')
    _passwordinput.nextElementSibling.classList.add('activeLabelPasswordError')
    _passwordinput.classList.add('errorInput')
  } else {
    // Remove normal classes
    iconDiv.classList.remove('rais')
    icon.classList.remove('raisIcon')
    _passwordinput.nextElementSibling.classList.remove('activeLabelPassword')

    // Add error classes
    iconDiv.classList.add('raisError')
    icon.classList.add('raisIconError')
    _passwordinput.nextElementSibling.classList.add('activeLabelPasswordError')
    _passwordinput.classList.add('errorInput')
  }
})

// validate password input on keypress
_passwordinput.addEventListener('blur', () => {
  let iconDiv = _passwordinput.previousElementSibling
  let icon = _passwordinput.previousElementSibling.querySelector('i')

  if (!_passwordinput.value.match(passwordRegex)) {//check if first name input is not empty
    // Remove normal classes
    iconDiv.classList.remove('rais')
    icon.classList.remove('raisIcon')
    _passwordinput.nextElementSibling.classList.remove('activeLabelPassword')

    // Add error classes
    iconDiv.classList.add('raisError')
    icon.classList.add('raisIconError')
    _passwordinput.nextElementSibling.classList.add('activeLabelPasswordError')
    _passwordinput.classList.add('errorInput')
    _generalError.innerText = 'Password must be at least \n Minimum eight characters, at least one letter, one number and one special character'
  } else {//check if first name input is empty
    // Remove normal classes
    iconDiv.classList.add('rais')
    icon.classList.add('raisIcon')
    _passwordinput.nextElementSibling.classList.add('activeLabelPassword')

    // Add error classes
    iconDiv.classList.remove('rais')
    icon.classList.remove('raisIcon')
    _passwordinput.nextElementSibling.classList.remove('activeLabelPassword')
    iconDiv.classList.remove('raisError')
    icon.classList.remove('raisIconError')
    _passwordinput.nextElementSibling.classList.remove('activeLabelPasswordError')
    _passwordinput.classList.remove('errorInput')

    _generalError.innerText = ''
  }
})

_signupButton.addEventListener('click', () => {
  if (_fistname.value != '' && _lastname.value != '' && _emailInput.value.match(emailRege) && _passwordinput.value.match(passwordReg) )  {
    
  }
})