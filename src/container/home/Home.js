import React, { Component } from "react";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/footer/Footer";
import "./Home.css";

export class Home extends Component {
  render() {
    return (
      <div>
        <div className="main-page">
          {/* add cinditions */}
          {/* <NavBar /> */}
          <Banner />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
