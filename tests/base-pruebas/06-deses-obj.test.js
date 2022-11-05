import { usContext } from '../../src/base-pruebas/06-deses-obj';

describe('File: 06-deses-obj', () => {
  test('#1 Test: ( usContext must be return an Object)', () => {
    const person = { nombre: 'Tony', edad: 45, clave: 'Ironman' },
          user   = usContext( person );

    expect( user ).toEqual({
      nombreClave: person.clave,
      anios      : person.edad,
      latlng     : { lat: 14.1232, lng: -12.3232 }
    });
  });
});
