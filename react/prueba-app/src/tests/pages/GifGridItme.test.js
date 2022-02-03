import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom'

import { GifGridItem } from '../../pages/GifGridItem';

describe('pruebas <GifGridItem>', () => {
  
    const title = 'Un titulo';
    const url = 'algo';
    const wrapper = shallow(<GifGridItem title={title} url={url} />);

    test('probando que se ve', () => {

        expect(wrapper).toMatchSnapshot();
    });

    test('probando el titulo', () => {

        const p = wrapper.find('p').text().trim();

        expect(p).toBe(title);
    });

    test('probando la imagen', () => {

        const img = wrapper.find('img');

        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });
    
});
