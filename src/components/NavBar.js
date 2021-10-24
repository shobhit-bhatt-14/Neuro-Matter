import { Link } from "react-router-dom";

import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <div className="NavBar">
      <Link to="/">Home</Link>
      <Link to="/login">Log In</Link>
      <Link to="/signup">Sign Up</Link>
    </div>
  );
};

export default NavBar;
