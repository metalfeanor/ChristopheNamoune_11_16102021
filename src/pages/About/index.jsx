import { Component } from "react";
import { about } from "../../data";
import Dropdown from "../../components/Dropdown";

class About extends Component {
  render() {
    return (
      <div className="aboutWrapper">
        <main>
          <div className="aboutContainer"></div>
          <div className="aboutDropdown">
            {about.map((item) => (
              <Dropdown key={item.id} title={item.title} content={item.content} />
            ))}
          </div>
        </main>
      </div>
    );
  }
}

export default About;
