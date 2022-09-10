// sem o querySelector
var itensClasse = document.getElementsByClassName("item");

console.log(itensClasse);

// com o querySelectorAll

var itensQuery = document.querySelectorAll("#lista2 li");

console.log(itensQuery);

var itensQuery2 = document.querySelectorAll("#lista .item");

console.log(itensQuery2);

// queryselector item

var itensQuery3 = document.querySelector("#lista .item");

console.log(itensQuery3);

// queryselector elemento

var lista = document.querySelector("#lista");

console.log(lista);

var span = document.querySelector("#paragrafo span");

console.log(span);
