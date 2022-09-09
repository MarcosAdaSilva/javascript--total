console.log(this);

alert("olá");
this.alert("olá 2");

let pessoa = {
  nome: "Marcos",
  idade: 29,
  falar: function () {
    console.log("olá, tudo bem?");
  },
  dizerNome: function () {
    console.log("o meu nome é " + this.nome);
  },
  aniversario: function () {
    this.idade += 1;
  },
};

pessoa.dizerNome();

console.log(pessoa.idade);

pessoa.aniversario();
pessoa.aniversario();
pessoa.aniversario();

console.log(pessoa.idade);
