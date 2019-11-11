function Pizza (crust, size) {
    this.crust = crust;
    this.size = size;
    this.toppings = [];
    this.size = size;
    this.price = [0]
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
}
