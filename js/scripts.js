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
    $("#pizza").mouseover(function () {
        $("#pizza-paragraph").show();
        $("#pizza-name").hide();
    });
    $("#pizza").mouseout(function () {
        $("#pizza-paragraph").hide();
        $("#pizza-name").show();
    });
    $("#pizza-one").mouseover(function () {
        $("#pizza-paragraph-one").show();
        $("#pizza-name-one").hide();
    });
    $("#pizza-one").mouseout(function () {
        $("#pizza-paragraph-one").hide();
        $("#pizza-name-one").show();
    });
    $("#pizza-two").mouseover(function () {
        $("#pizza-paragraph-two").show();
        $("#pizza-name-two").hide();
    });
    $("#pizza-two").mouseout(function () {
        $("#pizza-paragraph-two").hide();
        $("#pizza-name-two").show();
    });
    $("#pizza-three").mouseover(function () {
        $("#pizza-paragraph-three").show();
        $("#pizza-name-three").hide();
    });
    $("#pizza-three").mouseout(function () {
        $("#pizza-paragraph-three").hide();
        $("#pizza-name-three").show();
    });
    $("#pizza-four").mouseover(function () {
        $("#pizza-paragraph-four").show();
        $("#pizza-name-four").hide();
    });
    $("#pizza-four").mouseout(function () {
        $("#pizza-paragraph-four").hide();
        $("#pizza-name-four").show();
    });
    $("#pizza-five").mouseover(function () {
        $("#pizza-paragraph-five").show();
        $("#pizza-name-five").hide();
    });
    $("#pizza-five").mouseout(function () {
        $("#pizza-paragraph-five").hide();
        $("#pizza-name-five").show();
    });
    $("#pizza-six").mouseover(function () {
        $("#pizza-paragraph-six").show();
        $("#pizza-name-six").hide();
    });
    $("#pizza-six").mouseout(function () {
        $("#pizza-paragraph-six").hide();
        $("#pizza-name-six").show();
    });
    $("#pizza-seven").mouseover(function () {
        $("#pizza-paragraph-seven").show();
        $("#pizza-name-seven").hide();
    });
    $("#pizza-seven").mouseout(function () {
        $("#pizza-paragraph-seven").hide();
        $("#pizza-name-seven").show();
    });
});


function makeOrder() {
    var pizza = document.getElementById("select").value;
    var size = document.getElementById("size").value;
    var crust = document.getElementById("crust").value;
    var toppings = document.getElementById("toppings").value;
    var quantity = document.getElementById("quantity").value;
    var delivery = document.getElementById("delivery").value;
    var topOne = document.getElementById("toppings").entered;
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
    alert("Your order of " + quantity + " " + " "+ document.getElementById("select").value  + " @ " + document.getElementById("size").value + " each with the selected toppings and crusts" + " will cost you " + totalCost + " . Thank you for buying from us!")

    function needDelivery() {
        if (delivery == "") {
            return false
        }
        alert("Your order will be delivered to you at " + delivery + " . You will have to pay an  extra ksh 120 delivery fee")

    }
};
