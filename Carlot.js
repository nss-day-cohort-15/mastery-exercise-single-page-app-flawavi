var CarLot = (function () {
  var inventory = [];

  return {
    getInventory: function () {
      return inventory
    },
    loadInventory: function (callback) {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "inventory.json");
      xhr.addEventListener("load", function (evt) {
        inventory = JSON.parse(evt.target.responseText).cars;
        callback(inventory);
      });
      xhr.send();
    }
  };

})();
