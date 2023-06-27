import { Outlet, NavLink } from "react-router-dom";
import "../styles/Navbar.css";
const logo_active = require('../static/logo_active.png');
const logo_notactive = require('../static/logo_notactive.png');
const Navbar = () => {
  return (
    <>
      <nav>
        <ul className="ul_navbar">
          <li>
            <NavLink to="/">
              {({ isActive }) => (
                <>
                  <img
                    src={isActive ? logo_active : logo_notactive}
                    alt={logo_notactive}
                  />
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={(navData) =>
                navData.isActive ? "active_link" : "link"
              }
            >
              Profile
            </NavLink>
          </li>
        </ul>
        <br />
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;
