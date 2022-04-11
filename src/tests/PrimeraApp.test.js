import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import PrimeraApp from '../PrimeraApp';
// import { render } from '@testing-library/react';





describe('Pruebas en <PrimeraApp />', () => {
    
    //  test('debe de mostrar el mensaje "Hola, Soy Goku"', () => {
    //     const saludo = 'Hola, soy Goku';
    //     const { getByText } = render( <PrimeraApp saludo={ saludo } /> );
    //     expect( getByText( saludo ) ).toBeInTheDocument();
    
    // });
    test('debe de mostrar mi <PrimeraApp/> correctamente ', () => { 
        const saludo = 'Hola, Soy Goku';
        const wrapper = shallow(<PrimeraApp saludo={saludo}/>);
        expect(wrapper).toMatchSnapshot();

     })
     test('debe de mostrar el subtitulo enviado por props ', () => { 
        const saludo = 'Hola, Soy Goku';
        const subTitulo = 'Soy un subtitutlo';
        const wrapper = shallow(
        <PrimeraApp 
        saludo={saludo}
        subtitulo={subTitulo}
        />);
        
 const  textparrafo =wrapper.find('p').text();
expect(textparrafo).toBe(subTitulo);

     })
 

});
