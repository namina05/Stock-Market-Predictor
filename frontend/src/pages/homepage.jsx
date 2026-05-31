import { useState } from 'react'
import Tickercard from '../components/tickercard'
import Errorcard from '../components/errorcard'
import Searchbar from '../components/searchbar'
import Chart from '../components/chart'
import Navbar from '../components/navbar'

function Homepage() {
  const [ticker, setTicker] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const predict = async () => {
    if(!ticker) return;
    setError("");
    setResult(null);
    setLoading(true);

    try{
      const response = await fetch(
        `http://127.0.0.1:8000/predict/${ticker}`
      );
      const data = await response.json();
      console.log("STATUS:", response.status);
      console.log("DATA:", data);
      if(!response.ok){
            setResult(null);
            setError(data.detail);
            return;
        }
        setResult(data);
    }catch(error){
      setError("Unable to connect to server.");
    }
    finally
    {setLoading(false);}
  }

  return (
    <div className='container'>
        <Navbar></Navbar>
      <h1>STOCK MARKET PREDICTOR</h1>
     <Searchbar ticker={ticker} setTicker={setTicker} predict={predict} />
      {
        loading&&(
          <p>Predicting.....</p>
        )
      }
      {
          error && (
              <Errorcard error={error}/>
          )
      }
      {
        result&&(
        <Tickercard result={result}/>
        )
      }
    </div>
  )
}

export default Homepage
