import React, { Component } from "react";
import PropTypes from "prop-types";

class Host extends Component {
  render() {
    const { name, picture } = this.props;

    return (
      <div className="host">
        <h3>{name}</h3>
        <img src={picture} alt={`portrait de ${name}`} />
      </div>
    );
  }
}

Host.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default Host;
