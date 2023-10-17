"use strict";
class Animal {
    constructor(nome, qtdPatas) {
        this.nome = nome;
        this.qtdPatas = qtdPatas;
    }
    apresentar() {
        console.log("Este é um " + this.nome + " com " + this.qtdPatas + " patas ");
    }
}
class Dog extends Animal {
    constructor() {
        super("Cachorro", 4);
    }
    fazerBarulho() {
        console.log("O Cachorro está latindo");
    }
}
class Cat extends Animal {
    constructor() {
        super("Gato", 4);
    }
    fazerBarulho() {
        console.log("O Gato está miando");
    }
}
class Bird extends Animal {
    constructor() {
        super("Pássaro", 2);
    }
    fazerBarulho() {
        console.log("O Pássaro está cantando");
    }
}
const cachorro = new Dog();
cachorro.apresentar();
cachorro.fazerBarulho();
const gato = new Cat();
gato.apresentar();
gato.fazerBarulho();
const passaro = new Bird();
passaro.apresentar();
passaro.fazerBarulho();
