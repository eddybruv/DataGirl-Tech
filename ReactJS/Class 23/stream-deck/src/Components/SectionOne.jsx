import React from 'react'
import Card from './Card'
import instagram from './../Img/download.jpeg'

function Sections({columns}) {
  const listOne = [
    { img: instagram, title: "Facebook", desc: "Social Media" },
    { img: instagram, title: "Apple", desc: "Hardware & Software" },
    { img: instagram, title: "Spotify", desc: "Music" },
    { img: instagram, title: "Twitter", desc: "Social Platform" },
    { img: instagram, title: "Instagram", desc: "Social Platform" },
    { img: instagram, title: "Pinterest", desc: "Social Media" },
    { img: instagram, title: "Slack", desc: "Team Communications" },
    { img: instagram, title: "Tumbkr", desc: "Social Media" },
    { img: instagram, title: "Skype", desc: "Communications" },
    { img: instagram, title: "Adwords", desc: "Marketing" },
    { img: instagram, title: "Nike", desc: "Clothing & Equipment" },
    { img: instagram, title: "Citymapper", desc: "Maps" },
  ];

  const prodOne = listOne.map((card, index) => {
    return (
      <Card item={card} key={index}/>
    )
  })

  return (
    <div className="sections">
      <div className="left-section">
        Subscriptions
      </div>
      <div
        style={{ gridTemplateColumns: `repeat(${columns}, auto)` }}
        className="right-section"
      >
        {prodOne}
      </div>
    </div>
  );
}

export default Sections