import { retornaArreglo } from '../../src/base-pruebas/07-deses-arr';

describe('File: 07-deses-arr', () => {
  test('#1 Test: ( retornaArreglo must be return an Array )', () => {
    expect( retornaArreglo() ).toEqual( ['ABC', 123] );
  });

  test('#2 Test: ( retornaArreglo must have a length of 2 )', () => {
    expect( retornaArreglo().length ).toBe( 2 );
  });

  test('#3 Test: ( retornaArreglo must return a number and string )', () => {
    const [ letters, numbers ] = retornaArreglo();

    expect( typeof letters ).toBe( 'string' );
    expect( letters ).toEqual( expect.any(String) );

    expect( typeof numbers ).toBe( 'number');
    expect( numbers ).toEqual( expect.any(Number) );
  });
});
