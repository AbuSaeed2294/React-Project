import React, { Component } from "react";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import CustomButton from "../customButton/CustomButton";

export class CustomSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    // return <Slider {...settings}>{this.props.children}</Slider>;
    return (
      <>
        <Slider {...settings}>
          {/* {console.log("imgArray", this.props)} */}
          {this.props.images.map((image) => {
            return (
              <div>
                <CustomButton
                  title={this.props.title}
                  onButtonClick={() => this.props.onButtonClick(image)}
                />
                <img src={image} className="dog-images" alt=" " />
              </div>
            );
          })}
          {/* {this.props.children} */}
        </Slider>
      </>
    );
  }
}

export default CustomSlider;
