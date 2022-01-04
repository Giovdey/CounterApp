import { getHeroeById } from "../../base/08-imp-exp";
import { getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de Heroes', ()=>{
    test('Debe de retorar un heroe por id',()=>{

        const id=1;
        const heroe=getHeroeById(id);
        const heroeData=heroes.find(h => h.id === id);
        expect(heroe).toEqual(heroeData);
        
    });


    test('Debe de retorar undefined si el heroe no existe',()=>{

        const id=11;
        const heroe=getHeroeById(id);
        expect(heroe).toBe(undefined);
    });
    test('Debe de retornar un arreglo con los heroes de DC',()=>{

        const owner='DC';
        const heroe=getHeroesByOwner(owner);
        console.log(heroe);
        const heroeData=heroes.filter(h => h.owner === owner);
        expect(heroe).toEqual(heroeData);
        
    });

    test('Debe de retornar un arreglo con los héroes de Marvel length = 2',()=>{

        const owner='Marvel';
        const heroe=getHeroesByOwner(owner);
        expect(heroe.length).toBe(2);
        console.log(heroe);
         
    });

});