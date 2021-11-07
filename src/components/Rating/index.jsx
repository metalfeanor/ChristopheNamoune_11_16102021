import React, { Component } from "react";
import PropTypes from "prop-types";
import { ReactComponent as Star } from "../../assets/star.svg";

class Rating extends Component {
  render() {
    const { rating } = this.props;
    const stars = [];
    const max = Number(rating);
    let color = "";

    for (let i = 0; i < 5; i++) {
      max <= i ? (color = "#E3E3E3") : (color = "#FF6060");
      stars.push(<Star fill={color} className="star" key={i} />);
    }

    return <div className="rating">{stars}</div>;
  }
}

Rating.propTypes = {
  rating: PropTypes.string.isRequired,
};

export default Rating;
