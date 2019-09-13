'use strict';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  };

  render() {
    return(
      <nav className='nav-bar'>
        <div> ReactBase </div>
        <div className='logo'> // </div>
        <div> Mahmud Ahmad </div>
      </nav>
    );
  };
};

class PagePreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author_name: 'Johnny AppleSeed',
      author_image: '',
      description: '',
    };
  };

  render() {
    return(
      <div className='page-preview'>
        <div className='page-preview__name-image-container'>
          <div className='page-preview__image'> </div>
          <div className='page-preview__name'> Johnny Appleseed </div>
        </div>
        <div className='page-preview__description-container'>
          Qui aute aliqua est voluptate et sit proident. Consectetur velit tempor duis laborum. Velit ad eiusmod enim tempor ex id aliqua dolor id eiusmod aliqua. 
        </div>
      </div>
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
    // we can render arrays of components
    // const _nav_bar = [<NavBar key='1'/>, <NavBar key='2'/>];
    const _page_prev = [<PagePreview key='1' />, <PagePreview key='2' />, <PagePreview key='3' />, <PagePreview key='4' />];
    return(
      <div className='app'>
        <NavBar />
        <div className='add-new-dom'> + New DOM </div>
        {/* as seen here */}
        {/* { _nav_bar } */}
        <div class='page-preview-container'>
          <PagePreview />
          { _page_prev }
        </div>
      </div>
    );
  };
};

const _app = <App name='App'/* props */ />;
ReactDOM.render(_app, document.getElementById('root'));
