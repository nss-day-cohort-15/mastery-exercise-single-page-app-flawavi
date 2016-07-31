function populatePage (inventory) {
  // Loop over the inventory and populate the page
  var addToDisplayCars = document.getElementById("displayCars")
  for (var i = 0; i < inventory.length; i++) {
    addToDisplayCars.innerHTML += `
    <div id="${inventory[i].model.replace(" ", "")}" class="col-md-4 addBorder" style="border-color: ${inventory[i].color}">
        <h1>${inventory[i].make} ${inventory[i].model}</h1>
            <p class= "list-unstyled">${inventory[i].year}</p>
            <p class= "list-unstyled">${inventory[i].price}</p>
            <p class= "list-unstyled">${inventory[i].color}</p>
            <p class= "list-unstyled">${inventory[i].purchased}</p>
            <p class= "list-unstyled">${inventory[i].description}</p>
    </div>
    `
  }

  var carElement = document.getElementById(`${inventory[0].model.replace(" ", "")}`)
  console.log(`${inventory[0].model.replace(" ", "")}`);
  carElement.addEventListener("click", ChangeBorderAndBackground(event));

  function ChangeBorderAndBackground (event) {
    console.log("event", event);
    if (event.target.classList = "addBorder") {
      event.target.class = "altBorder";
    } else {
      event.target.class = "addBorder";
    }
  }

        // CarLot.activateEvents();
}



// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(populatePage);
