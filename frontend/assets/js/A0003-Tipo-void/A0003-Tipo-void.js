"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pessoa = void 0;
function semRetorno(...args) {
    console.log(args.join(' '));
}
const pessoa = {
    nome: 'Renan',
    sobrenome: 'Muniz',
    exibirNome() {
        console.log(this.nome + ' ' + this.sobrenome);
    },
};
exports.pessoa = pessoa;
semRetorno('Renan', 'Muniz');
pessoa.exibirNome();
//# sourceMappingURL=A0003-Tipo-void.js.map