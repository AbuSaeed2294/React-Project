import React, { Component } from "react";
import { connect } from "react-redux";
import "./Favorites.css";
import CustomSlider from "../../components/slider/customSlider";
import { removeFavoritesBreedsDog } from "../../store/dogBreeds/DogBreedsAction";
import { toast } from "react-toastify";

export class RemoveFavoritesDogs extends Component {
  hanldeRemoveFromFavoritesButton = (imageUrl) => {
    this.props.removeFavoritesBreedsDog(imageUrl);
    toast.success("Removed!", {
      position: "top-center",
      autoClose: 0.5,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          {this.props.favoritesDogBreeds.length > 0 ? (
            <h2>
              Total Favorite Dogs # {this.props.favoritesDogBreeds.length}
            </h2>
          ) : (
            <h2>No Dog in Favorite</h2>
          )}
          <CustomSlider
            images={this.props.favoritesDogBreeds}
            title="Remove From Favorite"
            onButtonClick={this.hanldeRemoveFromFavoritesButton}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("stateInFvt : ", state);
  return {
    favoritesDogBreeds: state.DogBreedsReducer.favoritesDogBreeds,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFavoritesBreedsDog: (currentImageUrl) =>
      dispatch(removeFavoritesBreedsDog(currentImageUrl)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RemoveFavoritesDogs);
