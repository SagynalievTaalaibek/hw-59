import React from 'react';

interface Props {
  movieName: string;
  onMovieChange: React.ChangeEventHandler<HTMLInputElement>;
  deleteMovie: React.MouseEventHandler;
}

const WatchItem: React.FC<Props> = React.memo(function WatchItem({movieName,  onMovieChange, deleteMovie}) {
  return (
    <div className="input-group mb-3 align-items-center">
      <input type="text" className="form-control" value={movieName} onChange={onMovieChange}/>
      <button className="btn btn-close mx-3" type="button" onClick={deleteMovie}></button>
    </div>
  );
},
  (prevProps, nextProps) => {
    return (
      prevProps.movieName === nextProps.movieName
    );
  },
);


export default WatchItem;