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
console.log(nombresContactos);

//Función para borrar un contacto existente de la lista
function suprimirContacto(nombreContacto){
    const nuevoContacto = nombreContacto.split(" ");
    const nombre = nuevoContacto[0];
    const apellido = nuevoContacto[1];
    for(let i = 0; i < nombresContactos.length; i++){
        if(nombresContactos[i].nombre === nombre && nombresContactos[i].apellido === apellido){
            return nombresContactos.splice(i, 1);
        }
    }
}

suprimirContacto("Jaime Gonzalez");
suprimirContacto("Jesus Fuentes");
console.log(nombresContactos);

//Función para imprimir en consola los contactos presentes en la lista
function imprimirContacto(){
    for (const contacto of nombresContactos) {
        console.log(contacto);
    }
}

imprimirContacto();