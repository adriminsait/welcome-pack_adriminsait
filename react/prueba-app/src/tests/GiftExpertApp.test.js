import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom'

import {GifExpertApp} from '../GifExpertApp'

describe('pruebas <GifExpertApp>', () => {

    test('probando que se ve', () => {

        const wrapper = shallow(<GifExpertApp />);

        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar lista de categorias', () => {

        const categories = ['One Punch', 'Dragon Ball'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });
    
});
