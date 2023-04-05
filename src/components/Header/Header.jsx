import { useState } from "react";
import {Link} from 'react-router-dom'
import logo from "../../../images/Logo.svg";
import "./Header.css";
import { BiMenuAltLeft } from 'react-icons/bi'

const Header = () => {

  //  const [showNav,setShowNav] = useState();

  return (
    <header className="main-header">
      <Link to={'/'} className="logo">
        <img src={logo} />
      </Link>

      {/* menu icon */}
      <div className="menu-icon">
        <BiMenuAltLeft />
      </div>

      <nav>
        <Link to="/order">Order</Link>
        <Link to="/order-review">Order Review</Link>
        <Link to="/inventory">Manage Inventory</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
};

export default Header;
