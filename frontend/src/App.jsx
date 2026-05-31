import {BrowserRouter, Route,Routes} from "react-router-dom"
import './App.css'
import Homepage from './pages/homepage'
import Starred from "./pages/starred"

function App() {
  return(
    <BrowserRouter>

      <Routes>

        <Route
        path="/"
        element = {<Homepage/>}
        />

        <Route
        path = "/watchlist"
        element = {<Starred/>}
        />

      </Routes>

    </BrowserRouter>
  )
}

export default App
