"use strict";
class Evento {
    constructor(nome, data, horario) {
        this.nome = nome;
        this.data = data;
        this.horario = horario;
    }
}
class Agenda {
    constructor() {
        this.eventos = [];
    }
    adicionarLista(evento) {
        this.eventos.push(evento);
    }
    visualizar() {
        for (let i = 0; i < this.eventos.length; i++) {
            console.log("Evento: " + this.eventos[i].nome + " na data " + this.eventos[i].data + " no horário " + this.eventos[i].horario);
        }
    }
    remover(evento) {
        this.eventos = this.eventos.filter((item) => item.nome !== evento.nome);
    }
}
const evento1 = new Evento("Festa das Nações", "08/09", "20h");
const evento2 = new Evento("Acampamento com Maria", "15/09", "18h30m");
const evento3 = new Evento("Natal", "24/12", "00h");
const minhaAgenda = new Agenda();
minhaAgenda.adicionarLista(evento1);
minhaAgenda.adicionarLista(evento2);
minhaAgenda.adicionarLista(evento3);
console.log(minhaAgenda.visualizar());
console.log(minhaAgenda.remover(evento2));
console.log(minhaAgenda.visualizar());
