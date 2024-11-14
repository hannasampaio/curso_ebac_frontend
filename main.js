function Jogador(nome, idade, nacionalidade) {
    this.nome = nome;
    this.idade = idade;
    this.nacionalidade = nacionalidade;

    this.apresentar = function () {
        return `Eu sou ${this.nome}, tenho ${this.idade} anos e sou ${this.nacionalidade}.`;
    };
}

function Atacante(nome, idade, nacionalidade, gols) {
    Jogador.call(this, nome, idade, nacionalidade); 
    this.gols = gols;

    this.apresentar = function () {
        return `Eu sou ${this.nome}, tenho ${this.idade} anos e sou ${this.nacionalidade}. Sou atacante e marquei ${this.gols} gols.`;
    };
}

function Goleiro(nome, idade, nacionalidade, defesas) {
    Jogador.call(this, nome, idade, nacionalidade); 
    this.defesas = defesas;

    this.apresentar = function () {
        return `Eu sou ${this.nome}, tenho ${this.idade} anos e sou ${this.nacionalidade}. Sou goleiro e fiz ${this.defesas} defesas.`;
    };
}

const jogador1 = new Atacante("Neymar", 31, "brasileiro", 420);
const jogador2 = new Goleiro("Alisson", 30, "brasileiro", 200);
const jogador3 = new Atacante("Mbappé", 25, "francês", 300);

console.log(jogador1.apresentar()); 
console.log(jogador2.apresentar()); 
console.log(jogador3.apresentar()); 
