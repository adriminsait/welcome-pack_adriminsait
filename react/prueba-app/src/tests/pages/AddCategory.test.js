import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom'

import { AddCategory } from '../../pages/AddCategory';

describe('pruebas <AddCategory>', () => {
  
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    })

    test('probando que se ve', () => {

        expect(wrapper).toMatchSnapshot();
    });

    test('probando cambios en input', () => {

        const input = wrapper.find('input');
        const value = 'hola mundo'

        input.simulate('change', {
            target: {value}
        });

        // expect(wrapper).toMatchSnapshot();
    });

    test('No debe hacer nada el submit', () => {

        wrapper.find('form').simulate('submit', {
            preventDefault: () => {}
        })

        expect(setCategories).not.toHaveBeenCalled();
    });

    test('debe llamar a setCategories', () => {

        const value = 'hola mundo'

        wrapper.find('input').simulate('change', {
            target: {value}
        });
        wrapper.find('form').simulate('submit', {
            preventDefault: () => {}
        })

        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        expect(wrapper.find('input').prop('value')).toBe('');
    });
    
    
});
