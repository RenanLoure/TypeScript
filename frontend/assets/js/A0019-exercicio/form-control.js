"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isEmail_1 = __importDefault(require("validator/lib/isEmail"));
const SHOW_ERR0R_MESSAGES = 'show-error-message';
const form = document.querySelector('.form');
const username = document.querySelector('.username');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const password2 = document.querySelector('.password2');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    hideErrorMessages(this);
    checkForEmptyFields(username, email, password, password2);
    checkEmail(email);
    checkEqualsPasswords(password, password2);
    if (shouldSendForm(this))
        console.log('Formulário enviado');
});
function checkForEmptyFields(...inputs) {
    inputs.forEach((input) => {
        if (!input.value)
            showErrorMessage(input, 'Campo não pode ser vazio');
    });
}
function checkEmail(input) {
    if (!(0, isEmail_1.default)(input.value))
        showErrorMessage(input, 'Email invalido');
}
function checkEqualsPasswords(password, password2) {
    if (password.value !== password2.value) {
        showErrorMessage(password, 'senhas não são iguais');
        showErrorMessage(password2, 'senhas não são iguais');
    }
}
function hideErrorMessages(form) {
    form.querySelectorAll('.' + SHOW_ERR0R_MESSAGES).forEach((item) => item.classList.remove(SHOW_ERR0R_MESSAGES));
}
function showErrorMessage(input, msg) {
    const formFields = input.parentElement;
    const errorMessage = formFields.querySelector('.error-message');
    errorMessage.innerText = msg;
    formFields.classList.add(SHOW_ERR0R_MESSAGES);
}
function shouldSendForm(form) {
    let send = true;
    form.querySelectorAll('.' + SHOW_ERR0R_MESSAGES).forEach(() => (send = false));
    return send;
}
//# sourceMappingURL=form-control.js.map