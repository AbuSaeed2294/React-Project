import React, { Component } from "react";
import Heading from "../heading/Heading";
import CustomButton from "../customButton/CustomButton";
import "./Banner.css";

export class Banner extends Component {
  render() {
    return (
      <div>
        <section className="main-section">
          <div className="heading-comp">
            <Heading
              heading="Dramatically Engage"
              paragraph="Objectively innovate empowered manifuctured product whereas parllel
            platforms"
            />
          </div>

          <div className="banner-btn">
            <CustomButton title="ENGAGE NOW" />
          </div>
        </section>
      </div>
    );
  }
}

export default Banner;
