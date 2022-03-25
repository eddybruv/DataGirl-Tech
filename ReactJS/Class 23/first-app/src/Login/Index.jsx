import React from 'react'
import Style from './style.module.css'
import Img from '../Dashboard/download.jpeg'

function Index() {
  return (
    <div className={Style["task2-container"]}>
      <div className={Style["general-container"]}>
        <div className={Style["first-component"]}>
          <div>
            <h1 className={Style["big-title"]}>Lorem, ipsum.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
              distinctio!
            </p>
          </div>
          <div className={Style["right-first"]}>
            <span>0</span> <hr /> <span>0</span>
          </div>
        </div>
        <div className={Style["second-component"]}>
          <h4>Recent logins</h4>
          <div style={{ display: "flex", gap: "1rem" }}>
            <div className={Style.card}>
              <div style={{ width: "fit-content", fontSize: "1.6rem" }}>0</div>

              <div style={{ margin: "1rem" }}>
                <img src={Img} style={{ width: "50px", height: 50 }} alt="" />
                <p style={{ marginTop: 10 }}>Hello</p>
              </div>

              <div style={{ width: "fit-content", fontSize: "1.6rem" }}>0</div>
            </div>
            <div className={Style.card}>
              <div style={{ width: "fit-content", fontSize: "1.6rem" }}>0</div>

              <div style={{ margin: "1rem" }}>
                <img src={Img} style={{ width: "50px", height: 50 }} alt="" />
                <p style={{ marginTop: 10 }}>Hello</p>
              </div>

              <div style={{ width: "fit-content", fontSize: "1.6rem" }}>0</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index