import React from 'react';
import Card from './Card'

function UpperSection() {
  const box1 = [
    {
      title: "Accounting and Analysis",
      text: "We've designed and built  experience aosnjnreeak that have  driven sales Lorem ipsum dolor sit amet.",
      color: "#feedb5",
    },
    {
      title: "Preparatory Course",
      text: "The ability to independently value an enterprise is an essential tool for making business and strategic decisions Lorem ipsum dolor sit amet.",
      color: "#ffcac4",
    },
  ];

  const box2 = [
    {
      title: "Finance and Banking",
      text: "The ability to independently value on  enterprise is an essential tool for  making business and sjkadjkrnefoi renaeosdi Lorem ipsum dolor sit amet.",
      color: "#b4e0c5",
    },
    {
      title: "Business English Writing Skills",
      text: "A unique opportunity to gain guidance and feedback from out expert Lorem ipsum dolor sit amet.",
      color: "#feedb5",
    },
  ];

  const box3 = [
    {
      title: "Strategic Business Leader",
      text: "Strategic Business Leader is a training course from the Strategic Professional level Lorem ipsum dolor sit amet.",
      color: "#ffcac4",
    },
    {
      title: "Strategic Business Reporting",
      text: "Strategic Business Reporting is a professional level training course. It covers topics related to advanced financial reporting including leasing. Lorem ipsum dolor sit amet.",
      color: "#b4e0c5",
    },
  ];

  const listCardsOne = box1.map((item, index) => {
    return <Card item={item} key={index} />
  });

  const listCardsTwo = box2.map((item, index) => {
    return <Card item={item} key={index} />;
  });

  const listCardsThree = box3.map((item, index) => {
    return <Card item={item} key={index} />;
  });

  return (
    <div className="upper-section">
      <div className="header">
        <h1>Services we provide </h1>
        <p>
          We specialist in organising professional <br /> training courses
        </p>
      </div>
      <div className="box-container">
        <div className="two-box">
          {listCardsOne}
        </div>
        <div className="two-box">
          {listCardsTwo}
        </div>
        <div className="two-box">
          {listCardsThree}
        </div>
      </div>
    </div>
  );
}

export default UpperSection