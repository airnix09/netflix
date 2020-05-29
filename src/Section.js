import React from "react";
import "./Section.css";

function Section(props) {
  const images = props.images.map((image, index) => (
    <img src={image} alt={"image number " + (index + 1)} />
  ));
  return (
    <div className="section">
      <p>{props.category}</p>
      <div className="list-movies">{images}</div>
    </div>
  );
}

export default Section;
