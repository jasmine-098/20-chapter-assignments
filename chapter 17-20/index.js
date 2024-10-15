///// Arrays and Loop

// Question 1:
// var arr = ["" , [""]]

// Question 2:
// var matrix = [
//     [0, 1, 2, 3,
//      1, 0, 1, 2,
//      2, 1, 0 ,1]
// ];
  
// for (var i = 0; i < matrix.length; i++) {
//     alert(matrix[i]);
// }  

// Question 3:
// for (var i = 0; i <= 10; i++) {
//         var x = 10;
//       document.write("<h3>" + i + "</h3>");
//     }

// Question 4:
// var userinput = prompt("Enter a number to show multiplication table?");

// if (!isNaN(userinput)) {
//   var length = (prompt("What length (e.g, 1-20)?"));
  
//   if (!isNaN(length)) {
//     for (var i = 1; i <= length; i++) {
//       document.write(userinput + " X " + i + " = " + (userinput * i) + "</br>");
//     }
//   }
// }

// Question 5:
// var fruits = ["Apple", "Mango", "Banana", "Orange", "Strawberry"];

// for (var i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// for (var i = 0; i < fruits.length; i++) {
//   console.log("Element at index " + i + " is " + fruits[i]);
// }

// Question 6:
//Counting:
//  for (var i = 1; i <= 10; i++) {
//    document.write(i + ", ");
//  }

//Reverse Counting:
// for (var i = 10; i >= 1; i--) {
//     document.write(i + ", ");
//     }

//Even Numbers:
//  for (var i = 0; i <= 20; i += 2) {
//      document.write(i + ", ");
//      }


//Odd Numbers:
// for (var i = 1; i <= 19; i += 2) {
//     document.write(i + ", ");
//      }
   
//Series (2k, 4k, etc.)
// for (var i = 2; i <= 20; i += 2) {
//     document.write(i + "k, ");
//      }

// Question 7:
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt(" What do you want to order ");
// userInput = userInput.toLowerCase();
// var itemIndex = A.indexOf(userInput);

// if (itemIndex !== -1) {
//   alert(userInput + " is available at index " + itemIndex + " in our bakery");
// } else {
//   alert("We are sorry, " + userInput + " is not available in our bakery");
// }

// Question 8:
// var A = [24, 53, 78, 91, 12];
// var largest = A[0];
// for (var i = 1; i < A.length; i++) {
//    if (A[i] > largest) {
//      largest = A[i]; 
//    }}
// document.write("The largest number is: " + largest);

// Question 9:
// var A = [24, 53, 78, 91, 12];
//  var smallest = A[0];
//  for (var i = 1; i < A.length; i++) {
//     if (A[i] < smallest) {
//       smallest = A[i]; 
//     }}
//  document.write("The smallest number is: " + smallest);

// Question 10:
// for (var i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//         document.write(i + ",    ");
//     }
//   }
