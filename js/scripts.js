function makeOrder() {
    var pizza = document.getElementById("select").value;
    var size = document.getElementById("size").value;
    var crust = document.getElementById("crust").value;
    var toppings = document.getElementById("toppings").value;
    var quantity = document.getElementById("quantity").value;
    var delivery = document.getElementById("delivery").value;
    var totalCost = (parseInt(toppings) + parseInt(crust) + parseInt(size)) * quantity;
    var whatIWant = selectPizza(); chosenSize(); selectedCrust(); selectedTopping(); chooseQuantity(); needDelivery();

    function selectPizza() {
        if (pizza == "") {
            alert("please select the type of pizza you want!");
            document.getElementById("select").focus();
            return false;
        }
    }
    function chosenSize() {
        if (size == "") {
            alert("what size do you want?");
            document.getElementById("size").focus();
            return false;
        }
    }
    function selectedCrust() {
        if (crust == "") {
            alert("ooops! you forgot to select the crust you want!");
            document.getElementById("crust").focus();
            return false;
        }
    }
    function selectedTopping() {
        if (toppings == "") {
            alert("what topping would you like?");
            document.getElementById("toppings").focus();
            return false;
        }
    }
};
