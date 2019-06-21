import bin.stocks as stck
import eel
eel.init('web')

@eel.expose
def stockData(stockSymb):
    price = stck.getStockPrice(stockSymb)
    if price:
        print(stockSymb, ": ", price)
        return price
    else:
        print("Invalid Stock Name")
        return -1

eel.start('index.html', size=(1000,600))