'use strict';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  };

  render() {
    return(
      <nav className={this.props.className}> AppName </nav>
    );
  };
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  };

  render() {
    return(
      <div className='app'>
        <NavBar className='nav-bar'/>
        <div className='hello-world'> Hello world, my name is {this.props.name||'Null'} </div>
      </div>
    );
  };
};




const _object = <App name='App'/* props */ />;

ReactDOM.render(_object, document.getElementById('root'));
