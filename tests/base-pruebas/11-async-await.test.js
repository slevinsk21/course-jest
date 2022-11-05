import { getImagen }from '../../src/base-pruebas/11-async-await';

describe('File: 1-async-await', () => {
  test('#1 Test: ( getImagen must be return an url of the image )', async () => {
    const { url } = await getImagen();
    expect( url ).toEqual( expect.any(String) );
    expect( typeof url ).toBe( 'string' );
  });

  // test('#2 Test: ( getImagen if not get an image return an error message type string )', async () => {
  //   const response = await getImagen();
  //   expect( response ).toBe( 'No se encontró la imagen' );
  // });
});
