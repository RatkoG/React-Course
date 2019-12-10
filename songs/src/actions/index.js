// Action Creator
export const selectCont = song => {
  return {
    // return an action
    type: "SONG_SELECTED",
    payload: song
  };
};
