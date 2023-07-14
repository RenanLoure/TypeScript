function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

function concatenaStrings(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

function toUpper(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const result = multiplicaArgs(1, 2, 3);
const concatenadas = concatenaStrings('a', 'b', 'c');
const upper = toUpper('a', 'b', 'c');

console.log(result);
console.log(concatenadas);
console.log(upper);
