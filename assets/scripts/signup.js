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
let type = false; // set initial type of input type
_peepButton.addEventListener('click', () => {//add a click event listener to the (eye) peep button (to be fired when the peep button is clicked)
  type = !type //negate the value of the input variable
  const _passwordInput = _peepButton.previousElementSibling.previousElementSibling //get the second siblin element before the peep button
  const _icon = _peepButton.querySelector('i') //get <i></i> icon element

  _passwordInput.setAttribute('type', type ? 'text' : 'password') // use ternary conditional to toggle input type

  if (type) { // check if the type variable is true
    _icon.classList.remove('fa-eye') // remove the fa-eye class from the i element class list
    _icon.classList.add('fa-eye-slash') // add the fa-eye-slash class from the i element class list
  } else { // check if the type variable is true
    _icon.classList.add('fa-eye')// add the fa-eye class from the i element class list
    _icon.classList.remove('fa-eye-slash')// remove the fa-eye-slash class from the i element class list
  }
})
// change password type _peepButton stops here




















// validate firstname input on keypress
_fistname.addEventListener('keypress', () => { // add a keypress event listener to the first name input field (to be fired when you type on the input fiels)
  let iconDiv = _fistname.previousElementSibling // get the sibmin element before the first name input field <div class="icon">...</div>
  let icon = _fistname.previousElementSibling.querySelector('i') // get the icon (<i class="..."></i>) tag from the siblin element before the fist name input

  if (_fistname.value == '') {//check if first name input is not empty
    // Remove normal classes
    iconDiv.classList.remove('rais') // remove the rais class from the i element parent class list
    icon.classList.remove('raisIcon') // remove the raisIcon class from the icon (<i class="..."></i>) element class list
    _fistname.nextElementSibling.classList.remove('activeLabel') // remove the activeLabel class from the label (<label>...</label>) element class list

    // Add error classes
    iconDiv.classList.add('raisError') // add the raisError class from the i parent element class list if there is an error
    icon.classList.add('raisIconError') // add the raisIconError class from the icon (<i class="..."></i>) parent class list if there is an error
    _fistname.nextElementSibling.classList.add('activeLabelError') // remove the activeLabelError class from the label (<label>...</label>) element class list
    _fistname.classList.add('errorInput') // add the errorInput class to the first name input field
  }
})

// validate firstname input on keypress
_fistname.addEventListener('blur', () => { // add a blur event listener to the first name input field (to be fired when you click anywhere outside the firstname input field)
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
  } else {//check if first name input is not empty
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
_emailInput.addEventListener('keypress', () => { // add a keypress event listener to the email input field (to be fired when you type on the input fiels)
  let iconDiv = _emailInput.previousElementSibling
  let icon = _emailInput.previousElementSibling.querySelector('i')

  if (!_emailInput.value.match(emailRegex)) {//check if the value of the email input is not really a valid email by matching the value with the (emailRegex) variable, using the STRING.match method
    // Remove normal classes
    iconDiv.classList.remove('rais')
    icon.classList.remove('raisIcon')
    _emailInput.nextElementSibling.classList.remove('activeLabelEmail')

    // Add error classes
    iconDiv.classList.add('raisError')
    icon.classList.add('raisIconError')
    _emailInput.nextElementSibling.classList.add('activeLabelEmailError')
    _emailInput.classList.add('errorInput')
  } else {//check if the value of the email input is really a valid email by matching the value with the (emailRegex) variable, using the STRING.match method
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

  if (!_emailInput.value.match(emailRegex)) {//check if the value of the email input is not really a valid email by matching the value with the (emailRegex) variable, using the STRING.match method
    // Remove normal classes
    iconDiv.classList.remove('rais')
    icon.classList.remove('raisIcon')
    _emailInput.nextElementSibling.classList.remove('activeLabelEmail')

    // Add error classes
    iconDiv.classList.add('raisError')
    icon.classList.add('raisIconError')
    _emailInput.nextElementSibling.classList.add('activeLabelEmailError')
    _emailInput.classList.add('errorInput')
  } else {//check if the value of the email input is really a valid email by matching the value with the (emailRegex) variable, using the STRING.match method
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

  if (!_passwordinput.value.match(passwordRegex)) {//check if the value of the password input is not really a valid password by matching the value with the (passwordRegex) variable, using the STRING.match method
    // Remove normal classes
    iconDiv.classList.remove('rais')
    icon.classList.remove('raisIcon')
    _passwordinput.nextElementSibling.classList.remove('activeLabelPassword')

    // Add error classes
    iconDiv.classList.add('raisError')
    icon.classList.add('raisIconError')
    _passwordinput.nextElementSibling.classList.add('activeLabelPasswordError')
    _passwordinput.classList.add('errorInput')
  } else { //check if the value of the password input is really a valid password by matching the value with the (passwordRegex) variable, using the STRING.match method
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














// submit form
_signupButton.addEventListener('click', () => { // add a click event listener to the _signupButton button element
  if (_fistname.value != '' && _lastname.value != '' && _emailInput.value.match(emailRegex) && _passwordinput.value.match(passwordRegex)) // check if all inputes are valid and are not empty
    location.replace('dashboard.html')// change web page to dashboard page
  else
    _generalError.innerText = 'Please complete the form and try again'// change the text content to the error the form is se to display
})