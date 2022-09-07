// tolowerCase e toUpperCase

var frase = "Esta é a frase que vamos manipular";

var fraseCaixaAlta = frase.toUpperCase();

console.log(fraseCaixaAlta);

console.log(frase.toLowerCase());

// trim

var nome = "       Marcos         ";

var nomeTrim = nome.trim();

console.log(nome);
console.log(nomeTrim);

// split

console.log(frase.split(" "));

var tags = "PHP, JavaScript, HTML, CSS";

console.log(tags.split(", "));

// lastIndexof

var fraseDois = "Eu quero a última palavra testedesta frase de teste";

console.log(fraseDois.indexOf("teste"));

console.log(fraseDois.lastIndexOf("teste"));
