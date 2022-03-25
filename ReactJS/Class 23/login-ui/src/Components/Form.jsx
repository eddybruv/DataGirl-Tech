import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function Form() {
  return (
    <>
      <form>
        <div className="firsthalf">
          <div className="details">
            <input
              type="text"
              className="detailsField"
              placeholder="Phone number, username, or email"
            />{" "}
          </div>
          <input type="checkbox" /> <span>Remember for 30 days</span>
        </div>

        <div className="secondhalf">
          <div className="password">
            <input
              className="passwordField"
              type="password"
              placeholder="Password"
            />
            <FontAwesomeIcon icon={faEyeSlash} />
          </div>
          <a href="#">Forgot password</a>
        </div>
      </form>
      <div className="buttons">
        <button className="sign-in">Sign In</button> <br />
        <button className="register">Create New Account</button>
        <div className="last-line">
          <div className="line-two"></div>
          <p>Or continue with</p>
          <div className="line-two"></div>
        </div>
      </div>
      <div className="images">
        <img src="https://freesvg.org/img/1534129544.png" alt="" />
        <img
          src="https://brandlogos.net/wp-content/uploads/2021/04/facebook-icon.png"
          alt=""
        />
        <img
          src="https://www.citypng.com/public/uploads/preview/-51614117232aso9q2exl5.png"
          alt=""
        />
      </div>
      <p>
        By clicking this button you asume <a href="">greatness</a> from the one {" "}
        <a href="">who is</a>
      </p>
    </>
  );
}

export default Form;
