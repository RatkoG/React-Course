// Action Creator
export const selectedSong = song => {
  return {
    // return an action
    type: "SONG_SELECTED",
    payload: song
  };
};
