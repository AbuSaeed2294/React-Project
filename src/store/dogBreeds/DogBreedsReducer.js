const initialState = {
  favoritesDogBreeds: [],
};

const DogBreedsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      console.log("Reducer ADD_TO_FAVORITES as :: ", action.payload);
      return {
        ...state,
        favoritesDogBreeds: state.favoritesDogBreeds.concat(
          action.payload.currentImageUrl
        ),

        // favoritesDogBreeds: state.favoritesDogBreeds.map((favoratesDog) => {
        //   // favoratesDog === action.payload.currentImageUrl &&
        //   state.favoritesDogBreeds.concat(action.payload.currentImageUrl);
        // }),
      };

    case "REMOVE_BREEDS_FROM_FAVORITES":
      console.log(
        "REMOVE_BREEDS_FROM_FAVORITES Reducer",
        action.payload.currentImageUrl
      );
      return {
        ...state,
        favoritesDogBreeds: state.favoritesDogBreeds.filter(
          (favoirateBreedsUrl, index) => {
            return favoirateBreedsUrl !== action.payload.currentImageUrl;
          }
        ),
      };
    default:
      return state;
  }
};

export default DogBreedsReducer;
