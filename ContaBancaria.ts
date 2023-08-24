class ContaBancaria {
    nometitular: string;
    saldoatual: number;

    constructor(nometitular: string, saldoatual: number){
        this.nometitular = nometitular;
        this.saldoatual = saldoatual;
    }
    
consultarSaldotitular(){
     return " Olá " +this.nometitular+ " sua conta bancária atual:";
}
    

depositar(deposito: number){

  this.saldoatual = this.saldoatual + deposito;
    return " deposito realizado " + deposito + " O saldo atual é  " +this.saldoatual;
}

sacar(saque: number){
     let msgSacarsaldo = "saque aprovado ";
    if(saque > this.saldoatual ){
        msgSacarsaldo  = "saque negado";
        return msgSacarsaldo;
} else{
this.saldoatual = this.saldoatual - saque;
return msgSacarsaldo + saque + " O saldo atual é  " +this.saldoatual;
}

} 
}
let minhaconta = new ContaBancaria("Emilly", 40000);
console.log(minhaconta.consultarSaldotitular())
console.log(minhaconta.depositar(500));
console.log(minhaconta.sacar(200));
console.log(minhaconta.sacar(55000));

let minhaconta2 = new ContaBancaria("Guilherme", 30000);
console.log(minhaconta2.consultarSaldotitular())
console.log(minhaconta2.depositar(500));
console.log(minhaconta2.sacar(200));
console.log(minhaconta2.sacar(35000));

let minhaconta3 = new ContaBancaria("Gabriela", 10000);
console.log(minhaconta3.consultarSaldotitular())
console.log(minhaconta3.depositar(500));
console.log(minhaconta3.sacar(200));
console.log(minhaconta3.sacar(15000));