console.log("Hello world!");

// This array stores every menu item and its price.
// The numbers match the numbers shown next to each item on the page.
var menu = [
  { name: "Espresso / Long Black", price: 4.50 },
  { name: "Flat White / Latte / Cappuccino", price: 5.50 },
  { name: "Hot Chocolate", price: 5.50 },
  { name: "Tea Selection", price: 4.50 },
  { name: "Toasted Bagel", price: 8.50 },
  { name: "Avocado Toast", price: 16.00 },
  { name: "Eggs on Toast", price: 13.50 },
  { name: "Toastie", price: 12.50 },
  { name: "Chicken & Bacon Panini", price: 14.50 },
  { name: "Seasonal Salad", price: 15.00 },
  { name: "Cinnamon Roll", price: 6.50 },
  { name: "Muffin", price: 6.00 },
  { name: "Chocolate Brownie", price: 5.50 },
  { name: "Extra Shot", price: 1.00 },
  { name: "Extra Milk", price: 1.00 },
  { name: "Extra Egg", price: 1.00 },
  { name: "Extra Bacon", price: 1.00 }
];

// This array stores the items the customer has added to their order
var order = [];

// This function runs when the user clicks "Add to order"
function addToOrder() {
  var itemNumber = document.getElementById("itemField").value;

  // Check the item number entered is a real menu item
  if (itemNumber >= 1 && itemNumber <= menu.length) {
    var chosenItem = menu[itemNumber - 1];
    order.push(chosenItem);
    updateOrderDisplay();
    document.getElementById("itemField").value = "";
  } else {
    document.getElementById("output").innerHTML = "Please enter a valid item number (1-" + menu.length + ").";
  }
}

// This function updates the order list and total shown on the page
function updateOrderDisplay() {
  var orderListDiv = document.getElementById("orderList");
  orderListDiv.innerHTML = "";
  var total = 0;

  // Loop through the order array and list each item with its price
  for (var i = 0; i < order.length; i++) {
    orderListDiv.innerHTML += order[i].name + " - $" + order[i].price.toFixed(2) + "<br>";
    total += order[i].price;
  }

  document.getElementById("total").innerHTML = "Total: $" + total.toFixed(2);
}

// This function runs when the user clicks "Place order"
function placeOrder() {
  var name = document.getElementById("nameField").value;
  var money = document.getElementById("moneyField").value;

  // Work out the total cost of everything in the order
  var total = 0;
  for (var i = 0; i < order.length; i++) {
    total += order[i].price;
  }

  // Check a name was entered
  if (name == "") {
    document.getElementById("output").innerHTML = "Please enter your name.";
  }
  // Check there is at least one item in the order
  else if (order.length == 0) {
    document.getElementById("output").innerHTML = "Your order is empty.";
  }
  // Check the customer has enough money
  else if (money < total) {
    document.getElementById("output").innerHTML = "Sorry " + name + ", you do not have enough money. Total is $" + total.toFixed(2) + ".";
  }
  // If everything is okay, show the receipt
  else {
    var change = money - total;
    var itemNames = "";
    for (var i = 0; i < order.length; i++) {
      itemNames += order[i].name;
      if (i < order.length - 1) {
        itemNames += ", ";
      }
    }

    document.getElementById("output").innerHTML =
      "--- RECEIPT ---<br>" +
      "Name: " + name + "<br>" +
      "Item(s): " + itemNames + "<br>" +
      "Total Cost: $" + total.toFixed(2) + "<br>" +
      "Money Given: $" + Number(money).toFixed(2) + "<br>" +
      "Change: $" + change.toFixed(2);
  }
}

// This function clears the order and resets the form
function resetOrder() {
  order = [];
  document.getElementById("nameField").value = "";
  document.getElementById("itemField").value = "";
  document.getElementById("moneyField").value = "";
  document.getElementById("output").innerHTML = "";
  updateOrderDisplay();
}
