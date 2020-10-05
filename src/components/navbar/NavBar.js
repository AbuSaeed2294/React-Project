import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./NavBar.css";
import { Link } from "react-router-dom";
import store from "../../store/Store";
import { connect } from "react-redux";

export class NavBar extends Component {
  render() {
    console.log("this.props.isLogin in navbar as : ", this.props.isLogin);
    return (
      /* <div className="main-header"> */
      /* ******************************* NavBar ************************************************* */
      /* <nav className="main-nav">
            <ul className="nav-logo">
              <li>LOGO</li>
            </ul> */

      /* <ul className="nav-items">
              <li className="items">Home</li>
              <li className="items">Products</li>
              <li className="items">Services</li>
              <li className="items">Contact</li>
            </ul> */
      /* <hr className="nav-line"></hr> */
      /* </nav>
          <hr className="navbar-line"></hr>
        </div> */

      /* /////////////////////////////////////////////////////////////////////////////// */
      <div>
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
          <Navbar.Brand href="#home">L O G O</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              {/* <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            </Nav>
            <Nav>
              <Nav.Link className="nav-link-item" href="#home">
                <Link id="nav-link" to="/home">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link
                hidden={!this.props.isLogin}
                className="nav-link-item"
                eventKey={2}
              >
                <Link id="nav-link" to="/side-bar">
                  Admin Panel
                </Link>
              </Nav.Link>
              <Nav.Link hidden={this.props.isLogin} className="nav-link-item">
                <Link id="nav-link" to="/login">
                  Login
                </Link>
              </Nav.Link>
              {/* {console.log("islogin in nav as ;; ", this.props.isLogin)} */}
              <Nav.Link hidden={this.props.isLogin} className="nav-link-item">
                <Link id="nav-link" to="/signup">
                  Register
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("redux state in NavBar as :: ", state);
  return {
    isLogin: state.loginReducer.isLogin,
  };
};

export default connect(mapStateToProps, null)(NavBar);
