import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas';

describe('File: 09-promesas-test', () => {
  test('#1 Test: ( getHeroeByIdAsync must be return an heroe )', done => {
    const id = 1;

    getHeroeByIdAsync( id )
      .then(hero => {
        expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
        done();
      });
  });

  test('#2 Test: ( getHeroeByIdAsync must be return an error if ID do not exist )', done => {
    const id = 100;

    getHeroeByIdAsync( id )
      .then( hero => expect( hero ).toBeFalsy() )
      .catch( error => {
        expect( error ).toBe( `No se pudo encontrar el héroe con el ID: ${id}` );
        done();
      });
  });
});