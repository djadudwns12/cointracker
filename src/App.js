import { useEffect, useState } from 'react';
import './App.css';

// https://api.coinpaprika.com/v1/tickers?limit=10

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    // 비동기 통신의 시점을 정한다.
    fetch('https://api.coinpaprika.com/v1/tickers?limit=10')
      .then((response) => response.json())
      .then((data) => setCoins(data));
    console.log(coins);
    setLoading(false);
    console.log('useEffect!!');
  }, []);

  return (
    <div className="App container">
      <h1>🎮The Coins🎮</h1>
      {loading ? <strong>Loading....</strong> : null}
    </div>
  );
}

export default App;
