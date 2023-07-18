"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isEmail_1 = __importDefault(require("validator/lib/isEmail"));
const SHOW_ERROR_MESSAGES = 'show-error-message';
const form = document.querySelector('.form');
const username = document.querySelector('.username');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const password2 = document.querySelector('.password2');
const submitEventFn = (event) => {
    event.preventDefault();
    const target = event.target;
    hideErrorMessages(target);
    checkForEmptyFields(username, email, password, password2);
    checkEmail(email);
    checkEqualPasswords(password, password2);
    if (shouldSendForm(target))
        console.log('FORMULÁRIO ENVIADO');
};
form.addEventListener('submit', submitEventFn);
function checkForEmptyFields(...inputs) {
    inputs.forEach((input) => {
        if (!input.value)
            showErrorMessage(input, 'Campo não pode ficar vazio');
    });
}
function checkEmail(input) {
    if (!(0, isEmail_1.default)(input.value))
        showErrorMessage(input, 'Email inválido');
}
function checkEqualPasswords(password, password2) {
    if (password.value !== password2.value) {
        showErrorMessage(password, 'Senhas não batem');
        showErrorMessage(password2, 'Senhas não batem');
    }
}
function hideErrorMessages(form) {
    form.querySelectorAll('.' + SHOW_ERROR_MESSAGES).forEach((item) => item.classList.remove(SHOW_ERROR_MESSAGES));
}
function showErrorMessage(input, msg) {
    const formFields = input.parentElement;
    const errorMessage = formFields.querySelector('.error-message');
    errorMessage.innerText = msg;
    formFields.classList.add(SHOW_ERROR_MESSAGES);
}
function shouldSendForm(form) {
    let send = true;
    form.querySelectorAll('.' + SHOW_ERROR_MESSAGES).forEach(() => (send = false));
    return send;
}
//# sourceMappingURL=form-control.js.map