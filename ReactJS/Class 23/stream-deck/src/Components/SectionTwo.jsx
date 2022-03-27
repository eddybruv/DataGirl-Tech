import React from "react";
import Card from "./Card";
import instagram from '../Img/download.jpeg'

function SectionTwo({columns}) {
  const listTwo = [
    { img: instagram, title: "Chrome", desc: "Web Browser" },
    { img: instagram, title: "Firefox", desc: "Web Browser" },
    { img: instagram, title: "Safari", desc: "Web Browser" },
    { img: instagram, title: "Opera", desc: "Web Browser" },
    { img: instagram, title: "Adobe CC", desc: "Productivity" },
    { img: instagram, title: "iTunes", desc: "Music" },
  ];

  const prodTwo = listTwo.map((card, index) => {
    return <Card key={index} item={card}/>
  })

  return (
    <div className="sections">
      <div className="left-section">Top Selections</div>
      <div
        style={{ gridTemplateColumns: `repeat(${columns}, auto)` }}
        className="right-section"
      >
        {prodTwo}
      </div>
    </div>
  );
}

export default SectionTwo;
