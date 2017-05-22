import { connect } from 'react-redux';
import Stations from '../Components/Stations';

const convertsongsToStations = function (songsArray) {
    const Stations = {};
    songsArray.forEach((song) => {
      let songGenre = song.genre;
    if (!Stations.songGenre){
      Stations[songGenre] = [].push(song);
    }
    else {
      Stations[songGenre].push(song);
    }
  });
  return Stations;
};

function mapStateToProps(state){
  return {
    stations: convertsongsToStations(state.songs)
  };
}

function mapDispatchToProps(dispatch){
  return {};
}

console.log(Stations);

const StationsContainer = connect(mapStateToProps,
  mapDispatchToProps)(Stations);

export default StationsContainer;
