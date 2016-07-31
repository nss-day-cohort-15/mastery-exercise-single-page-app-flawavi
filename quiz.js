function populatePage (inventory) {
  // Loop over the inventory and populate the page
  var addToDisplayCars = document.getElementById("displayCars")
  for (var i = 0; i < inventory.length; i++) {
    addToDisplayCars.innerHTML += `
    <div id="${inventory[i].model.replace(" ", "")}" class="col-md-4 addBorder" style="border-color: ${inventory[i].color}">
        <h1>${inventory[i].make}</h1>
            <p class= "list-unstyled">${inventory[i].model}</p>
            <p class= "list-unstyled">${inventory[i].year}</p>
            <p class= "list-unstyled">${inventory[i].price}</p>
            <p class= "list-unstyled">${inventory[i].color}</p>
            <p class= "list-unstyled">${inventory[i].purchased}</p>
            <p class= "list-unstyled">${inventory[i].description}</p>
    </div>
    `
  }
    function activateEvents (inventory) {
      addToDisplayCars.addEventListener("click", changeBorderAndBackground) {
        for (var i = 0; i < inventory.length; i++) {
          `${inventory[i]}.classList.add("altBorder")`
        }
      }
    }
    CarLot.activateEvents();
  }



// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(populatePage);
