// react
import { useState } from 'react';
import { number } from 'prop-types';

const Counter = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleCounter = value => {
    value >= 0 && setCounter(value);
  };

  return (
    <>
      <div style={{ height: 60 }}></div>
      <div
        style={{
          backgroundColor: '#d3d3',
          borderRadius: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: '0 auto',
          maxWidth: 340,
          padding: 15
        }}
        >

          <h1>CounterApp</h1>

          <h2>{ counter }</h2>

        <div>
          <button onClick={() => handleCounter(counter + 1)}>+1</button>
          <button onClick={() => handleCounter(counter + 10)}>x10</button>
          <button aria-label='btn-reset' onClick={() => handleCounter(value)}>Reset</button>
          <button onClick={() => handleCounter(counter - 1)}>-1</button>
          <button onClick={() => handleCounter(counter - 10)}>-10</button>
        </div>
      </div>
    </>
  );
};

Counter.propType = {
  value: number.isRequired
};

export default Counter;