class ProdutoLoja{
    nome: string;
    valor: number;


    constructor(nome: string, valor: number){
        this.nome = nome;
        this.valor = valor;
    }
}

class Carrinhodecompras{
    produtos: ProdutoLoja[] = [];

    adicionarCarrinho(produto: ProdutoLoja){
        this.produtos.push(produto);
    }


    remover(produto: ProdutoLoja){
        this.produtos = this.produtos.filter((item) => item.nome !== produto.nome);
    }

    exibirCarrinho(){
        if (this.produtos.length > 0) {
            for (let i = 0; i < this.produtos.length; i++) {                    
                console.log("Produto: " + this.produtos[i].nome + ' de R$:' 
                + this.produtos[i].valor + ",00 adicionado com sucesso");
            }
           
        }
        else {
            return "nenhum produto adicionado ao carrinho";
        }

    }

    somaDosProdutos(){
        let soma = 0 
        for (let i = 0; i < this.produtos.length; i++) {

           
            soma = this.produtos[i].valor + soma;
        
        }
        return soma
    }
}

   class Loja{
    estoque: ProdutoLoja[] = [];
    carrinho = new Carrinhodecompras;

    adicionarNoCarrinho(estoque: ProdutoLoja){
        this.estoque.push(estoque);
    }


        exibirEstoque(){
            if (this.estoque.length > 0) {
                for (let i = 0; i < this.estoque.length; i++) {                    
                    console.log("Produto: " + this.estoque[i].nome + ' de R$:' 
                    + this.estoque[i].valor + ",00 adicionado ");
                }
               
            }
            else {
                return "nenhum produto adicionado ao carrinho";
            }
        }
    

    adicionarNoEstoque(estoque: ProdutoLoja){
        this.estoque.push(estoque);
    }


    removerNoEstoque(estoque: ProdutoLoja){
        this.estoque = this.estoque.filter((item) => item.nome !== estoque.nome);
    }
}
const produtos1 = new ProdutoLoja("Tenis vans", 505.00);
const produtos2 = new ProdutoLoja("Tenis Nike", 850.00);
const produtos3 = new ProdutoLoja("Tenis Adiddas", 350.00);
const produtos4 = new ProdutoLoja("Tenis Tesla", 550.00);

const meuProduto = new Carrinhodecompras();
const loja = new Loja();
meuProduto.adicionarCarrinho(produtos1);
meuProduto.adicionarCarrinho(produtos2);
meuProduto.adicionarCarrinho(produtos3);
meuProduto.adicionarCarrinho(produtos4);



console.log(meuProduto.exibirCarrinho())
console.log(meuProduto.somaDosProdutos())
console.log(loja.adicionarNoEstoque(produtos1))
console.log(loja.exibirEstoque())
console.log(loja.removerNoEstoque(produtos1))
console.log(loja.exibirEstoque())

