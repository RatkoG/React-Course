import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get("/posts");
  // Ovde e response.data oti sakame samo data da vratime a ne se i sesto
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};

// TALLY FINE da koristime ova
// export const selectPost =()=>{
//   return{
//     type:'SELECT_POST',
//     payload:promise
//   }
// }
