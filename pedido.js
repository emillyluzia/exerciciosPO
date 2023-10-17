"use strict";
var StatusPedido;
(function (StatusPedido) {
    StatusPedido["ArguardandoPreparo"] = "Aguardando Preparo";
    StatusPedido["EmPreparo"] = "Em Preparo";
    StatusPedido["SaiuParaEntrega"] = "Saiu para Entrega";
    StatusPedido["Entregue"] = "Entregue";
})(StatusPedido || (StatusPedido = {}));
class ProdutoPedido {
    constructor(nome, valor) {
        this.nome = nome;
        this.valor = valor;
    }
}
class Pedido {
    constructor() {
        this.produtos = [];
        this.status = StatusPedido.ArguardandoPreparo;
    }
    adicionarProduto(produto) {
        this.produtos.push(produto);
        return "Produto adicionado com sucesso!!";
    }
    atualizarStatus(status) {
        this.status = status;
    }
    exibirStatus() {
        return this.status;
    }
    exibirProdutosdoPedido() {
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
