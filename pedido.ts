enum StatusPedido{
    ArguardandoPreparo = "Aguardando Preparo",
    EmPreparo = "Em Preparo",
    SaiuParaEntrega = "Saiu para Entrega",
    Entregue = "Entregue"

}

class ProdutoPedido{
    nome: string;
    valor: number;

    constructor(nome: string,valor: number){
        this.nome = nome
        this.valor = valor
    }
}
class Pedido {
    //private produtos:{nome:string, valor:number}[];
    private produtos:ProdutoPedido[];
    private status: StatusPedido;
    constructor(){
        this.produtos = [];
        this.status = StatusPedido.ArguardandoPreparo;
    }

    adicionarProduto(produto:ProdutoPedido){
        this.produtos.push(produto);
        return "Produto adicionado com sucesso!!"
    }

    atualizarStatus(status:StatusPedido){
        this.status = status;
    }
    exibirStatus(){
        return this.status;
    }
    exibirProdutosdoPedido(){
        console.log("Produtos de Pedidos:");
        for (let index = 0; index < this.produtos.length; index++) {
            console.log("Produto : " + this.produtos[index].nome + "R$ " + this.produtos[index]
            .valor.toFixed(2));
        }
    }
}

const produtoPedido = new ProdutoPedido("X-Bacon", 18);
const outroProdutoPedido = new ProdutoPedido("X-Calabresa", 20);
const novoPedido = new Pedido();
novoPedido.adicionarProduto(produtoPedido);
novoPedido.adicionarProduto(outroProdutoPedido);
console.log("Status atual do pedido: " + novoPedido.exibirStatus());
novoPedido.atualizarStatus(StatusPedido.EmPreparo);
console.log("Status atual do Pedido: " + novoPedido.exibirStatus());
novoPedido.exibirProdutosdoPedido();