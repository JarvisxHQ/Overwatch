function getStockData() {
    var data = document.getElementById("data").value
	eel.stockData(data)(function(ret) {console.log(ret)})
}