var idade = 16;
var nome = "Marcos";

if (nome == "Marcos" && idade == 16) {
  console.log("O Marcos pode entrer na aula de esgrima");
} else {
  console.log("O Marcos não pode entrar na aula");
}

if (1 == 1 && 3 > 2 && true) {
  console.log("Passou");
}

if (1 == 1 && 3 > 3 && true) {
  console.log("Passou");
} else if (nome === "Marcos" && idade >= 14) {
  console.log("Aqui passa");
}
