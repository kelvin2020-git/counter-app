import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import CounterApp from '../CounterApp';





describe('Pruebas en <CounterApp />', () => {
    
    let wrapper = shallow(<CounterApp />);

     beforeEach(()=>{
        wrapper = shallow(<CounterApp />);
     })


    test('debe de mostrar mi <CounterApp/> correctamente ', () => { 
        
        
        expect(wrapper).toMatchSnapshot();

     })
     test('debe de mostrar el valor por defecto de 100 ', () => { 
        
        const wrapper = shallow(
        <CounterApp
        value={100}/>);
        
 const  Countertext =wrapper.find('h2').text().trim();
 expect(Countertext).toBe('100');

     })
 
     test('Debe de incrementar con el boton +1', () => { 
        
        
        // const btn1 = wrapper.find('button').at(0);
        // console.log(btn1.html());
       wrapper.find('button').at(0).simulate('click');
        const  Countertext =wrapper.find('h2').text().trim();
        expect(Countertext).toBe('11');

     })

     test('Debe de disminuir con el boton -1', () => { 
          
       wrapper.find('button').at(2).simulate('click');
        const  Countertext =wrapper.find('h2').text().trim();
        expect(Countertext).toBe('9');

     })

     test('debe de retornar el valor de btn reset', () => { 
        
        const wrapper = shallow(<CounterApp value={105}/>);
        
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');

         const  Countertext =wrapper.find('h2').text().trim();
         expect(Countertext).toBe('105');
 
      })
});
