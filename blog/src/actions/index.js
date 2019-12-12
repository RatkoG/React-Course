import jsonPlaceholder from "../apis/jsonPlaceholder";
export const fetchPosts = () => {
  // BAD APPROACH !!!!
  const promise = jsonPlaceholder.get("/posts");
  return {
    type: "FETCH_POSTS",
    payload: promise
  };
};
