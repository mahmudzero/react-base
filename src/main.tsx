'use strict';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

type AppProps = {
  name: string,
};

function App({name} : AppProps) {
  /**
   * example of using state
   */
  const [ex_state, set_ex_state] = React.useState({});

  /**
   * init hook
   */
  React.useEffect(
    () => {
      /**
       * do stuff in here on init
       */
    },
    [] // useEffect is called when things passed into the dependency list change value
  );

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "rgb(128, 180, 210)",
      }}
      className='app'
    >
      <div
        style={{
          color: "rgb(255, 255, 255)",
          fontSize: "28px"
        }}
      >
        {name}
      </div>
    </div>
  );

}

const _app = <App name="Starter Project"/>;
ReactDOM.render(_app, document.getElementById('root'));
