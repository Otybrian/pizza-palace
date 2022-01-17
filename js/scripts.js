function makeOrder() {
    var pizza = document.getElementById("select").value;
    var size = document.getElementById("size").value;
    var crust = document.getElementById("crust").value;
    var toppings = document.getElementById("toppings").value;
    var quantity = document.getElementById("quantity").value;
    var delivery = document.getElementById("delivery").value;
    var totalCost = (parseInt(toppings) + parseInt(crust) + parseInt(size)) * quantity;
    var whatIWant = selectPizza(); chosenSize(); selectedCrust(); selectedTopping(); chooseQuantity(); needDelivery();