import {useEffect, useState} from 'react';
import {Joke} from '../../types';


const Joke = () => {
  const URL = 'https://api.chucknorris.io/jokes/random';
  const [jokes, setJokes] = useState<Joke[]>([]);
  const [newJoke, setNewJoke] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(URL);

      if (response.ok) {
        const jokes: Joke = await response.json();
        const {id, value} = jokes;

        setJokes((prevState) => {
          return [...prevState, {id, value}];
        });
      }
    };

    void fetchData();
  }, [newJoke]);


  return (
    <>
      <button className="btn btn-primary" type="button" onClick={() => setNewJoke(!newJoke)}>New Joke</button>
      {jokes.map((joke) => (
        <div className="card my-3" key={joke.id}>
          <div className="card-body">
            <h5 className="card-title">Chuck Joke</h5>
            <p className="card-text">{joke.value}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Joke;