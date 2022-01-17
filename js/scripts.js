$(document).ready(function () {
    $("#price").click(function () {
        $(".price-section").show();
        $("#price").hide();
    });
    $(".price-section").click(function () {
        $("#price").show();
        $(".price-section").hide();
    });
    $(".section h1").mouseover(function () {
        $(".section h3").show();
    });
    $(".section h1").mouseout(function () {
        $(".section h3").hide();
    });
    $(".pizza").mouseover(function () {
        $(".pizza,ul,li").toggle();
    });
    $(".pizza").mouseout(function () {
        $(".pizza,ul,li").hide();
    });
});


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
    function chooseQuantity() {
        if (quantity <= 0) {
            alert("kindly select the quantity of pizza you want!");
            document.getElementById("quantity").focus();
            return false;
        }
    }
    alert("Your order will cost you " + totalCost + " . Thank you for buying from us!")

    function needDelivery() {
        if (delivery == "") {
            return false
        }
        alert("Your order will be delivered to you at " + delivery + " . You will have to pay an  extra ksh 120 delivery fee")

    }
};
