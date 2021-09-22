/**
prepare a list of grocery items to buy.
add 5 items
print the first item on the list.
print the third item on the list.
print the last item on the list.
 */
var groceryList = ["flowers","milk","samosas","eggs","juice","mangoes","chocolates"];

for(var i=0; i<groceryList.length; i++){
  console.log(groceryList[i]);//going over an array and calling a function
}

//This is how you go over an array and then you call a fucntion(calling the function multiple times with different data )
// console.log(groceryList[0]);
// console.log(groceryList[3]);
// console.log(groceryList[4]);

// //another way to access the last item 
// //array has a property length.
// var HowLongIsThisArray = groceryList.length
// console.log(HowLongIsThisArray);
// console.log(groceryList[groceryList.length - 1])

/**
 Another way of writing the above code on line no 8,10,11

 function log(data){
   console.log(data);
 }

var groceryList = ["flowers","milk","samosas","eggs","juice","mangoes","chocolates"];

for (var i=0; i<groceryList.length; i++){
  log(groceryList[i]);
  //calling the log function with a different data everytime
}

 */
