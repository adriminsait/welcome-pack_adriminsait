import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom'

import { GifGrid } from '../../pages/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('pruebas <GifGrid>', () => {

    const category = 'One Punch';

    test('probando que se ve', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })

        const wrapper = shallow(<GifGrid category={category}/>);

        expect(wrapper).toMatchSnapshot();
    });

    test('debe mostrar items cuando cargan imagenes useFetchGifs', () => {

        const gifs = [
        {
            id: 'abc',
            url: 'algo',
            title: 'otra cosa'
        },
        {
            id: 'def',
            url: 'algo',
            title: 'otra cosa'
        }
        ];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })

        const wrapper = shallow(<GifGrid category={category}/>);

        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    });
    
});
