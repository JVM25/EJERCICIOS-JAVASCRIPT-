let kilometros = prompt("Ingresar cantidad de kilometros recorridos en motocicleta");
console.log("Kilometros recorridos: " + kilometros);
let combustible = prompt("Ingresar litros de combustible consumidos durante el recorrido");
console.log("Litros de combustible gastados: " + combustible);
let consumo = +kilometros / +combustible;
console.log("El consumo por kilómetros es de " +consumo);