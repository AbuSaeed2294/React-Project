import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../container/login/Login";
import SignUp from "../container/signup/SignUp";
import Home from "../container/home/Home";
import NotFound from "../components/notFound.js/NotFound";
import SideBar from "../container/adminPanel/sideBar/SideBar";
// import AddItem from "../container/adminPanel/content/addItem/AddItem";
import NavBar from "../components/navbar/NavBar";
import { connect } from "react-redux";

export class Routing extends Component {
  render() {
    return (
      <div>
        <NavBar />

        {/* ************************************** Protected Routes ************************************************* */}
        {!this.props.isLogin && (
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
          </Switch>
        )}

        {this.props.isLogin && (
          <Switch>
            <Route exact path="/side-bar" component={SideBar} />
          </Switch>
        )}

        {/* ************************************** Normal Routes ************************************************* */}
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/not-found" component={NotFound} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("mapStateToProsp in Routing as : :  ", state);
  return {
    isLogin: state.loginReducer.isLogin,
  };
};

export default connect(mapStateToProps, null)(Routing);
