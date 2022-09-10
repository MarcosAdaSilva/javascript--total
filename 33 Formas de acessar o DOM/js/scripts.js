// sem o querySelector
var itensClasse = document.getElementsByClassName("item");

console.log(itensClasse);

// com o querySelectorAll

var itensQuery = document.querySelectorAll("#lista2 li");

console.log(itensQuery);

var itensQuery2 = document.querySelectorAll("#lista .item");

console.log(itensQuery2);

// queryselector

var itensQuery3 = document.querySelector("#lista .item");

console.log(itensQuery3);
