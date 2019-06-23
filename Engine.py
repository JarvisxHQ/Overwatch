import bin.stocks as stck
import eel
eel.init('web')

@eel.expose
def stockData(stockSymb):
    price = stck.getStockPrice(stockSymb)
    if price:
        print(stockSymb, ": ", price)
        return round(price, 2), stockSymb
    else:
        print("Invalid Stock Name")
        return -1, stockSymb

eel.start('index.html', size=(1000,600))