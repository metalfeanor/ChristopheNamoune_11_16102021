import { Component } from "react";
import { Link } from "react-router-dom";

class Error extends Component {
  render() {
    return (
      <div className="errorWrapper">
        <h1 className="errorTitle">404</h1>
        <p className="errorSubtitle">Oups! La page que vous demandez n'existe pas.</p>
        <Link className="errorlink" to="/">
          Retourner sur la page d’accueil
        </Link>
      </div>
    );
  }
}

export default Error;
