import { connect } from 'react-redux';
import Station from '../Components/Station';
import React, {Component} from 'react';
import Router from 'react-router';
import { convertSong } from '../utils';
import { toggleSong } from '../action-creators/player';

function mapStateToProps(state, ownProps){
  return {
    genreName: ownProps.params.genreName,
    songs: state.songs
      .filter(song => song.genre === ownProps.params.genreName)
      .map(convertSong),
    currentSong: state.player.currentSong,
    isPlaying: state.player.isPlaying
  };
}

function mapDispatchToProps(dispatch, ownProps){
  return {
    toggleOne: function (song, list) {
      dispatch(toggleSong(song, list));
    }
  };
}

const StationContainer = connect(mapStateToProps,
  mapDispatchToProps)(Station);

export default StationContainer;
