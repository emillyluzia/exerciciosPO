"use strict";
class Funcionario2 {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
}
class Gerente extends Funcionario2 {
    constructor() {
        super("Fernando", 2000);
    }
    CalcularSalarioMensal() {
        let NovoSalario = (this.salario + ((10 / 100) * this.salario));
        return NovoSalario;
    }
}
class Desenvolvedor extends Funcionario2 {
    constructor() {
        super("Marcio", 4000);
    }
    CalcularSalarioMensal() {
        return this.salario;
    }
}
const gerente = new Gerente();
console.log("Salário do gerente: " + gerente.CalcularSalarioMensal());
const desenvolvedor = new Desenvolvedor();
console.log("Salário do desenvolvedor: " + desenvolvedor.CalcularSalarioMensal());
