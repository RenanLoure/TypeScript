"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.funcao = void 0;
function funcao(nome, age) {
    console.log(this);
    console.log(nome, age);
}
exports.funcao = funcao;
funcao.call(new Date(), 'Renan', 30);
funcao.apply(new Date(), ['Renan', 30]);
//# sourceMappingURL=A0020-This-em-funcoes.js.map