import { NavLink } from "react-router-dom";
import classes from "../components/Welcome.module.css";

const Navbar = () => {
  return (
    <div>
      <NavLink className={classes.title} to="/">
        <h1>Welcome to Slumber</h1>
      </NavLink>
      <NavLink className={classes.link} to="/About">
        About
      </NavLink>
      <NavLink className={classes.link} to="/Dashboard">
        Dashboard{" "}
      </NavLink>
      <NavLink className={classes.link} to="/FAQs">
        FAQs
      </NavLink>
    </div>
  );
};

export default Navbar;
