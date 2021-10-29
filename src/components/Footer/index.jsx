import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Component } from "react";
import "../../sass/main.scss";

class Footer extends Component {
  render() {
    const year = new Date().getFullYear();

    return (
      <div className="footerContainer">
        <Link to="/">
          <Logo fill="white" />
        </Link>
        <p className="footerInfo">© {year} Kasa. All rights reserved</p>
      </div>
    );
  }
}

export default Footer;
