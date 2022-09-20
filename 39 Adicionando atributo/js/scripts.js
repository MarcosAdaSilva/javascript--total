// adcionar elemento
var title = document.querySelector("#title");

title.setAttribute("class", "testando-atributo");

console.log(title);

var btn = document.querySelector("#btn");

btn.setAttribute("disabled", "disabled");

var subtitle = document.querySelector(".subtilte");

subtitle.setAttribute("id", "título-2");

// remover atributo

var lista = document.querySelector("#lista");

lista.removeAttribute("id");
