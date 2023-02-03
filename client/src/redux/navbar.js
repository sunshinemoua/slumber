import { NavLink } from "react-router-dom";
import classes from "../components/Home.module.css";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <NavLink className={classes.title} to="/">
        Slumber
      </NavLink>
      <NavLink className={classes.link} to="/history">
        History
      </NavLink>
      {/* <NavLink className={classes.link} to="/Dashboard">
        Dashboard
      </NavLink>
      <NavLink className={classes.link} to="/FAQs">
        FAQs
      </NavLink> */}
    </div>
  );
};

export default Navbar;
