let nombresContactos = [];

//Función para añadir un nuevo contacto a una lista
function agregarNuevoContacto(nombre, apellido, telf, ciudad, direccion){
    const contacto = {
        id: nombresContactos.length + 1,
        nombre,
        apellido,
        telefono: telf,
        ubicaciones: {
            ciudad,
            direccion
        }
    }
    return nombresContactos.push(contacto);
}

agregarNuevoContacto("Giovanny", "Hernandez", "3017765480", "Bogotá", "Portal de Madelena");
agregarNuevoContacto("Jaime", "Gonzalez", "3028896215", "Bucaramanga", "Madelena Urbano 2");
agregarNuevoContacto("Dailibeth","Lugo", "3008829687", "Trujillo", "La Rinconada");
agregarNuevoContacto("Jesus", "Fuentes", "3037946213", "San Francisco", "La Noria");
agregarNuevoContacto("Jimena", "Gonzalez", "3037746213", "Maturin", "Los Iranies");
agregarNuevoContacto("Andres", "Sarmiento", "3037946813", "San Gil", "San Gil 2058");
agregarNuevoContacto("Celis", "Garcia", "3037246213", "Maracaibo", "La Libertad");
console.log("Mi lista de contactos es:");
console.log(nombresContactos);

function encontrarContacto(nombreContacto){
    const nuevoContacto = nombreContacto.split(" ");
    const nombre = nuevoContacto[0];
    const apellido = nuevoContacto[1];
    for(let i = 0; i < nombresContactos.length; i++){
        if(nombresContactos[i].nombre === nombre && nombresContactos[i].apellido === apellido){
            return i;
        }
    }
    return -1;
}

//Crea una función para eliminar un contacto existente de la lista
function suprimirContacto(nombreContacto) {
    const indice = encontrarContacto(nombreContacto);
    if (indice == -1){
        return nombresContactos;
    }
    return nombresContactos.splice(indice, 1);
}
console.log("Mi lista de contactos actualizada es");
suprimirContacto("Andres Sarmiento");
suprimirContacto("Jaime Gonzalez");
console.log(nombresContactos);

//Crea una función para imprimir en consola los contactos presentes en la lista
function imprimir(){
    for (const contacto of nombresContactos) {
        console.log(contacto);
    }
}
console.log("Mi lista de contactos actual es:");
imprimir();

//Bonus: Añade una función que permita actualizar un contacto
function renovarContacto(nombreContacto, datos) {
    const indice = encontrarContacto(nombreContacto);
    if (indice == -1){
        return nombresContactos;
    }
    nombresContactos[indice] = { ...nombresContactos[indice], ...datos };
}
console.log("Lista de contacto actual:");
renovarContacto("Jesus Fuentes", { telefono: "99887765" });
renovarContacto("Dailibeth Lugo", { apellido: "Rangel"});
imprimir();

