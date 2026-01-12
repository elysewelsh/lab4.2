//1.1. Create an empty array called shoppingList.
const shoppingList = ["bananas", "pineapple","grapes","milk"]
//1.2. Write a function called addItem that takes an item as a parameter and adds it to the shoppingList array.
// function addItem (item) {
// //2.1. Modify the addItem function to only add the item if it is not already in the shoppingList array.
//     if (shoppingList.includes(item)) {
//         console.log("Duplicate value")
//         return
//     }
//     shoppingList.push(item);
// }
// //1.3. Write a function called removeLastItem that removes the last item from the shoppingList array.
// function removeLastItem (item) {
//     shoppingList.pop(item);
// }
// //1.4. Write a function called displayList that logs all items in the shoppingList array to the console.
// function displayList (item) {
//     console.log(shoppingList)
// }

//2.2. Write a function called filterItems that takes a search term as a parameter and returns all items in the shoppingList that contain that search term (case-insensitive).
function filterItems (arr, searchTerm) {
    return arr.filter(
        function (el) {
        return el.toLowerCase().includes(searchTerm.toLowerCase());
        }
    )
}
let results = filterItems(shoppingList,"i");
results.forEach(
    function(item) {
        console.log(item);
    }
);


