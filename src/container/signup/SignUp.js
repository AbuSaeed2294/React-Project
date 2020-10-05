import React, { Component } from "react";
import CustomButton from "../../components/customButton/CustomButton";
import InputField from "../../components/inputField/InputField";
import "./SignUp.css";

export class SignUp extends Component {
  // ****************** hanlde LOGIN BUTTON in SignUp Form to switch to login form **************************************
  hanleLoginButton = () => {
    this.props.history.push("/login");
  };
  render() {
    return (
      <div className="main-signup-page">
        <div className="signup-form">
          <InputField label="User Name" type="text" placeholder="User Name" />
          <InputField label="Email" type="email" placeholder="Email" />
          <InputField label="Password" type="password" placeholder="Password" />
          <InputField
            label="Confirm Password"
            type="email"
            placeholder="Confirm Password"
          />
          <InputField
            label="Mobile No"
            type="text"
            placeholder="0331 XXXXXXX"
          />

          {/* ************** signup button ***************************************************** */}
          <div className="signup-btn">
            <div className="signup_signup-btn">
              <CustomButton variant="outline-primary" title="SignUp" />
            </div>

            <div className="signup_login-btn">
              <CustomButton
                onButtonClick={this.hanleLoginButton}
                variant="outline-secondary"
                title="Login"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
