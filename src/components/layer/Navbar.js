import { NavLink } from "react-router-dom";
import logo from '../../UI/logo/logo.png';
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={classes["nav"]}>
      <div className={classes["logo"]}>
        <img src={logo} alt="logo" />
      </div>
      <div className={classes["links"]}>
        <NavLink to="/home" activeClassName={classes["active"]}>
          Home
        </NavLink>
        <NavLink to="/about" activeClassName={classes["active"]}>
          About
        </NavLink>
        <NavLink to="/projects" activeClassName={classes["active"]}>
          Projects
        </NavLink>
        <NavLink to="/contact" activeClassName={classes["active"]}>
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
