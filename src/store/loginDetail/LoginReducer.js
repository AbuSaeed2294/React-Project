const initialState = {
  userData: "",
  isLogin: localStorage.getItem("user") ? true : false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_LOGIN_DATA": {
      localStorage.setItem(
        "user",
        JSON.stringify(action.payload) // store login data in local storage.
      );

      return {
        ...state.userData,
        userData: action.payload,
        // isLogin: true,
        isLogin: localStorage.getItem("user") ? true : false,
      };
    }
    default:
      return state;
  }
};

export default loginReducer;
