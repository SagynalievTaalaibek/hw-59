import WatchList from './components/WatchList/WatchList';
import Joke from './components/Joke/Joke';

const App = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-5 p-3">
          <WatchList/>
        </div>
        <div className="col-6 p-3">
          <Joke/>
        </div>
      </div>
    </div>
  );
};

export default App;