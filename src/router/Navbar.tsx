import { Outlet, NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import "../styles/button.css"
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
            >
              {({ isActive }) => (
                <button
                  className={isActive ? "glowbtn_active" : "glowbtn"
                  }

                >

                  Profile
                </button>

              )}
              {/* <button className="glowbtn" >click</button> */}

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
