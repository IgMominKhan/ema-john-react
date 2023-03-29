import logo from "../../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <header className="main-header">
      <a className="logo">
        <img src={logo} />
      </a>
      <nav>
        <a href="/order">Order</a>
        <a href="/order-review">Order Review</a>
        <a href="/inventory">Manage Inventory</a>
        <a href="/login">Login</a>
      </nav>
    </header>
  );
};

export default Header;
