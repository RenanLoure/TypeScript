export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    protected _cpf: string,
  ) {
    this.cpf = _cpf;
  }

  set cpf(cpf: string) {
    console.log('SETTER CHAMADO');
    this._cpf = cpf;
  }

  get cpf(): string {
    console.log('GETTER CHAMADO');
    return this._cpf.replace(/\D/g, '');
  }
}

const pessoa = new Pessoa('Renan', 'Muniz', 23, '000.000.000-00');
pessoa.cpf = '123.456.798-99';
console.log(pessoa.cpf);
