import React from "react";
import LowerCard from "./LowerCard";

function LowerSection() {
  const lowerCards = [
    {
      title: "Will I get lifetime updates?",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, quam! Nesciunt ipsum accusantium dolorem omnis!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ipsam animi illo rem dicta omnis numquam eius consectetur nam sequi.",
    },
    {
      title: "Landify provide code kit as well?",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, quam! Nesciunt ipsum accusantium dolorem omnis!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ipsam animi illo rem dicta omnis numquam eius consectetur nam sequi.",
    },
  ];

  const lowerCards2 = [
    {
      title: "Can I use the Landify for a client's product?",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, quam! Nesciunt ipsum accusantium dolorem omnis!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ipsam animi illo rem dicta omnis numquam eius consectetur nam sequi.",
    },
    {
      title: "Do you have a free trial of Landify",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, quam! Nesciunt ipsum accusantium dolorem omnis!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ipsam animi illo rem dicta omnis numquam eius consectetur nam sequi.",
    },
    {
      title: "Who can use Landify?",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, quam! Nesciunt ipsum accusantium dolorem omnis!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ipsam animi illo rem dicta omnis numquam eius consectetur nam sequi.",
    },
  ];

  const listOne = lowerCards.map((item, index) => {
    return <LowerCard key={index} item={item} />;
  });

  const listTwo = lowerCards2.map((item, index) => {
    return <LowerCard key={index} item={item} />;
  });

  return (
    <div className="lower-section">
      <div className="header">
        <h2>Frequently Asked Questions</h2>
        <p>If you have any futher questions please contact us</p>
      </div>
      <div className="lower-container">
        <div className="collapsable-box">{listOne}</div>
        <div className="collapsable-box">{listTwo}</div>
      </div>
    </div>
  );
}

export default LowerSection;
