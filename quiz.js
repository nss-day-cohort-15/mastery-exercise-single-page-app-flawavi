function populatePage () {
  // Loop over the inventory and populate the page
  var inventory = CarLot.getInventory();

  for (let i = 0; i < inventory.length; i++) {
    var addToDom = document.getElementById("displayCars")
    addToDom.innerHTML += `
    <div id="${inventory[i].model}" class="col-md-4 addBorder" style="border-color: ${inventory[i].color}">
        <h1>${inventory[i].make} ${inventory[i].model}</h1>
            <p class= "list-unstyled">${inventory[i].year}</p>
            <p class= "list-unstyled">${inventory[i].price}</p>
            <p class= "list-unstyled">${inventory[i].color}</p>
            <p class= "list-unstyled">${inventory[i].purchased}</p>
            <p class= "list-unstyled">${inventory[i].description}</p>
    </div>`

  }
  for(let i = 0; i < inventory.length; i++) {
    var carElement = document.getElementById(`${inventory[i].model}`);
    carElement.addEventListener("click", ChangeBorderAndBackground);
  }


  function ChangeBorderAndBackground (event) {
    console.log(event.target.classList)
    console.dir(event.target)
    // check to see if targeted div doesn't have a class of "addBorder",
    if (event.target.classList === "addBorder") {
      event.target.classList = "altBorder";
    } else if (event.target.classList !== "addBorder") {
      event.target.parentElement.classList = "altBorder";
    }
    // if (event.target.classList === "addBorder") {
    //   event.target.parentNode.class = "altBorder";
    //   console.dir(event.target.parentNode)
    // } else if (event.target.classList !== "addBorder") {
    //   event.target.parentNode.class = "altBorder";
    // }
  }

        // CarLot.activateEvents();
}

function activateEvents() {
  populatePage();
}


// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(activateEvents);
