


                                          //OBJETOS


/*los objetos en JavaScript fueron evolucionando para meter funcionalidades más avanzadas,
que permite a los desarrolladores crear aplicaciones más complejas y sofisticadas. pero usando menos codigo
 */

//OBJETOS LITERALES


const empleado1={
    nombre: "javier",
    cargo: "profesor",
    ingreso : "2021-03-25",   // formato ISO, formato internacional.  (como en el imput date tipe de html)
    edad : 31,
}

const empleado2={
    nombre: "javier",
    cargo: "profesor",
    ingreso : "2021-03-25", 
    edad : 31,
}

                console.log(empleado1.nombre.length)
                console.log(empleado1.length)  //tira undefined, necesito especificar a que le estoy pegando


//problema de limitacion en los años 2000

                    const empleado3 = empleado1

//hago una copia de empleado 1, pero si le cambio algo al 3, cambia en el 1




//OBJETO CONSTRUCTOR o tambien conocido como FUNCIONES CONSTRUCTORAS

/*                 function Producto (id, nombre, importe, stock){  //primera inicial con mayuscula para diferenciar
                    this.id = id
                    this.nombre = nombre
                    this.importe = importe
                    this.stock = stock
                } */

/*
"this" permite el acceso a las propiedades y métodos de un objeto dentro de una función. 
Por ejemplo, si tenemos un objeto que se llama "persona" con una propiedad "nombre", 
se puede acceder a ella dentro de una función utilizando "this.nombre". */


/*                 const producto1 = new Producto (1, "teclado", 1500, 50)
                const producto2 = new Producto (1, "mouse", 800, 20)
                const producto3 = new Producto (1, "monitor", 40000, 10) */



function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.saludar = function() {
      console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
      
    }
  }
  
  // Crear dos instancias del objeto Persona
  const persona1 = new Persona("Juan", 30);
  const persona2 = new Persona("Maria", 25);
  
  // Llamar al método saludar de las instancias creadas
  persona1.saludar(); // Imprime "Hola, mi nombre es Juan y tengo 30 años."
  persona2.saludar(); // Imprime "Hola, mi nombre es Maria y tengo 25 años."



/*   En este ejemplo, se define un objeto constructor llamado "Persona" que tiene dos propiedades ("nombre" y "edad") 
  y un método ("saludar"). 

  "this" se usa para asignar los valores de las propiedades "nombre" y "edad" 
  a la variable que se está creando con el constructor.

  se llama al método "saludar" para imprimir un mensaje personalizado para cada uno 
  utilizando la palabra "this" para acceder a las propiedades específicas de cada objeto. */






                                    //METODOS Y OPERACIONES CON OBJETOS

        IVA = 1.21

        /* function Producto (id, nombre, importe, stock){  //primera inicial con mayuscula para diferenciar
        this.id = id
        this.nombre = nombre
        this.importe = importe
        this.stock = stock
        //defino un metodo
        this.importeConIva= function(){  //creo una funcion anonima
            return this.importe * IVA   //retorno el valor del importe, multiplicado por el iva
        }
    }
// console.log(producto1.importeConIva())  si lo pongo aca no funciona, porque todavia no se leyo el producto1

const producto1 = new Producto (1, "teclado", 1500, 50)
const producto2 = new Producto (1, "mouse", 800, 20)
const producto3 = new Producto (1, "monitor", 40000, 10)

console.log(producto1.importeConIva())
 */



                                //CLASES


// Definición de la clase Persona
class Persona {
    // Constructor de la clase
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    // Método para obtener detalles de la persona
    obtenerDetalles() {
      return `Nombre: ${this.nombre}, Edad: ${this.edad}`;
    }
  }
  
  // La creación de una instancia de la clase Persona es igual que en la funcion constructora
  const persona = new Persona('Juan', 30);
  
  
  console.log(persona.obtenerDetalles()); 
  










//STORAGE  

//HAY 4 METODOS PARA EL USO DEL STORAGE

/* 
setItem() permite crear una clave y asignarle un valor
getItem() permite recuperar o traer una clave desde el local storage
removeItem() para eliminar un dato
clear() limpiar
 */


localStorage.setItem('bienvenida', '¡Hola Coder!');


function crearClaveEnLocalStorage(){
localStorage.setItem("miClave", "coderHouse")
}

    //AHORA FALTARIA HABLAR DEL SESION STORAGE.

    /* El sesion storage funciona de la misma manera que el local, pero la diferencia es que solo va a poder
        recuperar los datos, pero en el momento en que la sesion este activa, una vez que se termina la sesion,
        ya no se puede acceder a ningun dato. se pierde todo digamos. por ejemplo las sesiones de los bancos */





        //Ciclo para recorrer las claves almacenadas en el objeto localStorage
/* for (let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i);
    console.log("Clave: "+ clave);
    console.log("Valor: "+ localStorage.getItem(clave));
}
 */



//                             JSON

/*(JavaScript Object Notation) es un formato de intercambio de datos, ligero y fácil de leer y escribir. 
Es basicamente un formato de texto que se usa para enviar datos entre aplicaciones web y servidores. 

En JavaScript, los objetos JSON se definen usando una sintaxis de pares clave-valor 
similar a la sintaxis de los objetos JavaScript. 
empezo con javascript, y se traslado a todos los lenguajes de programacion ya...


supongamos que en ves de un texto comun, quiero enviar un objeto al local storage


*/
    /* en JSON tenemos dos metodos.  parse() y stringify() 
    para poder transofrmar todo a un texto que se pueda interpretar en el local storage,
    hay que usar stringify al final de la funcion*/
