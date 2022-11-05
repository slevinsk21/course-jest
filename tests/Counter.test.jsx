import { fireEvent, render, screen } from '@testing-library/react';

import Counter from '../src/Counter';

describe('File: <Counter>', () => {
  test('#1: Test: ( must be do match to the snapshot )', () => {
    const { container } = render( <Counter value={ 0 } /> );
    expect( container ).toMatchSnapshot();
  });

  test('#2: Test: ( must be show initial value of 100 )', () => {
    const initialValue = 100;
    render( <Counter value={ initialValue } /> );
    expect( screen.getByText( initialValue ) ).toBeTruthy();
    expect( screen.getByRole('heading', { level: 2 }).innerHTML ).toContain( `${initialValue}` );
  });

  test('#3 Test: ( must increment in 1 unity with the button ´+1´ )', () => {
    render( <Counter value={ 10 } /> );
    fireEvent.click( screen.getByText('+1') );
    expect( screen.getByText('11') ).toBeTruthy();
  });

  test('#4 Test: ( must decrement in 1 unity with the button ´-1´ )', () => {
    render( <Counter value={ 10 } /> );
    fireEvent.click( screen.getByText('-1') );
    expect( screen.getByText('9') ).toBeTruthy();
  });

  test('#5 Test: ( must reset the value the button ´reset´ )', () => {
    const initialValue = 3;
    render( <Counter value={ initialValue } /> );
    fireEvent.click( screen.getByText('+1') );
    fireEvent.click( screen.getByText('+1') );
    fireEvent.click( screen.getByText('+1') );

    // click reset
    // fireEvent.click( screen.getByText( 'Reset' ) );
    fireEvent.click( screen.getByRole( 'button', { name: 'btn-reset' } ) );

    expect( screen.getByText( initialValue ) ).toBeTruthy();
  });
});
