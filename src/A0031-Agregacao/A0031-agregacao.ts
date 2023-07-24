export class CarrinhoDeCompras {
  private readonly produtos: Produtos[] = [];

  inserirProdutos(...produtos: Produtos[]): void {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  quantidadeDeProdutos(): number {
    return this.produtos.length;
  }

  valorToral(): number {
    return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
  }
}

export class Produtos {
  constructor(
    public nome: string,
    public preco: number,
  ) {}
}

const produto1 = new Produtos('Camiseta', 49.9);
const produto2 = new Produtos('Caneca', 1.9);
const produto3 = new Produtos('Caneta', 0.9);

const carrinhoDeCompras = new CarrinhoDeCompras();
carrinhoDeCompras.inserirProdutos(produto1, produto2, produto3);

console.log(carrinhoDeCompras.valorToral());
console.log(carrinhoDeCompras.quantidadeDeProdutos());
