var nombre1 = prompt("Ingresar su nombre");
var nombre2 = prompt("Ingresar otro nombre");
console.log("Su nombre: " + nombre1);
console.log("Otro nombre: " + nombre2);
if(nombre1[0] == nombre2[0] || nombre1[nombre1.length-1] == nombre2[nombre2.length-1]){
   console.log("True");
}else{
    console.log("False");
}