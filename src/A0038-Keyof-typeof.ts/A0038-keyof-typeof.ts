type coresObj = typeof coresObj;

type coresChaves = keyof coresObj;

const coresObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
  roxo: 'purple',
};

function traduzirCores(cor: coresChaves, cores: typeof coresObj) {
  return cores[cor];
}

console.log(traduzirCores('vermelho', coresObj));
