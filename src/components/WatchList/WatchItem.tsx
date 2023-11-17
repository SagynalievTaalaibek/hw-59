import React from 'react';
import {Movie} from '../../types';

interface Props {
  movie: Movie;
  onMovieChange: React.ChangeEventHandler<HTMLInputElement>;
  deleteMovie: React.MouseEventHandler;
}

const WatchItem: React.FC<Props> = ({movie, onMovieChange, deleteMovie}) => {
  return (
    <div className="input-group mb-3 align-items-center">
      <input type="text" className="form-control" value={movie.movieName} onChange={onMovieChange}/>
      <button className="btn btn-close mx-3" type="button" onClick={deleteMovie}></button>
    </div>
  );
};

export default WatchItem;