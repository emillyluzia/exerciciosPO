"use strict";
const pessoa = new class {
    constructor() {
        this.primeiroNome = "josé";
        this.ultimoNome = "da Silva";
    }
    getNomeCompleto() {
        return this.primeiroNome + " " + this.ultimoNome;
    }
};
console.log(pessoa.getNomeCompleto());
const treinadorpessoal = new class {
    constructor() {
        this.rotina = [];
    }
    adicionarExercicios(nome, duracao) {
        this.rotina.push({ nome, duracao });
    }
    calcularTempoTotal() {
        let soma = 0;
        this.rotina.forEach(item => soma += item.duracao);
        //this.rotina.forEach(item => soma = soma + item.duracao);
        return soma;
    }
};
treinadorpessoal.adicionarExercicios("Corrida", 30);
treinadorpessoal.adicionarExercicios("Flexões", 15);
treinadorpessoal.adicionarExercicios("Agachamentos", 20);
console.log("Tempo total necessário para a rotina: " + treinadorpessoal.calcularTempoTotal() + " em minutos");
