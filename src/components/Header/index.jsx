import { Component } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";

class Header extends Component {
  render() {
    return (
      <header className="headerNav">
        <Link to="/">
          <Logo fill="#FF6060" className="headerLogo" />
        </Link>
        <nav>
          <Link className="link right" to="/">
            Accueil
          </Link>
          <Link className="link" to="/about">
            A Propos
          </Link>
        </nav>
      </header>
    );
  }
}

export default Header;
