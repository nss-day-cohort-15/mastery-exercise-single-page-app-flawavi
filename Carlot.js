var CarLot = (function () {
  var inventory = [];

  return {
    getInventory: function () {
      return inventory
    },
    loadInventory: function (callback) {
      var inventoryLoader = new XMLHttpRequest();
      inventoryLoader.open("GET", "inventory.json");
      inventoryLoader.addEventListener("load", function (evt) {
        inventory = JSON.parse(evt.target.responseText).cars;
        callback(inventory);
      });
      inventoryLoader.send();
    }
  };

})();
