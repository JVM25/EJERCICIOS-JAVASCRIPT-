let num = prompt("Ingresar número");
console.log("Ingresa un número: " + num);
let descuento = +num * (0,15 / 100);
console.log("Descontando el 15% queda: " + (+num - +descuento));