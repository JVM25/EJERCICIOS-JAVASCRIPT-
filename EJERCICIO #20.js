let num_uno = prompt("Ingresar primer número");
console.log("Primer número: " + num_uno);
let num_dos = prompt("Ingresar segundo número");
console.log("Segundo número: " + num_dos);
let num_tres = prompt("Ingresar tercer número");
console.log("Tercer número: " + num_tres);
if(num_uno < num_dos && num_uno < num_tres) {
    console.log("Número menor: " + num_uno);
} if(num_dos < num_uno && num_dos < num_tres) {
    console.log("Número menor: " + num_dos);
} if(num_tres < num_uno && num_tres < num_dos) {
    console.log("Número menor: " + num_tres);
}