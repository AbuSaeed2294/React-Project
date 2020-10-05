export const addToFavorites = (currentImageUrl) => {
  console.log("Action of addToFavoirites :: ", currentImageUrl);
  return {
    type: "ADD_TO_FAVORITES",
    payload: {
      currentImageUrl,
    },
  };
};

export const removeFavoritesBreedsDog = (currentImageUrl) => {
  return {
    type: "REMOVE_BREEDS_FROM_FAVORITES",
    payload: {
      currentImageUrl,
    },
  };
};
