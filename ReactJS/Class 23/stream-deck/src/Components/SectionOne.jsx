import React from 'react'
import Card from './Card'
import {instagram, spotify, twitter, adword, apple, pinterest, nike, skype, tum, slack, citymapper} from '../Img/index'

function Sections({columns}) {
  const listOne = [
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/1200px-Facebook_icon_2013.svg.png",
      title: "Facebook",
      desc: "Social Media",
    },
    {
      img: apple,
      title: "Apple",
      desc: "Hardware & Software",
    },
    {
      img: spotify,
      title: "Spotify",
      desc: "Music",
    },
    { img: twitter, title: "Twitter", desc: "Social Platform" },
    { img: instagram, title: "Instagram", desc: "Social Platform" },
    { img: pinterest, title: "Pinterest", desc: "Social Media" },
    { img: slack, title: "Slack", desc: "Team Communications" },
    { img: tum, title: "Tumblr", desc: "Social Media" },
    { img: skype, title: "Skype", desc: "Communications" },
    { img: adword, title: "Adwords", desc: "Marketing" },
    { img: nike, title: "Nike", desc: "Clothing & Equipment" },
    { img: citymapper, title: "Citymapper", desc: "Maps" },
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