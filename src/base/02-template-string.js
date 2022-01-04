


const nombre   = 'Willian';
const apellido = 'Zamalloa';


// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${ nombre } ${ apellido }`;

export function getSaludo(nombre= 'Jose Luis') {
    return 'Hola ' + nombre+'!';
}

