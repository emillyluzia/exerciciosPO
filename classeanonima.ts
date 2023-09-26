const pessoa = new class {
    private primeiroNome = "josé"
    private ultimoNome = "da Silva"
    getNomeCompleto(){
        return this.primeiroNome + " " + this.ultimoNome;
    }
}

console.log(pessoa.getNomeCompleto());

const treinadorpessoal = new class{
    private rotina: {nome: string; duracao: number}[] = [];

    adicionarExercicios(nome: string, duracao: number): void {
        this.rotina.push({nome, duracao});
    }

    calcularTempoTotal():number{
        let soma = 0;
        this.rotina.forEach(item => soma += item.duracao);
        //this.rotina.forEach(item => soma = soma + item.duracao);
        return soma;
    }
}

treinadorpessoal.adicionarExercicios("Corrida",30);
treinadorpessoal.adicionarExercicios("Flexões",15);
treinadorpessoal.adicionarExercicios("Agachamentos",20);
console.log("Tempo total necessário para a rotina: "+treinadorpessoal.calcularTempoTotal()+" em minutos");