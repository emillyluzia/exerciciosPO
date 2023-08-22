class Gato{
    nome: string;
    raca: string;
    idade: number;

    constructor(nome: string, raca: string, idade: number)
    {
        this.nome = nome;
        this.raca = raca;
        this.idade = idade;
    }

    apresentar(){
       return " Oi, eu sou " + this.nome + " um " 
       + this.raca + " de " + this.idade + " anos ";
    }

    apresentarPara(humano: string){
        return " Olá "+ humano +", eu sou" + this.nome + " um " 
        + this.raca + " de " + this.idade + " anos ";
    }

}

let Freddy = new Gato(" Freddy ", " Persa ", 2);
let Bob = new Gato(" Bob ", " Siamês ", 4);


console.log(Freddy.nome);
console.log(Bob.nome);
console.log(Freddy.apresentar());
console.log(Bob.apresentar());
console.log(Bob.apresentarPara("Emilly"));