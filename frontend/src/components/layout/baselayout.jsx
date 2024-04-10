import { Outlet, NavLink } from 'react-router-dom';

const Layout = () => {
 return (
    <div>
      <nav>
        <ul>
          <li><NavLink to="/login">Login</NavLink></li>
          <li><NavLink to="/recorder">Recorder</NavLink></li>
          <li><NavLink to="/commands">Commands</NavLink></li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
 );
};

export default Layout;
