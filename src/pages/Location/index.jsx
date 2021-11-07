import { Component } from "react";
import { data } from "../../data";
import Tag from "../../components/Tag";
import Rating from "../../components/Rating";
import Host from "../../components/Host";
import Dropdown from "../../components/Dropdown";
import Carrousel from "../../components/Carrousel";

class Location extends Component {
  render() {
    const id = this.props.match.params.id;
    const { title, location, pictures, host, equipments, tags, rating, description } = data.filter((item) => item.id === id)[0];
    //console.log(title, location, pictures, host, equipments, tags, rating, description);
    return (
      <main>
        <Carrousel images={pictures} />
        <div className="locationWrapper">
          {/*<div className="locationHeader">*/}
          <div className="topHeader">
            <h1>{title}</h1>
            <h2>{location}</h2>
            {tags.map((tag, index) => (
              <Tag key={index} tag={tag} />
            ))}
          </div>
          <section className="info">
            <Host name={host.name} picture={host.picture} />
            <Rating rating={rating} />
          </section>
          {/*</div>*/}

          <section className="details">
            <Dropdown title="Description" content={description} />
            <Dropdown title="Équipements" content={equipments} />
          </section>
        </div>
      </main>
    );
  }
}

export default Location;
