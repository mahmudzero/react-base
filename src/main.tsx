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
  interface ExStateType {
    count : number
  }

  const [ex_state, set_ex_state] = React.useState<ExStateType>({count: 0});

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

  function counter() : number {
    set_ex_state(
      {
        count: ex_state.count+1
      }
    );
    return val++;
  }
  let val : number = 0;

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
      className='app no-select'
    >
      <div
        style={{
          color: "rgb(255, 255, 255)",
          fontSize: "28px"
        }}
      >
        {name} Value: {ex_state.count} <button onClick={() => counter()}> BUTTON </button>
      </div>
    </div>
  );

}

const _app = <App name="Starter Project"/>;
ReactDOM.render(_app, document.getElementById('root'));
