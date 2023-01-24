import { NavLink } from "react-router-dom";
import classes from "../components/Welcome.module.css";

const Navbar = () => {
  return (
    <div className={classes.page}>
      <NavLink className={classes.title} to="/">
        Slumber
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
