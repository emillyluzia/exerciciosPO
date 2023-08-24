"use strict";
class ContaBancaria {
    constructor(nometitular, saldoatual) {
        this.nometitular = nometitular;
        this.saldoatual = saldoatual;
    }
    consultarSaldotitular() {
        return " Olá " + this.nometitular + " sua conta bancária atual:";
    }
    depositar(deposito) {
        this.saldoatual = this.saldoatual + deposito;
        return " deposito realizado " + deposito + " O saldo atual é  " + this.saldoatual;
    }
    sacar(saque) {
        let msgSacarsaldo = "saque aprovado ";
        if (saque > this.saldoatual) {
            msgSacarsaldo = "saque negado";
            return msgSacarsaldo;
        }
        else {
            this.saldoatual = this.saldoatual - saque;
            return msgSacarsaldo + saque + " O saldo atual é  " + this.saldoatual;
        }
    }
}
let minhaconta = new ContaBancaria("João", 1000);
console.log(minhaconta.consultarSaldotitular());
console.log(minhaconta.depositar(500));
console.log(minhaconta.sacar(200));
console.log(minhaconta.sacar(1500));
