"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Colaborador = exports.Empresa = void 0;
class Empresa {
    constructor(nome, cnpj) {
        this.colaboradores = [];
        this.nome = nome;
        this.cnpj = cnpj;
    }
    adicionaColaborador(colaborador) {
        this.colaboradores.push(colaborador);
    }
    mostrarColaboradores() {
        for (const colaborador of this.colaboradores) {
            console.log(colaborador);
        }
    }
}
exports.Empresa = Empresa;
class Colaborador {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}
exports.Colaborador = Colaborador;
const empresa1 = new Empresa('Udemy', '11.111.111/0001-11');
const colaborador1 = new Colaborador('Renan', 'Muniz');
const colaborador2 = new Colaborador('Bella', 'Hellen');
const colaborador3 = new Colaborador('Cole', 'Cyrus');
empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
console.log(empresa1);
empresa1.mostrarColaboradores();
//# sourceMappingURL=A0021-classes.js.map