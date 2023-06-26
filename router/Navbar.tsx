import { Outlet, NavLink } from "react-router-dom";
import "../styles/Navbar.css";
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
                    src={isActive ? "../logo_active.png" : "../logo.png"}
                    alt="../logo.png"
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
