import React, { Component } from "react";
import PropTypes from "prop-types";

class Tag extends Component {
  render() {
    const { tag } = this.props;

    return <div className="tag">{tag}</div>;
  }
}

Tag.propTypes = {
  tag: PropTypes.string.isRequired,
};

export default Tag;
