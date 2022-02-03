import '@testing-library/jest-dom'

import {getSaludo} from '../../base/02-template-string'
import {getUser} from '../../base/05-funciones'
import { retornaArreglo } from '../../base/07-deses-arr';
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import { getHeroeByIdAsync } from '../../base/09-promesas';
import { getImagen } from '../../base/11-async-await';
import heroes from '../../data/heroes';

describe('Pruebas de ejemplo', () => {

    test('prueba 02', () => {

        const name = 'Patina';
        const hey = getSaludo(name);

        expect(hey).toBe('Hola ' + name);
    });

    test('prueba 05', () => {
      
        const userTest = {
          uid:'ABC123',
          username: 'El_Papi1502'
        }
        const user = getUser();

        expect(user).toEqual(userTest);
    });
    
    test('prueba 07', () => {

        const [letras, numeros] = retornaArreglo();

        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');

        expect(numeros).toBe(123);
        expect(typeof numeros).toBe('number');
    });

    test('prueba 08', () => {
      
        const id = 1;
        const heroe = getHeroeById(id);
        const heroeData = heroes.find( h => h.id === id)
        expect(heroe).toEqual(heroeData);

        const id2 = 10;
        const heroe2 = getHeroeById(id2);
        expect(heroe2).toEqual(undefined);

        const owner = 'DC';
        const hs = getHeroesByOwner(owner);
        const hsData = hs.filter(h => h.owner === owner);

        expect(hs).toEqual(hsData);

    });
    
    test('prueba 09', (done) => {

        const id = 1;
        getHeroeByIdAsync(id).then(heroe => {
            expect(heroe).toBe(heroes[0]);
            done();
        })

        const id2 = 10;
        getHeroeByIdAsync(id2).catch(error => {
            expect(error).toBe('No se pudo encontrar el héroe');
            done();
        })
    });

    // test('prueba 11', async() => {

    //     const url = await getImagen();
    //     expect(typeof url).toBe('string');
    // });
    
  
});
