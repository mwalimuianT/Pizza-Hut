function Pizza (crust, size) {
    this.crust = crust;
    this.size = size;
    this.toppings = [];
    this.size = size;
    this.price = 0
}

Pizza.prototype.cost = function() {
    var price = 0;
    if (this.size === "Small") {
        price += 5;
    }else if (this.size === "Medium") {
        price += 7;
    }else if (this.size === "Large") {
        price += 12;
    } else {
        price += 15;
    }
    for (var i = 0; i < this.toppings.length; i++) {
        price += 4;
    }
    if (this.crust === "Crispy") {
        price += 2;
    }else if (this.crust === "Stuffed") {
        price += 4;
    }else if (this.crust === "Criapy") {
        price += 3;
    }else if (this.crust === "Glutten-free") {
        price += 5;
    }else {
        price =1;
    }
}



var toppings = function() {
    var toppings = document.getElementsByClassName("toppings")
    if (toppings== checked) {
        alert("Kindly choose")
    }
}
