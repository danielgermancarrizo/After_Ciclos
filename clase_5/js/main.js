/* let nombre = "dani";
let tel = "12345432";
let direccion = "Calle falsa 123";

let nombre1="Julian"
let tel1="1234543245"
let direccion1="calle 112334" */

//Objetos literales
const contacto = {
  nombre: "Dani",
  apellido: "Lopez",
  tel: "1234321321",
  direccion: "Calle falsa 123",
};
const contacto1 = {
  nombre: "Ivan",
  apellido: "Dujaut",
  tel: "019837272",
  direccion: "Frances 123",
  email: "ivan@mail.com",
};

/* console.log(contacto);
console.log(contacto["nombre"]);
/* console.log(contacto["apellido"]); */
/* console.log(contacto["tel"]); */
/* console.log(contacto["direccion"]); */
/* console.log(contacto["email"]); */
/* console.log();
console.log(contacto1);
console.log(contacto1.nombre); */
/* console.log(contacto1.apellido); */
/* console.log(contacto1.tel); */
/* console.log(contacto1.direccion);
console.log(contacto1.email); */

/*contacto.tel = "09290272193";

console.log(contacto.nombre);
console.log(contacto.tel);
contacto1["tel"] = "1234";
console.log(contacto1.nombre);
console.log(contacto1.tel);

contacto.email = "dani@mail.com";
console.log(contacto);

console.log("Nombre: " + contacto.nombre + " email: " + contacto.email); */

//funcion constructora
function Auto(marca, modelo, anio, color, patente) {
  this.marca = marca;
  this.modelo = modelo;
  this.anio = anio;
  this.color = color;
  this.patente = patente;

  //metodo
  this.hablar=function (){alert('Hola soy el auto marca '+ this.marca)}
}

const auto1= new Auto("Toyota","Etios", 2014,"gris plata", "ab1234cd")
const auto2= new Auto("Ford","Falcon", 1985,"gris topo", "c190293638")
/* let marca=prompt("Ingresa  marca")
let color=prompt("Ingresa  color")
let modelo=prompt("Ingresa  modelo")
let anio=prompt("Ingresa anio")
let patente=prompt("Ingresa patente") */

/* const auto3= new Auto(marca,modelo,anio,color, patente)
console.log(auto3); */
/* console.log(auto1);

console.log(auto1.marca);
console.log(auto2);
console.log(auto2.marca);
auto2.puertas= 4
console.log(auto2.puertas); */
/* 
auto1.hablar()
auto2.hablar() */

function Producto(nombre, precio){
  this.nombre= nombre;
  this.precio= parseFloat(precio);

  this.sumarIva= ()=>{this.precio = this.precio * 1.21}
}
const arroz= new Producto('Arroz', "240")
const arvejas= new Producto('Arvejas', "90")

console.log(arroz);
console.log(arroz.precio);
arroz.sumarIva()
console.log(arroz.precio);


console.log(arvejas);
console.log(arvejas.precio);
arvejas.sumarIva()
console.log(arvejas.precio);

console.log("nombre" in arroz);
console.log("nombre" in arvejas);
console.log("peso" in arvejas);

console.log("email" in contacto);
console.log("email"  in contacto1);
 for (const propiedad in auto1) {
  console.log(propiedad + ": " + auto1[propiedad]);
 }

