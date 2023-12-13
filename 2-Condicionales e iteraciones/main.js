


//ESTRUCTURA DEL IF

//if(condicion){lo que queremos ejecutar}



/* let nombre = prompt("ingresa tu nombre")

if(nombre == "javier"){
    alert("bienvenido javier")
}else if(nombre == "carola"){
    alert("bienvenida caro ")
}else if(nombre == "luciano"){
    alert("bienvenido luciano")
}else{
    alert("no te reconozco, pero te deseo un buen fin de año")
} */






/* let nombre   = prompt("Ingresar nombre");
let apellido = prompt("Ingresar apellido");

if((nombre !="") || (apellido !="")) {
    alert("Nombre: " + nombre + "\nApellido: " + apellido); 
} else {
    alert("Error: Ingresar nombre y apellido");
} */



/* 
producto
precio base
oferta del usuario
negociar
*/


/* alert("vendo algo, escucho ofertas")
let ofertaBase = 2000
let ofertaDelUsuario = parseInt(prompt("ingresa tu oferta")) 
if(ofertaDelUsuario >= ofertaBase){
    alert("ahi te traigo el moño")
}else if(ofertaDelUsuario >= 1500 && ofertaDelUsuario <2000){
    alert("podemos negociar, te paso mi numero")
}else if(ofertaDelUsuario <1500){
    alert("no papa, sos un rata")
}else{
    alert("no se entiende tu oferta, ingresa solo numeros")
}
 */



//estructura del for

/* DESDE;HASTA;ACTUALIZACION */


/* for(let i =0; i<5;i++){
    console.log("estoy contando hasta " +i)
}
 */



/* let iterar = false

while(iterar <5){
    console.log("imprimo el mensaje en consola")
} */




let intentos =1
let identificar = true

do{
    let usuario =  prompt("ingresa tu usuario, (solo 3 intentos)")
    if(usuario ==""){
        break
    }
    if ((usuario == "javier gimenez") && (intentos<=3)){
        alert("bienvenido javier")
        identificar = false
    }else{
        alert("no se identifico el usuario " + usuario)
        intentos++
        if(intentos>3){
            alert("usted supero los 3 intentos")
            break
        }
    }
}while(identificar)