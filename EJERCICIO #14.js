let texto = prompt("Ingresar texto");
console.log(texto);
let num_carácter = texto.length;
console.log("Cantidad de carácteres: " + num_carácter);
if(num_carácter % 2 == 0){
    console.log("Cantidad de carácteres es par, FALSE");
} else {
    console.log("Cantidad de carácteres es impar, TRUE");
}
