import { combineReducers } from "redux";
import {
  AuthReducer,
  SignUpReducer,
  ProfileReducer,
  EducationReducer,
  ExperienceReducer,
  PostReducer,
} from "./auth.reducer";

export default combineReducers({
  AuthReducer,
  SignUpReducer,
  ProfileReducer,
  EducationReducer,
  ExperienceReducer,
  PostReducer,
});
