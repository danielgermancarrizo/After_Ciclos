//Cajero automático
//Debemos generar un script para la operación de un cajero automático
/* El mismo tiene que: 
1- Mostrar un mensaje de bienvenida.
2- Permitir hasta 3 intentos de ingreso con el PIN del cliente
  2a- Si ingresa correctamente dar mensaje de Bienvenida y mostrar las opciones del punto 3.
  2b- Terminados los intentos informar al cliente que se comunique con el banco.
3- En pantalla mostrar las siguientes opciones: 
  a- Saldo
  b- Retiro
  c- Depósito
  d- Salir 
4- Al finalizar mostrar mensaje.
*/

let pinUsuario = "5701";
let ingreso = false;
/* alert("Bienvenido al banco"); */

for (let i = 2; i >= 0; i--) {
  let pinIngresado = prompt(
    "Ingresa tu PIN Tenes " + (i + 1) + " oportunidades"
  );
  /* alert(pinIngresado); */
  if (pinIngresado == pinUsuario) {
    alert("Bienvenido Cliente, Ya podes operar");
    ingreso = true;
    break;
  } else {
    alert("Error");
  }
}

if (ingreso) {
  let saldo=20000;
  let opcion=prompt(
    "Elegí una opción: \n1- Saldo. \n2 - Retiro de dinero. \n3 - Depósito. \nPresioná X para finalizar."
  );
    while(opcion != "x"){
      if(opcion=="1"){
        alert("Tu saldo es $" + saldo)
      }else if(opcion == "2"){
        let retiro= parseInt(prompt("Ingresa el monto a retirar"));
            saldo = saldo -retiro;
            
            alert("Bien ahi tu saldo es: $"+ saldo)

      }else if(opcion == "3"){
        let deposito = parseInt(prompt("Ingresa el monto a depositar"));
        saldo= saldo + deposito
        alert("Bien ahi tu saldo es: $"+ saldo)
      }else{
        alert("Opcion no valida")
      }
      opcion = prompt(
        "Elegí una opción: \n1- Saldo. \n2 - Retiro de dinero. \n3 - Depósito. \nPresioná X para finalizar.");
    }
} else {
  alert("Retendremos tu tarjeta. \nComunicate al 0800-notesolucionamosnada");
}
