//condicionales
let n1 = 2;
let n2 = 3.4;
const PI = 3.14;
const KEYPASS = "1234";
let resultado = n1 + n2;
/* let ingreso = prompt("Ingresa tu nombre"); */

//parseo
/* let numero1 = prompt("Ingresa un número");
let numero2 = parseFloat(prompt("Ingresa un número"));
numero1 = parseFloat(numero1);

let resultado2 = numero1 + numero2; */

/* alert(resultado); */
/* 
alert(numero1);
alert(numero2);
alert(resultado2); */

/* if (condicion)entonces accion */
/* let estado=prompt("Lueve afuera? Ingrese 1  para si 2 para no")
// = asignacion comparacion == 

if(estado == "1"){//comaparacion ==
    console.log("Llevo paraguas");
}else{
    console.log("NO Llevo paraguas");

} */

//let ingreso = parseFloat(prompt("Ingresa un número"));

/* if(ingreso < 10){
    console.log("el numero es menor o igual que 10, el numero es: " + ingreso);
}else{
    console.log("el numero es mayor que 10, el numero es: " + ingreso);
} */

/* let resultSuma = 10;
let ingresoDelALumno=parseFloat(prompt("Cual es el resultado de 2 * 5"));


//variables booleanas
  let verdadero= ingresoDelALumno == resultSuma;

  console.log(verdadero);

if(verdadero ){
    console.log("Bienvenido a la plataforma");
}else{
    console.log("Lo siento");
}
 */

//if else if else
let precio = 10;
/* 
if(precio < 10){
    console.log("Valor del producto menor que 10")
}else if(precio < 20){
    console.log("Valor del producto menor que 20")

}else if(precio < 60){
    
    console.log("Valor del producto menor que 60")
}else{
    console.log("Valor del producto mayor que 100")

}
 */
/* 
if(precio != 10){
    console.log("es igual");
}else{
    console.log("no es igual");
} */

let nombre = prompt("ingresa tu nombre");
//let pass = prompt("ingresa tu pass");

/* if(nombre != ""){
    if(pass == KEYPASS){

        console.log("bienvenido " + nombre);
    }else{
        console.log("User o pass incorrectos");
    }

}else{
    console.log("campos requeridos");
} */

//operador && AND  las dos condiciones tienen que ser true

/* if (nombre != "" && pass != "") {
  console.log("bienvenido");
} else {
  console.log("campos requeridos");
} */

//or || o si una condicion es true Todo es true

/* if (nombre != "" || pass != "") {
  console.log("bienvenido");
} else {
  console.log("campos requeridos");
} */

if (nombre == "Dario" || nombre == "DARIO" || nombre == "DaRiO") {
    console.log("bienvenido " + nombre);
  } else {
    console.log("Hola Desconocido");
  }