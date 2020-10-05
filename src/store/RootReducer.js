import { combineReducers } from "redux";
import loginReducer from "./loginDetail/LoginReducer";
import DogBreedsReducer from "./dogBreeds/DogBreedsReducer";

const rootReducer = combineReducers({
  loginReducer,
  DogBreedsReducer,
});

export default rootReducer;
