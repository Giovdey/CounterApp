import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import React from 'react';
import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <PrimeraApp/>',()=>{
    test('debe mostrar el subtitulo enviado por el props',()=>{
        const Saludo='Hola, soy Naruto';
        const subti="Hola, soy un subtitulo de Naruto";
        const wrapper= shallow(
                <PrimeraApp
                    saludo={Saludo}
                    subti={subti}
                />);
        const textoParrafo=wrapper.find('p').text();
        // console.log(textoParrafo);
        expect(textoParrafo).toBe(subti);

    });



    // test('debe de mostrar el mensaje "Hola, soy Naruto"',()=>{
    //     const Saludo='Hola soy Naruto';
    //     const {getByText}= render(<PrimeraApp saludo={Saludo}/>);
    //     expect(getByText(Saludo)).toBeInTheDocument;

    // });

});


