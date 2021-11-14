import React, { Component } from "react";
import PropTypes from "prop-types";
import { ReactComponent as ChevronUp } from "../../assets/chevron.svg";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.toggleBtn = () => {
      this.setState((state) => ({
        isOpen: state.isOpen ? false : true,
      }));
    };
  }
  render() {
    const { title, content } = this.props;
    const { isOpen } = this.state;

    return (
      <div className="dropWrapper">
        <button onClick={() => this.toggleBtn()}>
          <h3>
            {title}
            <ChevronUp fill="white" className={`chevron ${isOpen ? "" : "down"}`} />
          </h3>
        </button>
        {Array.isArray(content) ? (
          <ul className={`dropList ${isOpen ? "" : "close"}`}>
            {content.map((item, index) => (
              <li key={index + 1}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className={`dropContent ${isOpen ? "" : "close"}`}>{content}</p>
        )}
      </div>
    );
  }
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Dropdown;
