abstract class Funcionario2 {
    private nome: string;
    protected salario: number;

    constructor(nome: string, salario: number) {
        this.nome = nome;
        this.salario = salario;
    }


    abstract CalcularSalarioMensal(): number;

}

class Gerente extends Funcionario2 {
    constructor() {
        super("Fernando", 2000)
    }
    CalcularSalarioMensal(): number {
        let NovoSalario = (this.salario + ((10 / 100) * this.salario));

        return NovoSalario
    }
}

class Desenvolvedor extends Funcionario2 {
    constructor() {
        super("Marcio", 4000)
    }
    CalcularSalarioMensal(): number {
        return this.salario

    }

}


const gerente = new Gerente();
console.log("Salário do gerente: " + gerente.CalcularSalarioMensal());

const desenvolvedor = new Desenvolvedor();
console.log("Salário do desenvolvedor: " + desenvolvedor.CalcularSalarioMensal());


