import '@testing-library/jest-dom';
import { getSaludo } from '../../base/02-template-string';
describe('Pruebas 02-templates-string.js',()=>{
    test('getSaludo debe retornar hola William',()=>{
       
        const nombre='William';
        const saludo=getSaludo(nombre);
        expect(saludo).toBe('Hola '+nombre+'!');

    })
    
    test('getSaludo por defecto debe de retornar Hola Jose Luis ', () => {      
       

    });
  
})