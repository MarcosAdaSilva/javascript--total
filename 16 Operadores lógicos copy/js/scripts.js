var idade = 14;
var nome = "Marcos";

if (nome == "Marcos" || idade > 14) {
  console.log("Pode entrar na aula de esgrima");
} else {
  console.log("Não pode netrar");
}

if ((nome == "Marcos" && 15 > 20) || 10 == 10) {
  console.log("testando");
}

if ((nome == "João" || 15 > 20) && 10 == 10) {
  console.log("Testando");
} else {
  console.log("não entra");
}

if (nome == "João" || (30 > 20 && 10 == 10)) {
  console.log("Testando");
} else {
  console.log("assim entra");
}
