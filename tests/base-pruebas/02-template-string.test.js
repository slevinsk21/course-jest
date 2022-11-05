import { getSaludo } from '../../src/base-pruebas/02-template-string';

describe('File: 02-template-string', () => {
  test('#1 Test: ( getSaludo must be return gretting  with name)', () => {
    const name    = 'Leonel',
          message = getSaludo( name );

    expect( message ).toBe(`Hola ${ name }`);
  });
});
