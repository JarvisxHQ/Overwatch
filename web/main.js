function getStockData() {
    var data = document.getElementById("data").value
    //eel.stockData(data)(function(ret) {console.log(ret)})
    eel.stockData(data)(display)
}

function display(price) {
    let infoLabel = document.getElementById("data")
    console.log("Price: " + price)
    if(price[0] == -1){
        infoLabel.placeholder = price[1] + " (Invalid Stock Name)" 
    } else{
        infoLabel.placeholder = price[1] + ": " + price[0].toString() 
    }
    infoLabel.value = ''
}