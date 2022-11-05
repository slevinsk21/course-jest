import { HelloApp } from './HelloApp';

const App = () => {

  return (
    <div style={{ padding: '42px 21px 48px' }}>
      <h1>App</h1>

      <HelloApp title='Saludos' subtitle='Soy un sub' />
    </div>
  );
};

export default App;
