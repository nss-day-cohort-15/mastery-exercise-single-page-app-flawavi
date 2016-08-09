"use strict"// var CarLot = (function (lot) {

//   lot.resetStyles = function (element) {

//   }

//   lot.addStyles = function (element, color) {

//   }

//   return lot

// })(CarLot);


CarLot = (function (styles) {
  console.log(styles)
  var textInput = document.getElementById("text");
  var carCard = document.getElementsByClassName("carCard");
  var inventory = CarLot.getInventory();

  styles.populatePage = function (inventory) {
  var divControl = ""
  var addToDom = document.getElementById("displayCars")
  for (var i = 0; i < inventory.length; i++) {
    if (i % 3 === 0) {
      divControl += `<div class="row">`
    }
    divControl += `
    <div id="${inventory[i].model}" class="col-sm-4 borderToggle carCard" style="border-color: ${inventory[i].color}">
      <h1 class="makeModel">${inventory[i].make} ${inventory[i].model}</h1>
      <p class= "list-unstyled year">${inventory[i].year}</p>
      <p class= "list-unstyled price">${inventory[i].price}</p>
      <p class= "list-unstyled color">${inventory[i].color}</p>
      <p class= "list-unstyled purchased">${inventory[i].purchased}</p>
      <p class= "list-unstyled description">${inventory[i].description}</p>
    </div>`
    if ((i + 1) % 3 === 0) {
      divControl += `</div>`
    };
  }
    addToDom.innerHTML = divControl

  CarLot.activateEvents();

  }
    styles.toggleBorderAndBackground = function () {
    //instert docEl and color parameteters
      var carCard = event.currentTarget;
      console.log(carCard)
      textInput.disabled = false;
      styles.resetCarCards();
      styles.clearAndFocus();
      CarLot.bindText();
      carCard.classList = "altBorder col-sm-4 carCard";
    },

    styles.resetCarCards = function () {
      for (var i = 0; i < carCard.length; i++) {
        carCard[i].className = "borderToggle col-sm-4 carCard"
      }
    },
    styles.clearAndFocus = function () {
      textInput.focus();
      textInput.value = "";
    }

    return styles


})(CarLot);

CarLot.loadInventory(CarLot.populatePage);
