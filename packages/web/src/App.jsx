import './index.css';

const Layout = (props) => (
  <div>
    <Navbar />

    {props.children}

    <Footer />
  </div>
);

const Navbar = () => (
  <nav className='navbar navbar-expand-lg '>
    <div className='container-fluid'>
      <a className='navbar-brand' href='#'>
        Navbar
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-bs-toggle='collapse'
        data-bs-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <a className='nav-link active' aria-current='page' href='#'>
              Home
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Features
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Pricing
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link disabled'>Disabled</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

const Footer = () => (
  <footer>
    <div>Copyright - Fafire Tech {new Date().getFullYear()}</div>
  </footer>
);

const App = () => {
  return (
    <Layout>
      <h1>Fafire Tech - Turma 1</h1>
      <button className='btn btn-warning'>Click here</button>
    </Layout>
  );
};

export default App;
