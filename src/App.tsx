import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Products from './Views/Products/Products';
import Privacy from './Views/Privacy/Privacy';
import Login from './Views/Login/Login';

function App() {
  return (
    <>
      <header>
        <nav className='navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow'>
          <div className='container'>
            <Link to='/' className='navbar-brand'>
              NobleCause.SavijSell.Ui
            </Link>
            <button
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='.navbar-collapse'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='navbar-collapse collapse d-sm-inline-flex justify-content-between'>
              <ul className='navbar-nav flex-grow-1'>
                <li className='nav-item'>
                  <Link to='/' className='nav-link text-dark'>
                    Products
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='Privacy' className='nav-link text-dark'>
                    Privacy
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='Login' className='nav-link text-dark'>
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main role='main'>
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='Privacy' element={<Privacy />} />
          <Route path='Login' element={<Login />} />
        </Routes>
      </main>
      <footer className='border-top footer text-muted'>
        <div className='container'>
          &copy; 2021 - SavijSell -{' '}
          <Link to='Privacy' className='nav-link text-dark displayInline p-0'>
            Privacy
          </Link>
        </div>
      </footer>
    </>
  );
}

export default App;
