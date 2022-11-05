import { render, screen } from '@testing-library/react';

import HelloApp from '../src/HelloApp';

const title = 'Saludos';
const subtitle = 'Soy un sub';

describe('File: <HelloApp>', () => {
  test('#1: Test: ( must be do match to the snapshot )', () => {
    const { container } = render( <HelloApp title={ title } /> );
    // expect( container ).toMatchSnapshot();
  });

  test('#2: Test: ( must be show and h1 tag with the same title )', () => {
    const { getByText, getByTestId } = render( <HelloApp title={ title } /> );
    // const h1 = container.querySelector('h1');
    // console.log(h1.innerHTML);
    // expect( h1.innerHTML ).toContain( title );

    expect( getByTestId( 'test-title' ).innerHTML ).toContain( title );
    expect( getByText( title ) ).toBeTruthy();
    expect( screen.getByText( title ) ).toBeTruthy();
  });

  test('#3: Test: ( must be show and h1 tag  )', () => {
    render( <HelloApp title={ title } /> );
    expect( screen.getByRole('heading', { level: 1 }).innerHTML ).toContain( title );
  });

  test('#4: Test: ( must be show subtitle sended by props  )', () => {
    render( <HelloApp title={ title } subtitle={ subtitle } /> );
    // console.log(screen.getAllByText( subtitle ).length);
    expect( screen.getAllByText( subtitle ).length ).toBe( 5 );
  });
});
