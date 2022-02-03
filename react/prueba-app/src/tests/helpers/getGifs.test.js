import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom'

import { getGifs } from '../../helpers/getGifs';

describe('prueba getGifs', () => {
    
    test('probando fetch', async() => {

        const gifs = await getGifs('One Punch');

        expect(gifs.length).toBe(10);
    });
    
});
