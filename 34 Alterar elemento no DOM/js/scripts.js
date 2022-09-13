// selecionar elementos
var title = document.querySelector("#title");

// innerHTML
title.innerHTML = "Testando o texto alterado";

// textContent -> mais utilizado, recomendado e performatico
var subtitle = document.querySelector(".subtitle");

console.log(subtitle);

subtitle.textContent = "Testando o textContent";
