//1.1. Create an empty array called shoppingList.
const shoppingList = []
// 3.1. Create an HTML page with an input field, an "Add Item" button, and an unordered list to display the items.
let addItemButton = document.getElementById("addItemButton");
let itemList = document.getElementById("itemList");
let itemInput = document.getElementById("itemInput");
//3.3. Write another function that removes the last item and updates the displayed list when a "Remove Last Item" button is clicked.
let removeItemButton = document.getElementById("removeItemButton");
//1.2. Write a function called addItem that takes an item as a parameter and adds it to the shoppingList array.
function addItem () {
  let itemText = itemInput.value;
  if (itemText === "") {
    alert("Please enter an item!");
    return;
  }
//2.1. Modify the addItem function to only add the item if it is not already in the shoppingList array.
    let results = filterItems(shoppingList,itemText);
    if (results.length > 0) {
        alert("This item is already on the list!");
    } else {
        shoppingList.push(itemText);
        let listItem = document.createElement("li");
        listItem.innerText = itemText;
        itemList.appendChild(listItem);
    }
    itemInput.value = ""; // Clear the input field
}
//1.3. Write a function called removeLastItem that removes the last item from the shoppingList array.
function removeLastItem () {
    shoppingList.pop();
    displayList();
}
//1.4. Write a function called displayList that logs all items in the shoppingList array to the console.
function displayList () {
    shoppingList.forEach(function(item) {
        console.log(item);
    });
}
//2.2. Write a function called filterItems that takes a search term as a parameter and returns all items in the shoppingList that contain that search term (case-insensitive).
function filterItems (arr, searchTerm) {
    return arr.filter(
        function (el) {
        return el.toLowerCase().includes(searchTerm.toLowerCase());
        }
    )
}
//3.2. Write a JavaScript function that adds items to the array and updates the displayed list dynamically when the button is clicked.
addItemButton.addEventListener("click",addItem);
//3.3. Write another function that removes the last item and updates the displayed list when a "Remove Last Item" button is clicked.
removeItemButton.addEventListener("click", function () {
    removeLastItem(); // Remove last item from shoppingList array
    itemList.innerHTML = ""; // Clear existing list
     for (let i = 0; i < shoppingList.length; i++) {
        let listItem = document.createElement("li");
        listItem.innerText = shoppingList[i];
        itemList.appendChild(listItem);
    }
});