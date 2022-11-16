const _fistnameInput = document.querySelector('.firstname')
const _lastnameInput = document.querySelector('.lastname')
const _email = document.querySelector('.email')
const _password = document.querySelector('.password')

// for _fistnameInput starts here
_fistnameInput.addEventListener('focus', () => {
  let iconDiv = _fistnameInput.previousElementSibling
  let icon = _fistnameInput.previousElementSibling.querySelector('i')
  iconDiv.classList.add('rais')
  icon.classList.add('raisIcon')
  _fistnameInput.nextElementSibling.classList.add('activeLabel')
})

_fistnameInput.addEventListener('blur', () => {
  let iconDiv = _fistnameInput.previousElementSibling
  let icon = _fistnameInput.previousElementSibling.querySelector('i')
  iconDiv.classList.remove('rais')
  icon.classList.remove('raisIcon')
  _fistnameInput.nextElementSibling.classList.remove('activeLabel')
})
// for _fistnameInput ends here





// _lastnameInput starts here
_lastnameInput.addEventListener('focus', () => {
  let iconDiv = _lastnameInput.previousElementSibling
  let icon = _lastnameInput.previousElementSibling.querySelector('i')
  iconDiv.classList.add('rais')
  icon.classList.add('raisIcon')
  _lastnameInput.nextElementSibling.classList.add('activeLabel')
})

_lastnameInput.addEventListener('blur', () => {
  let iconDiv = _lastnameInput.previousElementSibling
  let icon = _lastnameInput.previousElementSibling.querySelector('i')
  iconDiv.classList.remove('rais')
  icon.classList.remove('raisIcon')
  _lastnameInput.nextElementSibling.classList.remove('activeLabel')
})
// _lastnameInput ends here





// _email starts here
_email.addEventListener('focus', () => {
  let iconDiv = _email.previousElementSibling
  let icon = _email.previousElementSibling.querySelector('i')
  iconDiv.classList.add('rais')
  icon.classList.add('raisIcon')
  _email.nextElementSibling.classList.add('activeLabelEmail')
})

_email.addEventListener('blur', () => {
  let iconDiv = _email.previousElementSibling
  let icon = _email.previousElementSibling.querySelector('i')
  iconDiv.classList.remove('rais')
  icon.classList.remove('raisIcon')
  _email.nextElementSibling.classList.remove('activeLabelEmail')
})
// _email ends here






// _password starts here
_password.addEventListener('focus', () => {
  let iconDiv = _password.previousElementSibling
  let icon = _password.previousElementSibling.querySelector('i')
  iconDiv.classList.add('rais')
  icon.classList.add('raisIcon')
  _password.nextElementSibling.classList.add('activeLabelPassword')
})

_password.addEventListener('blur', () => {
  let iconDiv = _password.previousElementSibling
  let icon = _password.previousElementSibling.querySelector('i')
  iconDiv.classList.remove('rais')
  icon.classList.remove('raisIcon')
  _password.nextElementSibling.classList.remove('activeLabelPassword')
})
// _password ends here