function populatePage () {
  var textInput = document.getElementById("text");
  var carCard = document.getElementsByClassName("carCard");
  var inventory = CarLot.getInventory();

  for (var i = 0; i < inventory.length; i++) {
    var addToDom = document.getElementById("displayCars")
    addToDom.innerHTML += `
      <div id="${inventory[i].model}" class="col-sm-4 borderToggle carCard" style="border-color: ${inventory[i].color}">
        <h1 class="makeModel">${inventory[i].make} ${inventory[i].model}</h1>
        <p class= "list-unstyled year">${inventory[i].year}</p>
        <p class= "list-unstyled price">${inventory[i].price}</p>
        <p class= "list-unstyled color">${inventory[i].color}</p>
        <p class= "list-unstyled purchased">${inventory[i].purchased}</p>
        <p class= "list-unstyled description">${inventory[i].description}</p>
      </div>
    `;
  }

  function bindText (){
    textInput.addEventListener("keyup", function (event) {
      document.querySelector('.altBorder .description').innerHTML = event.target.value;
    });
  }
  for(var i = 0; i < inventory.length; i++) {
    var carElement = document.getElementById(`${inventory[i].model}`);
    carElement.addEventListener("click", toggleBorderAndBackground);
  }

  function toggleBorderAndBackground (event) {
    var carCard = event.target;
    textInput.disabled = false;
    resetCarCards();
    clearAndFocus();
    bindText();
    carCard.parentElement.classList = "altBorder col-sm-4 carCard";
  }

  function resetCarCards () {
    for (var i = 0; i < carCard.length; i++) {
      carCard[i].className = "borderToggle col-sm-4 carCard"
    }
  }

    function clearAndFocus () {
      textInput.focus();
      textInput.value = "";
    }

}

CarLot.loadInventory(populatePage);
