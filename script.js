//1. Create an empty array called shoppingList.
let shoppingList = []
//2. Write a function called addItem that takes an item as a parameter and adds it to the shoppingList array.
function addItem (item) {
    shoppingList.push(item);
}
//3. Write a function called removeLastItem that removes the last item from the shoppingList array.
function removeLastItem (item) {
    shoppingList.pop(item);
}
//4. Write a function called displayList that logs all items in the shoppingList array to the console.
function displayList (item) {
    console.log(shoppingList)
}