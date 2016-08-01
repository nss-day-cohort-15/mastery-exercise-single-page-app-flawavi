function populatePage () {
  // Loop over the inventory and populate the page
  var inventory = CarLot.getInventory();

  for (var i = 0; i < inventory.length; i++) {
    var addToDom = document.getElementById("displayCars")
    addToDom.innerHTML += `
    <div id="${inventory[i].model}" class="col-sm-4 borderToggle" style="border: 5px solid ${inventory[i].color}">
        <h1 style="width: 100%">${inventory[i].make} ${inventory[i].model}</h1>
            <p class= "list-unstyled">${inventory[i].year}</p>
            <p class= "list-unstyled">${inventory[i].price}</p>
            <p class= "list-unstyled">${inventory[i].color}</p>
            <p class= "list-unstyled">${inventory[i].purchased}</p>
            <p class= "list-unstyled" id="description">${inventory[i].description}</p>
    </div>`

  }

  for(var i = 0; i < inventory.length; i++) {
    var carElement = document.getElementById(`${inventory[i].model}`);
    carElement.addEventListener("click", ChangeBorderAndBackground);
  }

  function ChangeBorderAndBackground (event) {
    console.log(event.target.classList)
    console.dir(event.target)
    // check to see if targeted div doesn't have a class of "addBorder",
    if (event.target.classList === "borderToggle") {
      event.target.classList = "altBorder col-sm-4";
    } else if (event.target.classList !== "addBorder") {
      event.target.parentElement.classList = "altBorder col-sm-4";
      console.dir(event.target.parentElement);
    }
  }

    var textInput = document.getElementById("text")
    textInput.addEventListener("click", clearAndFocus)

    function clearAndFocus (event) {
    if (event.target.classList === "borderToggle") {
      textInput.focus;
      textInput.value = "";
      }
    }

    var description = document.getElementById("text");
    description.addEventListener("keyup", function (event) {
    document.getElementById("description").innerHTML = event.target.value;
    });

        // CarLot.activateEvents();
}

function activateEvents() {
  populatePage();
}


// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(activateEvents);
