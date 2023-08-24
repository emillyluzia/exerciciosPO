"use strict";
class Estudantes {
    constructor(nome, idade, notas) {
        this.nome = nome;
        this.idade = idade;
        this.notas = notas;
    }
    maiorquesete() {
        let soma = 0;
        for (let i = 0; i < this.notas.length; i++) {
            soma += this.notas[i];
        }
        const media = soma / this.notas.length;
        if (media < 7) {
            return this.nome + ", sua média é " + media + "  e você precisa estudar mais para melhorar seu desempenho. ";
        }
        return "Parabéns, " + this.nome + " Sua média é " + media + " e você está aprovado(a).";
    }
}
let Estudanteum = new Estudantes("Maria", 20, [10, 10, 10, 10, 10]);
console.log(Estudanteum.maiorquesete());
