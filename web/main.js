function getStockData() {
    var data = document.getElementById("stockSymb").value;
    //eel.stockData(data)(function(ret) {console.log(ret)})
    if(data == "Admin") {
        console.log("Login");
        window.open("profile.html","_self");
    } else {
        eel.stockData(data)(display);
    }
}

function display(price) {
    let infoLabel = document.getElementById("stockSymb");
    console.log("Price: " + price);
    if(price[0] == -1){
        infoLabel.placeholder = price[1] + " (Invalid Sybml)"; 
    } else{
        infoLabel.placeholder = price[1] + ": " + price[0].toString(); 
    }
    infoLabel.value = '';
}