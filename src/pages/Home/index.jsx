import { Component } from "react";
import Image from "../../assets/background.png";

class Home extends Component {
  render() {
    return (
      <div className="homeWrapper">
        <div className="homeContainer">
          <img src={Image} alt="rock-montains" className="homeImg" />
        </div>
      </div>
    );
  }
}

export default Home;
