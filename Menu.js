$(document).ready(function () {
    console.log("Agnes");
    $("#drinks").click(function () {
        $("#middleMenu").html("<div id='menuSubCategory'><h1>Drinks</h1></div>");
        $("#middleMenu").append("<div id='addOnDiv'><h2>Horchata</h2></div>");

    });
    $("#tacos").click(function () {
        $("#middleMenu").html("<div id='menuSubCategory'><h1>Tacos</h1></div>");
        $("#middleMenu").append("<div id='addOnDiv'><h2>Pastor</h2> <h2>Asada</h2> <h2>Fish</h2> <h2>Tripa</h2></div>");

    });
    $("#tortas").click(function () {
        $("#middleMenu").html("<div id='menuSubCategory'><h1>Tortas</h2></div>");
        $("#middleMenu").append("<div id='addOnDiv'><h2>Asada</h2> <h2>Milanesa</h2></div>");
    });
    $("#platos").click(function () {
        $("#middleMenu").html("<div id='menuSubCategory'><h1>Platos</h2></div>");
        $("#middleMenu").append("<div id='addOnDiv'><h2>Mole con Pollo</h2> <h2>Carne Asada con Arroz</h2></div>");
    });
    $("#tlayudas").click(function () {
        $("#middleMenu").html("<div id='menuSubCategory'><h1>Tlayudas</h2></div>");
        $("#middleMenu").append("<div id='addOnDiv'><h2>Tlayuda Regular</h2> <h2>Tlayuda con Asada</h2></div>");
    });
    $("#sides").click(function () {
        $("#middleMenu").html("<div id='menuSubCategory'><h1>Sides</h2></div>");
        $("#middleMenu").append("<div id='addOnDiv'><h2>Rice</h2> <h2>French Fries</h2></div>");
    });
});
