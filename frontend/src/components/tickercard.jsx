function Tickercard({result}){
    return (<div className='card'>
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
          </div>)
}

export default Tickercard