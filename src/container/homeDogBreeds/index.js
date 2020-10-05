import React, { Component } from "react";
import axios from "axios";
import CustomSlider from "../../components/slider/customSlider";
import { connect } from "react-redux";
import { addToFavorites } from "../../store/dogBreeds/DogBreedsAction";
import { toast } from "react-toastify";
import CustomSpinner from "../../components/spinner/CustomSpinner";

export class DogBreeds extends Component {
  // ************************************************************************************************************
  state = {
    dogList: {},
    dogUrlName: [],
    dogImagesList: [],
    dogCurrentUrl: "",
    isLoading: false,
  };

  componentDidMount() {
    axios
      .get("https://dog.ceo/api/breeds/list/all")

      .then((response) => {
        console.log("response data as :: ", response.data.message);
        this.setState({ dogList: response.data.message });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // *************************** handle FAVORITE BUTTON  *********************************************
  hanldeFavoriteButton = (currentImageUrl) => {
    var isFound = false;
    this.props.favoritesDogBreeds.map((favoriteImagesArray) => {
      if (favoriteImagesArray === currentImageUrl) {
        isFound = true;
        console.log("item found");
        // alert("Already in Favorite");
        toast.warn("Already in Favorite!", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    });

    if (!isFound) {
      this.props.addToFavorites(currentImageUrl);
      toast.success("Added To Favorite!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log("item not found");
    }
  };

  getSpecificBreedImages = (breads) => {
    axios
      .get(`https://dog.ceo/api/breed/${breads}/images`)
      .then((response) => {
        console.log("Images as  :: ", response.data);
        this.setState({ dogImagesList: response.data.message });
        console.log("state dogImagesList as ;:: ", this.state.dogImagesList);
        this.setState({ isLoading: false });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //   ******************* ONCHANGE handler for dog breeds selection **********************
  handleOnChangeDogBreeds = (e) => {
    console.log("Onchange hanlder called", e.target.value);
    this.setState({ dogUrlName: e.target.value });
    this.getSpecificBreedImages(e.target.value);
    this.setState({ isLoading: true });
  };

  // ************************ ONCLICK hanlder for favorites button *****************************
  handleFavoritesButton = () => {
    console.log("favorites button clicked");
  };

  // *****************************************
  handleImageUrlOnClick = () => {
    console.log("image clicked");
  };

  render() {
    // const override = css`
    //   display: block;
    //   margin: 0 auto;
    //   border-color: red;
    // `;

    return (
      <div style={{ backgroundColor: "rgba(231, 142, 26, 0.52)" }}>
        <div className="form-group">
          <label htmlFor="exampleSelect1">
            <h1>Select Breed</h1>
          </label>
          <select
            onChange={this.handleOnChangeDogBreeds}
            className="form-control"
            id="exampleSelect1"
          >
            {/* *********************** display list of DOG BREEDS ******************************** */}
            {Object.keys(this.state.dogList).map((dog) => (
              <option>{dog}</option>
            ))}
          </select>
          {/* <AddFavoritesDogs dogImagesList={this.state.dogImagesList} /> */}
          <CustomSpinner loading={this.state.isLoading} />,
          {!this.state.isLoading && (
            <CustomSlider
              images={this.state.dogImagesList}
              title="Add To Favorite"
              onButtonClick={this.hanldeFavoriteButton}
            />
          )}
          {/* </CustomSlider> */}
          {console.log("this.state.dogUrlName as :: ", this.state.dogUrlName)}
          {console.log(
            "this.state.dogImagesList as :: ",
            this.state.dogImagesList
          )}
        </div>
        {/* <div className="sweet-loading">
          <BeatLoader
            // css={override}
            size={25}
            color={"#123abc"}
            loading={this.state.loading}
          />
        </div> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    favoritesDogBreeds: state.DogBreedsReducer.favoritesDogBreeds,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log("dispatch BREEDS LIST as :: ", dispatch);
  return {
    addToFavorites: (currentImageUrl) =>
      dispatch(addToFavorites(currentImageUrl)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DogBreeds);
