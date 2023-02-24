import { NavLink } from "react-router-dom";
import classes from "../components/Home/Home.module.css";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <NavLink className={classes.title} to="/">
        Slumber
      </NavLink>
      <NavLink className={classes.link} to="/history">
        History
      </NavLink>
    </div>
  );
};

export default Navbar;
