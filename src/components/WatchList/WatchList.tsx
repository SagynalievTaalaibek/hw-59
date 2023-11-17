import React, {useState} from 'react';
import {Movie} from '../../types';
import WatchItem from './WatchItem';


const WatchList = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [newMovie, setNewMovie] = useState('');


  const onChangeMovies = (event: React.ChangeEvent<HTMLInputElement>) => {
    const movie = event.target.value;

    setNewMovie(movie);
  };

  const onSubmitMovie = (event: React.FormEvent) => {
    event.preventDefault();

    setMovies((prevState) => {
      const lastElement = prevState[prevState.length - 1];
      const id = lastElement ? lastElement.id + 1 : 1;

      return [...prevState, {id, movieName: newMovie}];
    });

    setNewMovie('');
  };


  const movieChangeInput = (event: React.ChangeEvent<HTMLInputElement>, id: number) => {
    const newFilm = event.target.value;

    setMovies((prevState) => prevState.map((movie) => {
      if (movie.id === id) {
        return {...movie, movieName: newFilm };
      }

      return movie;
    }));
  };

  const deleteMovie = (id: number) => {
    setMovies((prevState) => prevState.filter(movie => {
      return movie.id !== id;
    }));
  };

  return (
    <>
      <form onSubmit={onSubmitMovie}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            required={true}
            value={newMovie}
            onChange={onChangeMovies}
          />
          <button className="btn btn-outline-secondary" type="submit">Add</button>
        </div>
      </form>
      {movies.length > 0 ? movies.map((movie) => (
        <WatchItem
          key={movie.id}
          movieName={movie.movieName}
          onMovieChange={(event) => movieChangeInput(event, movie.id)}
          deleteMovie={() => deleteMovie(movie.id)}
        />
      )) : <p>Add some new movie</p>}
    </>
  );
};

export default WatchList;