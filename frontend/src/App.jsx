import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [ticker, setTicker] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const predict = async () => {
    if(!ticker) return;
    setLoading(true);

    try{
      const response = await fetch(
        `http://127.0.0.1:8000/predict/${ticker}`
      );
      const data = await response.json();
      if(!response.ok){

            setError(data.detail);
            return;
        }
        setResult(data);
    }catch(error){
      console.error(error);
    }
    finally
    {setLoading(false);}
  }

  return (
    <div className='container'>
      <h1>STOCK MARKET PREDICTOR</h1>
      <div className='search'>
      <input 
      type="text"
      placeholder='ENTER COMPANY NAME'
      value={ticker}
      onChange={(e)=>setTicker(e.target.value.toUpperCase())}></input>
      <button className='btn' onClick={predict}>PREDICT</button>
      </div>
      {
        loading&&(
          <p>Predicting.....</p>
        )
      }
      {
          error && (
              <p className="error">
                  ❌ {error}
              </p>
          )
      }
      {
        result&&(
          <div className='card'>
            <h2>{result.ticker}</h2>
            <p>
              Current Price : ${result.current_price}
            </p>
            <p>
            Predicted Price:
            ${result.predicted_price}
          </p>

          <p>
            Expected Change:
            {result.change_percent}%
          </p>
          </div>
        )
      }
    </div>
  )
}

export default App
