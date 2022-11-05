describe('Demo Test', () => {
  test('#1: Test: ( Esta prueba no falla )', () => {
    // 1. initializing
    const msg1 = 'Hola Mundo';

    // 2. inducement
    const msg2 = msg1.trim();

    // 3. watch behaviour
    expect(msg1).toBe(msg2);
  });
});
