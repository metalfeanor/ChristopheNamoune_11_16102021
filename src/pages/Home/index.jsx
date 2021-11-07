import { Component } from "react";
import { data } from "../../data";
import Thumb from "../../components/Thumb";

class Home extends Component {
  render() {
    return (
      <main className="homeWrapper">
        <div className="homeContainer">
          <div className="homeText">Chez vous, partout et ailleurs</div>
        </div>
        <div className="homeContent">
          {data.map((elt) => (
            <Thumb title={elt.title} src={elt.cover} id={elt.id} key={elt.id} />
          ))}
        </div>
      </main>
    );
  }
}

export default Home;
