import yfinance as yf

def get_history(ticker):
    data = yf.download(
        ticker,
        period = "6mo"
    )

    if data.empty:
        raise ValueError(F"{ticker} not found")
    # print(data)
    return {
        "dates" : [str(date.date()) for date in data.index],
        "prices" : [round(float(price),2) for price in data["Close"].squeeze()]
    }