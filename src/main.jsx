'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
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
      }}
      className='app'
    >
      <div
        style={{
          color: "rgb(128, 180, 210)",
          fontSize: "28px"
        }}
    >
        Starter Project
      </div>
    </div>
  );

}

const _app = <App name='App'/* props */ />;
ReactDOM.render(_app, document.getElementById('root'));
