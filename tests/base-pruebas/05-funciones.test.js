import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones';

describe('File: 05-funciones', () => {
  test('#1 Test: ( getUser must be return an Object)', () => {
    const testedUser = { uid: 'ABC123', username: 'El_Papi1502' },
          user       = getUser();

    expect( user ).toEqual( testedUser );
  });

  test('#2 Test: ( getUsuarioActivo must be return an Object, reciving a name )', () => {
    const username = 'Leonel',
          user     = getUsuarioActivo( username );

    expect( user ).toEqual({ uid: 'ABC567', username });
  });
});
