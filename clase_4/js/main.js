/* let opcion = prompt(
  "Selecciona un gusto de helado \n1-Americana \n2-Chocolate \n3-Sambayon \n4-Dulce de leche \n5-Menta granizada \n6-mas sabores"
); */

/* if (opcion == "1") {
  alert("Seleccionaste Americana");
} else if (opcion == "2") {
  alert("Seleccionaste Chocolate");
} else if (opcion == "3") {
  alert("Seleccionaste Sambayon");
} else if (opcion == "4") {
  alert("Seleccionaste Dulce de leche");
} else if (opcion == "5") {
  alert("Seleccionaste Menta Granizada 🥇 ");
} else {
  alert("Opción no válida");
} */
/* 
//switch
switch (opcion) {
  case "1":
    alert("Seleccionaste Americana");
    break;
  case "2":
    alert("Seleccionaste Chocolate");
    break;
  case "3":
    alert("Seleccionaste Sambayon");
    break;
  case "4":
    alert("Seleccionaste Dulce de leche");
    break;
  case "5":
    alert("Seleccionaste MEnta granizada");
    break;
  case "6":
  
    let masgustos=prompt(
      "Selecciona un gusto de helado \n1-Granizado \n2-Chocolate \n3-Sambayon \n4-Dulce de leche \n5-Menta granizada \n6-mas sabores"
    );

    switch (masgustos) {
      case '1':
        
        break;
    
      default:
        break;
    }
    break;

  default:
    alert("Opción no válida");
    break;
} */

//funciones
//declaracion
function saludar() {
  //bloque de ejecucion
  console.log("Hola tarola");
}

//llamar o invocar
/* for (let i = 0; i < 6; i++) {
  saludar();
}
 */
//parametros
function saludarConNombre(nombre) {
  //parametro
  console.log("Hola " + nombre);
}

/* let nombreUsuario = prompt("Ingresa tu nombre");

let momentoDelDia = prompt("Ingresa el momento del dia");
/* 
saludarConNombre("Dani")
saludarConNombre(nombreUsuario)//argumento */

/*function saludoConNombreYMomento(nombre, momento) {
  alert("Buenos/as " + momento + "s " + nombre);
}

saludoConNombreYMomento(nombreUsuario, momentoDelDia);
saludoConNombreYMomento(momentoDelDia, nombreUsuario) */
function mostrar(mensaje) {
  console.log(mensaje);
}

/* let n1 = parseFloat(prompt("ingresa un numero"));
let n2 = parseFloat(prompt("ingresa un numero")); */
let resultado = 0;
/* mostrar(resultado)

function suma(num1, num2) {
  resultado = num1 + num2;
}

suma(n1, n2);
mostrar("el resultado de la operacion es: ")
mostrar(resultado) */

//return
function sumar(num1, num2) {
  return num1 + num2;
}
/* resultado = sumar(12, 34);
console.log(resultado);
resultado = sumar(-33, 12);
console.log(resultado); */

function calculator(num1,num2, op){
  switch (op) {
    case "+":
      return num1 + num2;
      
    case "-":
      return num1 - num2;
      
    case "*":
      return num1 * num2;
      
    case "/":
      return num1 / num2;//validar cuando num2 vale 0
      
  
    default:
      return 0;
  }
}
function intentos(){
  
}

let suma= calculator(12,32, "+")
let resta= calculator(44,2.4, "-")
let multi= calculator(12,0, "*")
let divi= calculator(24,2, "/")
let error= calculator(24,2, "uh")
/* 
console.log(suma);
console.log(resta);
console.log(multi);
console.log(divi);
console.log(error); */

//Ambito de las variables (scope)

let result= 0;//global 

function suma2(num1, num2) {
  let result = num1 + num2;//local
  console.log(result);//local
}
function resta2(num1, num2) {
  let result = num1 - num2;//local
  console.log(result);//local
}

suma2(12,34)
resta2(-20,3)

console.log(result);//global

//funciones anonimas
const funcionAnonima = function (nombre){
  console.log('No tengo '+ nombre);
}
funcionAnonima("Dani")


