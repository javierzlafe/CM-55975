

//COMO DECLARAR UNA FUNCION

 /*   Para declarar una función en JavaScript, se utiliza la palabra clave "function", 
      seguida del nombre de la función y los parámetros que recibe (si los hay), 
   y despues se define el conjunto de instrucciones que la función ejecutará. 
   La sintaxis general para declarar una función es la siguiente:      */   

                /* function nombreFuncion() {
                     instrucciones que ejecutará la función
                }  */                                 

                function saludar (){
                    console.log("Esto es el mensaje de la funcion")
                }


                //saludar()
/* ahora... una funcion hace una tarea especifica, y la idea es que 
el nombre de una funcion sea relacionado con lo que hace 

*/


            //EJEMPLO DE FUNCION CON PARAMETRO
            
            /* ejemplo simple */ 
                            function saludar(nombre) {
                                console.log(`Hola, ${nombre}!`);
                            }


            //ejemplo para calcular el iva
            const IVA = 1.21

function calcularIva(importe){  //Creo funcion con un parametro (importe)
    if (parseFloat(importe)){    // convierto a numero, si el importe es un numero => segui
        let resultado = importe * IVA  //dentro de variable resultado guardo el importe por el IVA
        alert("el importe mas iva es: " + resultado)  //muestro el valor del resultado
    }

}


//ejemplo de una funcion dentro de otra
function calcularPrecioFinal(){  //creo una funcion nueva
    let precioDelProducto = prompt("ingresa el importe del producto:") //pido dato al usuario
    calcularIva(precioDelProducto) //utilizo la funcion ya creada y le paso como parametro la nueva
    alert("el importe final es: " + resultado) //esto se rompe, por el scope de resultado(lo vimos en clase)

}

calcularPrecioFinal()

                    
            //FUNCION CON DOS PARAMETROS

function sumar(numA,numB){
    /* numA= parseInt(prompt("ingrese primer numero")) 
    numB= parseInt(prompt("ingrese segundo numero"))  */

    let resultado = numA + numB
    alert("el resultado de la suma es :" + resultado)
}

//sumar()



            //FUNCIONES CON RETURN

            //ejemplo simple con numeros

            function sumar(num1, num2) {
                let resultado = num1 + num2;
                return resultado;
              }

                 


                //SCOPE 

/* El scope se refiere al alcance de las variables en nuestro código. 

Existen dos tipos de scope en JavaScript: el scope global y el scope local. 
El scope global se refiere a las variables que se definen fuera de cualquier función 
y están disponibles para todo el código. 
En el scope local las variables que se definen dentro de una función y 
sólo están disponibles dentro de esa función. */


let nombre2 = "Juan";
console.log(nombre2); // Juan

function saludar() {
  // Scope local
  let mensaje = "Hola";
  console.log(mensaje + " " + nombre2); // Hola Juan
}

saludar();
console.log(mensaje); // Error: mensaje no está definido



/* Las funciones anónimas son funciones que no tienen un nombre específico */


// Función anónima asignada a una variable
let sumar = function(a, b) {
  return a + b;
}

console.log(sumar(2, 3)); // 5
/* En este ejemplo, se define una función anónima que toma dos parámetros a y b, 
y devuelve su suma. Esta función se asigna a la variable sumar, 
lo que nos permite llamarla utilizando ese nombre. */

 


/* FUNCION DECLARADA VS FUNCION EXPRESADA */
function declarada(){
  console.log("esto es una funcion que se puede llamar desde cualquier lado, sin importar donde se declaro")
}

const funcionExpresada= function (){
  console.log("esta funcion esta asignada a una variable. si la llamo antes de esto, no existe para js")
}



      //FUNCIONES FLECHA O   ARROW FUNCTION


      function normal(a,b){
        return a+b
      }



      let funcionAnonima = function(a, b) {
        return a + b;
      }



      let funcionFlecha = (a, b) => {
        return a + b;
      }


      let funcionFlechaEnLinea = (a, b) => a + b;