import Chart from "./chart";
import Tickercard from "./tickercard";

function Wishcard({stock}){
    return(
        <div className="wishcard">
                <h2>{stock.ticker}</h2>
                <p>Current Price : ${stock.current_price}</p>
                <p>Expected Price : ${stock.predicted_price}</p>
                <p>Predicted Change : ${stock.change_percent}%</p>
                <Chart ticker={stock.ticker}/>
        </div>
    );
}
export default Wishcard;