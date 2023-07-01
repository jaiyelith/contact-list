let nombresContactos = ["Giovanny Hernandez" , "Jaime Gonzalez" , "Dailibeth Lugo" , "Jesus Fuentes"];

/*Funcion para agregar un nuevo contacto a la lista*/
function agregarNuevoContacto(contacto){
    return nombresContactos.push(contacto);
}

/* agregarNuevoContacto("Graciela Zambrano");
console.log(agregarNuevoContacto); */

/* Funcion para eliminar un contacto de la lista*/
function suprimirContacto(contacto){
    for(let i = 0; i < nombresContactos.length; i++){
        if(nombresContactos[i] == contacto){
            return nombresContactos.splice(i, 1);
        }
    }
}

/*suprimirContacto("Jaime Gonzalez");
console.log(nombresContactos);*/


/* Funcion para imprimir la lista de contactos*/
function imprimirContacto(){
    for (const contacto of nombresContactos) {
        console.log(contacto);
    }
}

/*imprimirContacto();
console.log(nombresContactos);*/