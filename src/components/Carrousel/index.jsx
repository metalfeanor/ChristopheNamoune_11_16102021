import React, { Component } from "react";
import PropTypes from "prop-types";
import { ReactComponent as Chevron } from "../../assets/chevron.svg";

class Carrousel extends Component {
  state = {
    currentImg: 0,
  };

  goToPrevImg = () => {
    this.setState((state) => ({
      currentImg: state.currentImg === 0 ? this.props.images.length - 1 : state.currentImg - 1,
    }));
  };

  goToNextImg = () => {
    this.setState((state) => ({
      currentImg: state.currentImg === this.props.images.length - 1 ? 0 : state.currentImg + 1,
    }));
  };

  render() {
    const { images } = this.props;
    const { currentImg } = this.state;

    return (
      <div className="carrousel">
        <img src={images[currentImg]} alt={`appartement img ${currentImg}`} />

        {images.length > 1 && (
          <button className="btnLeft" onClick={() => this.goToPrevImg()}>
            <Chevron fill="white" className="chevronLeft" />
          </button>
        )}
        {images.length > 1 && (
          <button className="btnRight" onClick={() => this.goToNextImg()}>
            <Chevron fill="white" className="chevronRight" />
          </button>
        )}
        {images.length > 1 && (
          <div className="imgCount">
            {currentImg + 1}/{images.length}
          </div>
        )}
      </div>
    );
  }
}

Carrousel.propTypes = {
  images: PropTypes.array.isRequired,
};

export default Carrousel;
