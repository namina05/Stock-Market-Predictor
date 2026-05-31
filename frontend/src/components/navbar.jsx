import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div className="navbar">
            <Link className="nav-link" to = "/">HOME</Link>
            <Link className="nav-link" to = "/watchlist">WATCHLIST</Link>
        </div>
    )
}

export default Navbar