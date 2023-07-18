"use strict";
function multiplicaArgs(...args) {
    return args.reduce((ac, valor) => ac * valor, 1);
}
function concatenaStrings(...args) {
    return args.reduce((ac, valor) => ac + valor);
}
function toUpper(...args) {
    return args.map((valor) => valor.toUpperCase());
}
const result = multiplicaArgs(1, 2, 3);
const concatenadas = concatenaStrings('a', 'b', 'c');
const upper = toUpper('a', 'b', 'c');
console.log(result);
console.log(concatenadas);
console.log(upper);
//# sourceMappingURL=A0005-Tipo-array.js.map