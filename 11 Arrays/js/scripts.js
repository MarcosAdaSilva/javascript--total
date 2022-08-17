var objeto = {
  nome: "Marcos",
  idade: 43,
  profissão: "Programador" ,
  estaTrabalhando: true, 
};

console.log(objeto);

console.log(typeof objeto);

console.log(objeto.nome);
console.log(objeto.idade);
console.log(objeto.profissão);

console.log("O meu nome é " + objeto.nome);

//mudando a propriedade do obejeto;

objeto.nome = "João";

console.log(objeto.nome);

console.log(objeto);

objeto.graduação = true;

console.log(objeto);