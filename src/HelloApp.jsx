import { string } from 'prop-types';

const styles = {
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: '#d3d3',
  color: 'white',
  maxWidth: 320,
  width: '100%',
  borderRadius: 8,
  padding: '40px 20px'
};

export const HelloApp = ({ title, subtitle }) => {
  return (
    <>
      <div style={styles}>
        <h1 data-testid="test-title"> { title } </h1>
        <p>{ subtitle }</p>
        <p>{ subtitle }</p>
        <p>{ subtitle }</p>
        <p>{ subtitle }</p>
        <p>{ subtitle }</p>
        <p>
          lorem ipsum
        </p>
      </div>

      {/* <code>{JSON.stringify(obj)}</code> */}
    </>
  );
};

HelloApp.propTypes = {
  title: string.isRequired
};

HelloApp.defaultProps = {
  subtitle: '( need prop subtitle )'
};

export default HelloApp;
