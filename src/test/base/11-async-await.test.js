import { getImagen } from "../../base/11-async-await";

describe('Pruebas Async await Fetch', ()=>{
    test('debe de retornar el url de una imagen ', async()=>{
        
        const url = await getImagen();
        console.log(url);
        
        expect(url.includes("https://")).toBe(true);

    });
});