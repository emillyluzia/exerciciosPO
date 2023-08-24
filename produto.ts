class Produto{
     nome: string;
     valor: number;
     

     constructor(nome: string, valor: number ){
        this.nome = nome;
        this.valor = valor;
       
        
}
 

     apresentarProduto(){
        return " Produto: " + this.nome + " Valor: " + this.valor;
     }

     aplicarDesconto(desconto: number){
          return "Desconto de" + desconto + "% aplicado." +  "Novo preço: R$" + (this.valor -((desconto / 100) * this.valor));
     }
}
let produto1 = new Produto("Tenis Vans", 450, )
let produto2 = new Produto("Tenis Nike", 690, )
let produto3 = new Produto("Tenis Adidas", 300, )
console.log(produto1.apresentarProduto());
console.log(produto2.apresentarProduto());
console.log(produto3.apresentarProduto());
console.log(produto1.aplicarDesconto(30));
console.log(produto2.aplicarDesconto(20));
console.log(produto3.aplicarDesconto(40));