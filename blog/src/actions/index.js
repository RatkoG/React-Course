import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  // console.log("About to fetch posts!");
  await dispatch(fetchPosts());
  // getState().posts;
  // console.log("fetched posts!");
  // console.log(getState().posts);
  const userIds = _.uniq(_.map(getState().posts, "userId"));
  userIds.forEach(id => dispatch(fetchUser(id)));
  // console.log(userIds);
};

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get("/posts");
  // Ovde e response.data oti sakame samo data da vratime a ne se i sesto
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};

// // Ova e stvarno sotreba da go prajme
// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
// // Private function should not be called unless you know what are you doing
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({ type: "FETCH_USER", payload: response.data });
// });

// Ova ovde pak ne raboti kako so treba
// export const fetchUser = function(id) {
//   return _.memoize(async function(dispatch) {
//     const response = await jsonPlaceholder.get(`/users/${id}`);
//     dispatch({ type: "FETCH_USER", payload: response.data });
//   });
// };

// TALLY FINE da koristime ova
// export const selectPost =()=>{
//   return{
//     type:'SELECT_POST',
//     payload:promise
//   }
// }
