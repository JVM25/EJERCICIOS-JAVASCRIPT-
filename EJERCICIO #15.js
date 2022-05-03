let pal_uno = prompt ("Ingresar primer palabra");
console.log("Primera palabra " + pal_uno);
let pal_dos = prompt ("Ingresar segunda palabra");
console.log("Segunda palabra " + pal_dos);
if(pal_uno.length < pal_dos.length) {
    console.log("TRUE, la primer palabra es menor que la segunda");
} else {
    console.log("FALSE, la segunda palabra es menor que la primera");
}
