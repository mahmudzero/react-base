'use strict';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  };

  render() {
    return(
      <nav className='nav-bar-width'>
        <div className='nav-bar'>
          <div> ReactBase </div>
          <div className='logo'> // </div>
          <div> Mahmud Ahmad </div>
        </div>
      </nav>
    );
  };
};

class PagePreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author_name: 'Johnny AppleSeed',
      description: 'Duis eiusmod id adipisicing sunt id.',
    };
  };

  render() {
    const name = this.props.name || this.state.author_name;
    const _first_initial = name[0];
    if(!this.props.img_src) {
      return(
        <div className='page-preview'>
          <div className='page-preview__name-image-container'>
            <div className='page-preview__image-container__bordered'>
              { _first_initial }
            </div>
            <div className='page-preview__name'> { this.props.name || this.state.author_name } </div>
          </div>
          <div className='page-preview__description-container'>
            { this.props.description || this.state.description }
          </div>
        </div>
      );
    } else {
      return(
        <div className='page-preview'>
        <div className='page-preview__name-image-container'>
          <div className='page-preview__image-container'>
            <img className='page-preview__image' src={this.props.img_src}/>
          </div>
          <div className='page-preview__name'> { this.props.name || this.state.author_name } </div>
        </div>
        <div className='page-preview__description-container'>
          { this.props.description || this.state.description }
        </div>
      </div>
      );
    }
  };
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  };

  _render_page_prev = () => {
    const _page_prev_json = [
      {
        name: "Johnny Appleseed",
        img_src: "",
        description: "Ad ea ea velit aliqua nostrud aliquip aute commodo ut sit nostrud duis sit ad. Minim cupidatat sunt reprehenderit minim sit anim nulla magna amet non laboris dolor commodo nisi.",
      }, {
        name: "Mufasa Waititi",
        img_src: "",
        description: "Anim pariatur anim incididunt enim deserunt quis excepteur laborum dolore.",
      }, {
        name: "Eddie Hall",
        img_src: "https://www.animatedtimes.com/wp-content/uploads/2019/07/thorragnarok-jeffgoldblum-grandmaster-uneasy-700x334-1280x720.jpg",
        description: "Eiusmod dolore ullamco mollit eiusmod excepteur qui in eiusmod.",
      }, {
        name: "",
        img_src: "",
        description: "",
      }
    ];
    const _rendered = _page_prev_json.map((datum, i) => {
      return (
        <PagePreview 
          name={datum.name} 
          img_src={datum.img_src}
          description={datum.description}
          key={i}
        />
      );
    });
    return ( 
      _rendered
    );
  }

  render() {
    // we can render arrays of components
    // const _nav_bar = [<NavBar key='1'/>, <NavBar key='2'/>];
    const _page_prev = [<PagePreview key='1' />, <PagePreview key='2' />, <PagePreview key='3' />, <PagePreview key='4' />];
    return(
      <div className='app'>
        <NavBar />
        <div className='app-body'>
          <div className='add-new-dom'> + New DOM </div>
          {/* as seen here */}
          {/* { _nav_bar } */}
          <div className='page-preview-container'>
            <PagePreview />
            { _page_prev }
            { this._render_page_prev() }
          </div>
        </div>
      </div>
    );
  };
};

const _app = <App name='App'/* props */ />;
ReactDOM.render(_app, document.getElementById('root'));
