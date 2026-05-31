import { Children } from "react";
import Chart from "./chart";

function Tickercard({result, showButton = true}){
   const addtowatchlist =()=>{
    const watchlist = JSON.parse(
      localStorage.getItem("watchlist")
    )||[]
    if (!watchlist.includes(result.ticker)){
      watchlist.push(result.ticker);
      localStorage.setItem("watchlist",JSON.stringify(watchlist));
    }

   }

    return (
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
          <Chart ticker={result.ticker}/>
          {showButton &&(<button className="btn" onClick={addtowatchlist}>Add to watchlist</button>)}
          </div>)
}

export default Tickercard