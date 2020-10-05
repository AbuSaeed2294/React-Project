export const fetchLoginData = ({ email, password }) => {
  // console.log("Action props as : ", email, password);
  return {
    type: "FETCH_LOGIN_DATA",
    payload: {
      email: email,
      password: password,
    },
  };
};
