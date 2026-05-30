function Searchbar({ticker,setTicker,predict}){
    return (
    <div className='search'>
      <input 
      type="text"
      placeholder='ENTER COMPANY NAME'
      value={ticker}
      onChange={(e)=>setTicker(e.target.value.toUpperCase())}></input>
      <button className='btn' onClick={predict}>PREDICT</button>
      </div>
    )
}

export default Searchbar