abstract class ContaBancaria2 {
    protected numerodaConta: string;
    protected saldoInicial: number;
    protected titular: string;

    constructor(numerodaConta: string, saldoInicial: number, titular: string) {
        this.numerodaConta = numerodaConta;
        this.saldoInicial = saldoInicial;
        this.titular = titular;
    }

    abstract depositar(valor: number): void;

    abstract sacar(valor: number): void;

    abstract consutarSaldo(valor: number): void;
}

class ContaCorrente extends ContaBancaria2 {
    protected limiteChequeEspecial: number = 0;

    constructor(numerodaConta: string, saldoInicial: number, titular: string, limiteChequeEspecial: number) {
        super(numerodaConta, saldoInicial, titular)
        this.limiteChequeEspecial = limiteChequeEspecial;
    }

    sacarChequeEspecial(saque: number): void {

        if (this.limiteChequeEspecial > saque) {

            console.log("Saldo indisponível para saque")
        }
        else {
            this.limiteChequeEspecial = this.limiteChequeEspecial - saque
            console.log("Saque R$:  " + saque + ",00 realizado com sucesso. Saldo atual é de: R$" + (this.limiteChequeEspecial))
        }
    }

    depositar(valor: number): void {

        this.saldoInicial = this.saldoInicial + valor

        console.log("Usuário: " + this.titular + " fez depósito de:" + valor + ",00. Saldo atual é de:" + this.saldoInicial);
    }

    sacar(valor: number): void {

        if ((this.saldoInicial + this.limiteChequeEspecial) < valor) {

            console.log("Saldo indisponível para saque");
        }
        else {
            this.saldoInicial = this.saldoInicial - valor
            console.log("Saque realizado com sucesso");
        }
    }

    consutarSaldo(): number {
        return this.saldoInicial;
    }
}

class ContaPoupança extends ContaBancaria2 {

    constructor(numerodaConta: string, saldoInicial: number, titular: string) {
        super(numerodaConta, saldoInicial, titular)
       
    }

    calcularRendimentoAnual(taxa: number): number {
        let NovoSalario = (this.saldoInicial + ((taxa / 100) * this.saldoInicial));

        return NovoSalario
    
    }

    depositar(valor: number): void {

        this.saldoInicial = this.saldoInicial + valor

        console.log("Usuário: " + this.titular + " fez depósito de:" + valor + ",00. Saldo atual é de:" + this.saldoInicial);
    }

    sacar(valor: number): void {

        if ((this.saldoInicial) < valor) {

            console.log("Saldo indisponível para saque");
        }
        else {
            this.saldoInicial = this.saldoInicial - valor
            console.log("Saque realizado com sucesso");
        }
    }

    consutarSaldo(): number {
        return this.saldoInicial;
    }
}


const contaCorrente = new ContaCorrente("um, dois e tres", 4000 , "emilly", 5000);
console.log(contaCorrente.consutarSaldo());
contaCorrente.sacar(30);
contaCorrente.depositar(300);
contaCorrente.sacarChequeEspecial(50);

const contaPoupança = new ContaPoupança("quatro,cinco e seis", 5000 , "luzia");
console.log(contaPoupança.consutarSaldo());
contaPoupança.sacar(30);
contaPoupança.depositar(300);
contaPoupança.calcularRendimentoAnual(50);