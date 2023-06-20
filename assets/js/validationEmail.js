const email = $j('.h-newsletter__form > input');

function validateEmail(email) {
    const standard = /^[\w.-]+@[\w.-]+\.\w+$/;
    return standard.test(email);
}

email.addEventListener('input', function() {
  const emailValue = email.value;
  const button = document.querySelector('.h-newsletter__form > button');
  const labelValid = document.querySelector('.h-newsletter__validation > p');

  const isValidEmail = validateEmail(emailValue);
  button.classList.toggle('valid', isValidEmail);
  email.classList.toggle('invalid', !isValidEmail);
  labelValid.classList.toggle('showValid', isValidEmail);
  labelValid.classList.toggle('showInvalid', !isValidEmail);
  labelValid.textContent = isValidEmail ? 'Email válido!' : 'Email inválido!';
});

const buttonInformation = $j('.h-newsletter__validation > img');

buttonInformation.onclick = function() {
  const information = $j('.h-newsletter__information');
  information.classList.toggle('show');
}