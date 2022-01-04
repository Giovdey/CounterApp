import { retornaArreglo } from "../../base/07-deses-arr";


describe('Pruebas de destructuración',()=>{

    test('Debe retornar un srint o un numero',()=>{
        //const arr=retornaArreglo();
        const [letras,numeros]=retornaArreglo();
        //expect(arr).toEqual(['ABC',123]);
        expect(letras).toBe('ABC');
        console.log(typeof letras);
        expect(typeof letras).toBe('string');

        expect(numeros).toBe(123);
        console.log(typeof numeros);
        expect(typeof numeros).toBe('number');
    }); 
    
})