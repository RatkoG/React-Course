import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import userReducer from "./usersReducer";
import usersReducer from "./usersReducer";
export default combineReducers({
  posts: postsReducer,
  users: usersReducer
});
