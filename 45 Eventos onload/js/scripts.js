// clearTimeout na prática
var x = 0;

var myTimer = setTimeout(function () {
  console.log("o x é 0");
}, 1500);

x = 5;

if (x > 0) {
  clearInterval(myTimer);
  console.log("o x passou de 0");
}

// clearSetInterval na prática

var myInterval = setInterval(function () {
  console.log("Imprimindo o interval");
}, 500);

setTimeout(function () {
  console.log("Não precisamos mais repetir");
  clearInterval(myInterval);
}, 1500);
