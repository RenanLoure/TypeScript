import isEmail from 'validator/lib/isEmail';

const SHOW_ERR0R_MESSAGES = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

form.addEventListener('submit', function (event: Event) {
  event.preventDefault();
  hideErrorMessages(this);
  checkForEmptyFields(username, email, password, password2);
  checkEmail(email);
  checkEqualsPasswords(password, password2);
  if (shouldSendForm(this)) console.log('Formulário enviado');
});

function checkForEmptyFields(...inputs: HTMLInputElement[]): void {
  inputs.forEach((input) => {
    if (!input.value) showErrorMessage(input, 'Campo não pode ser vazio');
  });
}

function checkEmail(input: HTMLInputElement): void {
  if (!isEmail(input.value)) showErrorMessage(input, 'Email invalido');
}

function checkEqualsPasswords(password: HTMLInputElement, password2: HTMLInputElement): void {
  if (password.value !== password2.value) {
    showErrorMessage(password, 'senhas não são iguais');
    showErrorMessage(password2, 'senhas não são iguais');
  }
}

function hideErrorMessages(form: HTMLFormElement): void {
  form.querySelectorAll('.' + SHOW_ERR0R_MESSAGES).forEach((item) => item.classList.remove(SHOW_ERR0R_MESSAGES));
}

function showErrorMessage(input: HTMLInputElement, msg: string): void {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector('.error-message') as HTMLSpanElement;
  errorMessage.innerText = msg;
  formFields.classList.add(SHOW_ERR0R_MESSAGES);
}

function shouldSendForm(form: HTMLFormElement): boolean {
  let send = true;
  form.querySelectorAll('.' + SHOW_ERR0R_MESSAGES).forEach(() => (send = false));
  return send;
}
