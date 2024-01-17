

             /*  const frutas = ["manzana", "banana", "naranja"];


                                --FOREACH--



              forEach(): Ejecuta una función para cada elemento del array.
              se podria decir que es como un for, aplicado mas sencillamente a un array

             
              frutas.forEach(function(fruta) {
                console.log(fruta.toUpperCase());
              });
 
                          // MANZANA
                          // BANANA
                          // NARANJA
                          


                                          --MAP--



              map(): Crea un nuevo array con el resultado de llamar a una función para cada elemento del array.
                          
                          const numeros = [1, 2, 3, 4, 5];
                          //declaro constante "doble" y guardo el nuevo array
                          const doble = numeros.map(function(numero) {   //Recorro cada elemento
                            return numero * 2;   //lo multiplico por 2
                          });
                          console.log(doble); // [2, 4, 6, 8, 10]





                                        --FIND--




          El método find se utiliza para buscar un elemento en un array que cumpla con cierta condición, 
          y devuelve el primer elemento que cumple dicha condición.



                                                  const numeros = [2, 4, 6, 8, 10];
                        const encontrado = numeros.find((numero) => numero >= 5);

                        console.log(encontrado); // Output: 6





                                      --FILTER--



              filter(): Crea un nuevo array con todos los elementos que pasan una prueba especificada en una función.
                          
                  const numerosPares = numeros.filter(function(numero) {
                            return numero % 2 === 0; //si lo divido por dos y el resto da 0
                          });
                          console.log(numerosPares); // [2, 4]
        
 */


                                      /* --REDUCE-- */


              /* El método reduce en JavaScript se utiliza para reducir un array a un único valor, 
              aplicando una función de reducción a cada elemento del array. 
              Es decir, se utiliza para procesar cada elemento del array y combinarlos en un solo valor. */

              /* const preciosPrendas = [1, 2, 3, 4, 5];
              const suma = preciosPrendas.reduce((acumulador, valorActual) => acumulador + valorActual);
                                    
              console.log(suma); // Output: 15
 */
           



                                  //SORT

/*               const numeros = [7, 2, 10, 1, 5];

// Ordenar los números de forma ascendente
numeros.sort(function(a, b) {
  return a - b;
});

console.log(numeros);  */

/* 
ana
Ana
ANa
ANA

*/













//EJERCICIO DE LA HAMBURGUESA




class Hamburguesa {
  constructor(nombre, precio, ingredientes, numeroCombo) {
    this.nombre = nombre;
    this.precio = precio;
    this.ingredientes = ingredientes;
    this.numeroCombo = numeroCombo;
  }
}


const hamburguesas = [];

hamburguesas.push(new Hamburguesa("Krusty Burger", 150.00, ['Carne', 'Queso'], 1));
hamburguesas.push(new Hamburguesa("Krusty Burger Doble", 225.00, ['Carne', 'Queso', 'Panceta'], 2));
hamburguesas.push(new Hamburguesa("Krusty Pollo", 150.00, ['Pollo', 'Queso'], 3));
hamburguesas.push(new Hamburguesa("Krusty Mega balde de Pollo", 140.00, ['Pollo', 'Queso', 'Aderezo'], 4));
hamburguesas.push(new Hamburguesa("Super Krusty", 150.00, ['Carne', 'Queso', 'huevo'], 5));
hamburguesas.push(new Hamburguesa("Super Krusty Doble", 180.00, ['Carne', 'Queso', 'huevo'], 6));
hamburguesas.push(new Hamburguesa("Super Krusty Triple", 205.00, ['Carne', 'Queso', 'huevo'], 7));
hamburguesas.push(new Hamburguesa("Krusty Vegan", 125.00, ['Espinaca', 'Soja'], 8));

console.log(hamburguesas);




//EJERCICIO DE HAMBURGUESA NUMERO 2


const combosCaros = hamburguesas.filter(hamburguesa => hamburguesa.precio > 200);

if (combosCaros.length > 0) {
  console.table(combosCaros);
} else {
  console.warn('No se han encontrado productos coincidentes.');
}




//desafio hamburguesa con alitas



const resultadoalitas = hamburguesas.find(hamburguesa => hamburguesa.nombre.toLowerCase().includes('alitas'));


if (resultadoalitas) {
  alert(`Combo encontrado: ${resultadoalitas.nombre}`);
  console.log(`Precio del combo "${resultadoalitas.nombre}": ${resultadoalitas.precio} pesos.`);
} else {
  console.warn('No existe un combo asi.');
}