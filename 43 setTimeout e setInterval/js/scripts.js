// setTimeout 1 = 1 milesegundo // 1000= 1 segundo
console.log("Antes do setTimeout");

setTimeout(function () {
  console.log("Testando o setTimeout");
}, 2000);

console.log("Depois do setTimeout");

// setInterval
setInterval(function () {
  console.log("Testando setInterval");
}, 1000);
