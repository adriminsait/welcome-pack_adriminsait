import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom'
import {renderHook} from '@testing-library/react-hooks'

import {useFetchGifs} from '../../hooks/useFetchGifs'

describe('pruebas custom hook useFetchGifs', () => {

    test('debe devolver el estado inicial', async() => {

        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('category'));
        const {data, loading} = result.current;

        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBe(true);
        
    });

    test('debe devolver array de gifs y loading a false', async() => {
        
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('One Punch'));
        await waitForNextUpdate();

        const {data, loading} = result.current;

        expect(data.length).toEqual(10);
        expect(loading).toBe(false);
    });
    
    
});
