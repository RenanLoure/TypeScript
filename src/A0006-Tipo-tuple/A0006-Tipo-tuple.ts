const dadosCliente1: readonly [number, string] = [1, 'Renan'];
const dadosCliente2: [number, string, string] = [1, 'Renan', 'Muniz'];
const dadosCliente3: [number, string, string?] = [1, 'Renan', 'Muniz'];
const dadosCliente4: [number, string, ...string[]] = [1, 'Renan', '...'];

// dadosCliente1[0] = 100;
// dadosCliente1[1] = 'Carlos';

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

// readonly array
const array1: readonly string[] = ['Renan', 'Muniz'];
const array2: ReadonlyArray<string> = ['Renan', 'Muniz'];

console.log(array1);
console.log(array2);

// Module mode
export default 1;
