import { Component } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";

class Header extends Component {
  render() {
    return (
      <nav className="headerNav">
        <Link to="/">
          <Logo fill="#FF6060" className="headerLogo" />
        </Link>
        <div>
          <Link className="link" to="/">
            Accueil
          </Link>
          <Link className="link" to="/about">
            A Propos
          </Link>
        </div>
      </nav>
    );
  }
}

export default Header;
