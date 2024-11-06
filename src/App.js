import { useEffect, useState } from 'react';
import './App.css';
import Movie from './component/Movie';

// https://api.coinpaprika.com/v1/tickers?limit=10
// http://localhost:8081/reply/all/1244/1
// https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=8344c161e851343f33ceb78f3de3fc62&targetDt=

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearchMovies = () => {
    return search === ''
      ? movies
      : movies.filter((movie) => movie.movieNm.includes(search));
  };

  useEffect(() => {
    // 비동기 통신의 시점을 정한다.
    fetch(
      'https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=8344c161e851343f33ceb78f3de3fc62&targetDt=20241105',
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.boxOfficeResult.dailyBoxOfficeList));
    console.log(movies);
    setLoading(false);
  }, []);

  return (
    <div className="App container">
      <h1>🎮The Movies🎮</h1>
      {loading ? <strong>Loading....</strong> : null}

      <div className="searchBar">
        <input
          type="text"
          placeholder="Search..."
          onChange={onChangeSearch}
          value={search}
        />
        <button>Search</button>
      </div>

      <ul className="list-group">
        {getSearchMovies().map((movie) => (
          <Movie key={movie.movieCd} {...movie} />
        ))}
      </ul>
    </div>
  );
}

export default App;
