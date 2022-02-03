import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom'
import CounterApp from '../../base/CounterApp';

describe('Pruebas en <CounterApp>', () => {

    const wrapper = shallow(<CounterApp value={10}/>);
    
    test('mostrar <CounterApp>', () => {
        
        const counterText = wrapper.find('h2').text().trim();

        expect(wrapper).toMatchSnapshot();
        expect(counterText).toBe('10');
    });

    test('boton +', () => {
        
        wrapper.find('button').at(0).simulate('click', {});
        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('11');

    });

    test('boton -', () => {
        
        wrapper.find('button').at(2).simulate('click', {});
        wrapper.find('button').at(2).simulate('click', {});
        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('9');

    });
    
    test('reset', () => {
        
        wrapper.find('button').at(2).simulate('click', {});
        wrapper.find('button').at(1).simulate('click', {});

        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('10');

    });

});
