const songsReducer = () => {
  return [
    {
      title: "Crni Mercedes",
      duration: "2:49"
    },
    {
      title: "Dance Monkey",
      duration: "3.29"
    },
    {
      title: "Serenade",
      duration: "3:12"
    },
    {
      title: "Lily",
      duration: 3.15
    }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};
