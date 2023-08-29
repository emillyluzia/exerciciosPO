"use strict";
class Funcionario {
    constructor(nome, cargo, salariobruto) {
        this.inss = (11 / 100);
        this.ir = (7.5 / 100);
        this.porcentual = (10 / 100);
        this.nome = nome;
        this.cargo = cargo;
        this.salariobruto = salariobruto;
    }
    exibirDetalhamentoFuncionario() {
        return " Olá, eu sou a " + this.nome + " , eu sou " + this.cargo + " , meu salário atual é de: " + this.salariobruto;
    }
    exibirINSSeIr() {
        let valorInss = (this.inss * this.salariobruto);
        let valorIr = (this.ir * this.salariobruto);
        let totaldeIM = (valorInss + valorIr);
        return " O valor do Inss será R$: " + valorInss + " O Valor do Imposto de renda será R$; "
            + valorIr + " O Valor dos Impostos sera de R$: " + totaldeIM;
    }
    aplicarAumento(percentual) {
        let valorpercentual = (this.porcentual * this.salariobruto);
        return " Aplicando o porcentual o valor será de R$: " + (valorpercentual + this.salariobruto);
    }
}
let salarioum = new Funcionario("Ana Silva", "Analista de Sistemas", 3000);
console.log(salarioum.exibirDetalhamentoFuncionario());
console.log(salarioum.exibirINSSeIr());
console.log(salarioum.aplicarAumento(10));
console.log("");
let salariodois = new Funcionario("Emilly", "Arquiteta", 8000);
console.log(salariodois.exibirDetalhamentoFuncionario());
console.log(salariodois.exibirINSSeIr());
console.log(salariodois.aplicarAumento(10));
