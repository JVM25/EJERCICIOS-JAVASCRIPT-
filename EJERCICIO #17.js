let número = parseInt(prompt("Ingresar número entero"));
console.log("Número: " + número);
if(número < 0) {
    console.log("El valor absoluto es: " + (número * (-1)));
} else {
    console.log("El valor absoluto es: " + número);
}