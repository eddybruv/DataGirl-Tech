import React from 'react'
import instagram from './download.jpeg'
import Card from './Card'

function Section({columns}) {
  const listOne = [
    { img: instagram, firstText: "First text", secondText: "second text" },
    { img: instagram, firstText: "First text", secondText: "second text" },
    { img: instagram, firstText: "First text", secondText: "second text" },
    { img: instagram, firstText: "First text", secondText: "second text" },
    { img: instagram, firstText: "First text", secondText: "second text" },
    { img: instagram, firstText: "First text", secondText: "second text" },
    { img: instagram, firstText: "First text", secondText: "second text" },
    { img: instagram, firstText: "First text", secondText: "second text" },
    { img: instagram, firstText: "First text", secondText: "second text" },
    { img: instagram, firstText: "First text", secondText: "second text" },
    { img: instagram, firstText: "First text", secondText: "second text" },
    { img: instagram, firstText: "First text", secondText: "second text" },
  ];

  const listCards = listOne.map((item, index) => {
    return <Card item={item} key={index}/>
  })

  return (
    <div className="section-container">
      <div className="left-section">Left Section </div>
      <div style={{gridTemplateColumns: `repeat(${columns}, 1fr)`}} className="right-section">
        {listCards}
      </div>
    </div>
  );
}

export default Section