function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Renan',
  sobrenome: 'Muniz',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Renan', 'Muniz');
pessoa.exibirNome();

export { pessoa };
