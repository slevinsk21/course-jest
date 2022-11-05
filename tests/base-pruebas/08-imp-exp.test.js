import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';

import heroes from '../../src/data/heroes'

describe('File: 06-imp-exp', () => {
  test('#1 Test: ( getHeroeById must be return an heroe by ID )', () => {
    const id   = 1,
          hero = getHeroeById( id );

    expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
  });

  test('#2 Test: ( getHeroeById must be return undefined if ID is not defined )', () => {
    const id    = 100,
          heroe = getHeroeById( id );

    expect( heroe ).toBeUndefined();
  });

  test('#3 Test: ( getHeroesByOwner must be return heroes of DC Array )', () => {
    const owner          = 'DC',
          DCHeroes       = getHeroesByOwner( owner ),
          heroesFiltered = heroes.filter( hero => hero.owner === owner );

    expect( DCHeroes ).toEqual( heroesFiltered );

    expect( DCHeroes.length ).toBe( 3 );
  });

  test('#4 Test: ( getHeroesByOwner must be return heroes of MARVEL Array )', () => {
    const owner          = 'Marvel',
          marvelHeroes   = getHeroesByOwner( owner ),
          heroesFiltered = heroes.filter( hero => hero.owner === owner )

    expect( marvelHeroes ).toEqual( heroesFiltered );

    expect( marvelHeroes.length ).toBe( 2 );
  });
});