import React from "react";
import { connect } from "react-redux";

const SongDetail = song => {
  console.log(song);

  return <div>Song Detail</div>;
};

const mapStateToProps = state => {
  return {
    song: state.selectedSong
  };
};

export default connect(mapStateToProps)(SongDetail);
