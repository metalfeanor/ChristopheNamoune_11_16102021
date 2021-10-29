import { Component } from "react";
import Image from "../../assets/about_background.png";

class About extends Component {
  render() {
    return (
      <div className="aboutWrapper">
        <div className="aboutContainer">
          <img src={Image} alt="rock-montains" className="aboutImg" />
        </div>
      </div>
    );
  }
}

export default About;
