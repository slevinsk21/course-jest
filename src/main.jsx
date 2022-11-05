import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Counter } from './Counter';

import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div style={{ margin: '0 auto', maxWidth: 1175 }}>
      <Counter value={ 0 } />
      {/* <App /> */}
    </div>
  </React.StrictMode>
);
