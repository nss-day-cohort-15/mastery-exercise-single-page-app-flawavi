  CarLot = (function (lot) {
  var textInput = document.getElementById("text");

  lot.activateEvents = function () {
  var inventory = CarLot.getInventory();

  for(var i = 0; i < inventory.length; i++) {
    var carElement = document.getElementById(`${inventory[i].model}`);
    carElement.addEventListener("click", CarLot.toggleBorderAndBackground)
    }
  }

  lot.bindText = function (){
    textInput.addEventListener("keyup", function (event) {
      document.querySelector('.altBorder .description').innerHTML = event.target.value;
    });

  }


  return lot

})(CarLot);



