import { useEffect, useState } from "react"
import Navbar from "../components/navbar"
import Tickercard from "../components/tickercard";
import Chart from "../components/chart";
import Wishcard from "../components/wishcard";

function Starred(){
    const [stocks,setStocks] = useState([])
    useEffect(()=>{
        async function loadwatchlist(){
            const saved = JSON.parse(localStorage.getItem("watchlist"))|| [];
            const pred = await Promise.all(
                saved.map(
                   ticker => fetch(`/predict/${ticker}`).then(res=>res.json())
                )
            );
            setStocks(pred);
        }
        loadwatchlist();
    },[]);
    return(<>
    <Navbar/>
    <div className="container">
        <h1>WATCH LIST</h1>
        <div className="wishlist">
        {
            stocks.map(
                stock=>(
                <Wishcard stock={stock}/>
                )
            )
        }
        </div>
    </div>
    </>)
}

export default Starred