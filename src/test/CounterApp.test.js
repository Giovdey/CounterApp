import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe('Pruebas con el counter APP <CounterApp/>',()=>{
    test('debe incrementar el valor del boton +1',()=>{
        const wrapper=shallow(<CounterApp value={100} />);
        const btn1=wrapper.find('button').at(0).simulate('click');
        const counterText=wrapper.find('p').text().trim();
        expect(counterText).toBe('101');
    });

    test('debe decrementar el valor del boton -1',()=>{
        const wrapper=shallow(<CounterApp value={100} />);
        const btn2=wrapper.find('button').at(2).simulate('click');
        const counterText=wrapper.find('p').text().trim();
        expect(counterText).toBe('99');
    });

    test('debe retornar el valor original del boton reset',()=>{
        const wrapper=shallow(<CounterApp value={100}/>);
        const btn3=wrapper.find('button').at(1).simulate('click');
        const counterText=wrapper.find('p').text().trim();
        expect(counterText).toBe('100');
    });
});

// test('debe mostrar <CounterApp/> correctamente',()=>{
    //     const wrapper=shallow(<CounterApp/>);
    //     expect(wrapper).toMatchSnapshot();
    // });

    // test('debe mostrar el valor por defecto 100',()=>{
    //     const wrapper=shallow(<CounterApp value={100}/>);
    //     const counterText=wrapper.find('p').text().trim();
    //     expect(counterText).toMatchSnapshot('100');
    // });