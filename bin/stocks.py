from yahoo_fin import stock_info as stck

# Get the stock price for the given stock symbol
def getStockPrice(stockSymb):
    try:
        return stck.get_live_price(stockSymb)
    except ValueError:
        return None