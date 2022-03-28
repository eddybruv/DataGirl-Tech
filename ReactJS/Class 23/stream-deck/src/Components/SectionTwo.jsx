import React from "react";
import Card from "./Card";
import {
  opera, chrome, firefox, safari, adobe, itunes
} from '../Img/index'

function SectionTwo({columns}) {
  const listTwo = [
    { img: chrome, title: "Chrome", desc: "Web Browser" },
    { img: firefox, title: "Firefox", desc: "Web Browser" },
    { img: safari, title: "Safari", desc: "Web Browser" },
    { img: opera, title: "Opera", desc: "Web Browser" },
    { img: adobe, title: "Adobe CC", desc: "Productivity" },
    { img: itunes, title: "iTunes", desc: "Music" },
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
