import { NavLink, Outlet } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
 return (
    <html>
    <header className="header">
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink to="/login" className="nav__link">Login</NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/recorder" className="nav__link">Recorder</NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/commands" className="nav__link">Commands</NavLink>
          </li>
        </ul>
      </nav>
    </header>
    <body>
        <main>
            <Outlet/>
        </main>
    </body>
    </html>

 );
};

export default Navbar;
