import React, { Component } from "react";
import CustomButton from "../../components/customButton/CustomButton";
import InputField from "../../components/inputField/InputField";
import "./Login.css";
import { fetchLoginData } from "../../store/loginDetail/LoginAction";
import { connect } from "react-redux";

export class Login extends Component {
  state = {
    loginDetail: {
      email: "",
      password: "",
    },
  };

  // ************************** handle REGISTER BUTTON to switch to SignUp form ********************************
  hanldeRegisterButton = () => {
    this.props.history.push("./signup");
  };

  // ************************** handle ONCHANGE EVENT ON INPUT FIELD ********************************************
  handleOnChangeInput = (e) => {
    console.log("onChange Handler called  ", this.state.loginDetail);
    const loginDetail = { ...this.state.loginDetail };
    loginDetail[e.target.name] = e.target.value;
    this.setState({ loginDetail });
  };

  // ********************** handle LOGIN BUTTON ONCLICK store data in localStorage and redux *********************
  handleLoginButton = () => {
    // CONDITION if email and password is not empty then store login detail in localStorage otherwise not
    if (
      this.state.loginDetail.email !== "" &&
      this.state.loginDetail.password !== ""
    ) {
      this.props.fetchLoginData(this.state.loginDetail);
      console.log("this.state.loginDetail as : ", this.state.loginDetail);
    }
    // CONDITON if localStorage have user login detail then directly push to home component otherwise not
    if (localStorage.getItem("user")) {
      this.props.history.push("/home");
    }
  };

  // ************************* handle FORM SUBMIT *****************************************************************
  handleOnSubmitForm = (e) => {
    e.preventDefault();
  };

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  render() {
    return (
      <div className="main-login-page">
        <form
          className="container main-login-form "
          onSubmit={this.handleOnSubmitForm}
        >
          {/* ***** EMAIL field  */}
          <InputField
            label="Email"
            type="email"
            placeholder="Xyz@gmail.com"
            value={this.state.email}
            name="email"
            onChange={this.handleOnChangeInput}
          />

          {/* ****** PASSWORD field  */}
          <InputField
            label="Password"
            type="password"
            placeholder="************"
            name="password"
            value={this.state.password}
            onChange={this.handleOnChangeInput}
          />
          <div className="login-form-btn">
            <div className="login-btn">
              <CustomButton
                className="login-btn"
                // variant="outline-primary"
                title="Login"
                onButtonClick={this.handleLoginButton}
              />
            </div>

            <div className="register-btn">
              <CustomButton
                onButtonClick={this.hanldeRegisterButton}
                title="Register"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   console.log("state as :: ", state);
//   return {
//     userEmail: state.email,
//     userPassword: state.password,
//   };
// };

const mapDispatchToProps = (dispatch) => {
  console.log("dispatch as :: ", dispatch);
  return {
    fetchLoginData: (email, password) =>
      dispatch(fetchLoginData(email, password)),
  };
};

export default connect(null, mapDispatchToProps)(Login);
