//// Arrays

// Question 1:
var studentnames = [""]

// Question 2:
var studentnames = Array()

// Question 3:
var studentnames = ["Jasmine", "Urooj", "Rozi", "Marium"];

// Question 4:
var num = [3 , 5 , 7 , 9]

// Question 5:
var array = [true , false , true , false]

// Question 6:
var mixedarray = [365, "hello", true, "SMIT", [1 , true , 3]];

// Question 7:
// var qualifications = ["SSC" , "HSC" , "BCS" , "BS" , "BCOM" , "MS" , "M.PHIL" , "PHD"]

// document.write(`
//     <h1>Qualifications:</h1>
//     <ol style="list-style-type: decimal;">
//       <li>SSC</li>
//       <li>HSC</li>
//       <li>BCS</li>
//       <li>BS</li>
//       <li>BCOM</li>
//       <li>MS</li>
//       <li>M.PHIL</li>
//       <li>PHD</li>
//     </ol>
//   `);

// Question 8:
// var studentnames = ["Michael", "John", "Tony"];
// var score = [320, 230, 460];

// document.write("<h2>Score of " + studentnames[0] + " is " + score[0] + ". Percentage: " + ((score[0]/500) * 100) + "%</h2>");
// document.write("<h2>Score of " + studentnames[1] + " is " + score[1] + ". Percentage: " + ((score[1]/500) * 100) + "%</h2>");
// document.write("<h2>Score of " + studentnames[2] + " is " + score[2] + ". Percentage: " + ((score[2]/500) * 100) + "%</h2>");

// Question 9:
// var colors = ["Red", "Yellow", "Blue", "White", "Black"];

// document.write("<h2>Colors Array:</h2>");
// document.write("<p>" + colors + "</p>");

// var addcolorstart = prompt("What color do you want to add at the beginning of the array?");
// colors.unshift(addcolorstart);
// document.write("<h2>Added colors at the beginning:</h2>");
// document.write("<p>" + colors + "</p>");

// var addcolorend = prompt("What color do you want to add at the end of the array?");
// colors.push(addcolorend);
// document.write("<h2>Added colors at the end:</h2>");
// document.write("<p>" + colors + "</p>");

// colors.unshift("Purple", "Orange");
// document.write("<h2>Added two colors at the beginning:</h2>");
// document.write("<p>" + colors + "</p>");

// colors.shift();
// document.write("<h2>Deleted the first color:</h2>");
// document.write("<p>" + colors + "</p>");

// colors.pop();
// document.write("<h2>deleted the last color:</h2>");
// document.write("<p>" + colors + "</p>");

// var addindex = prompt("At what index do you want to add a new color?")
// var addcolor = prompt("What is that color?");
// colors.splice(addindex, 0, addcolor);
// document.write("<h2>Added color at index " + addindex + ":</h2>");
// document.write("<p>" + colors + "</p>");

// var removefromindex = prompt("What is the starting index from which you want to delete colors?")
// var numberofcolorsToremove = prompt("How many colors do you want to delete?")
// colors.splice(removefromindex, numberofcolorsToremove);
// document.write("<h2>Removed " + numberofcolorsToremove + " colors starting at index " + removefromindex + ":</h2>");
// document.write("<p>" + colors + "</p>");

// Question 10:
// var studentScores = [320, 230, 480, 120];
// document.write("Scores of Students: " + studentScores.join(", ") + "<br>");

// studentScores.sort(function(a, b) {
// return a - b;
//});
//document.write("Ordered Scores of Students: " + studentScores.join(", "));

//Question 11:
// var cities = ["Karachi", "Peshawar", "Islamabad"," Skardu", "Lahore"];
// document.write("<h2>Cities:</h2>");
// document.write("<p>" + cities + "</p>");

// var slectedcities = ["Quetta", "Islamabad"];

// document.write("<h2>Selected cities list:</h2>");
// document.write("<p>" + slectedcities + "</p>");

//Question 12:
// var arr = ["This", "is", "my", "cat"];
// document.write("<h2>Array:</h2>");
// document.write("<p>" + arr + "</p>");

// var string = arr.join(" ");
// document.write("<h2>String:</h2>");
// document.write("<p>" + string + "</p>");


//Question 13:
//  var devices = ["Keyboard", "Mouse", "Printer", "Monitor", ];
// console.log(`DEVICES:Keyboard Mouse Printer Monitor`);

// var devices = ["Keyboard", "Mouse", "Printer", "Monitor"];
// document.write("<h2>Devices: " + devices.join(", ") + "<br><br></h2>");

// for (var i = 0; i < devices.length; i++) {
//     document.write( "<h3>Out: " + "<br>" + devices[i] + "<br></h3>");
// }

//Question 14:
// var devices = ["Monitor", "Printer", "Mouse", "Keyboard"];
// document.write("<h2>Devices: " + devices.join(", ") + "<br><br><h2>");

// for (var i = 0; i < devices.length; i++) {
//     document.write("<h3>Out: " + "<br>" + devices[i] + "<br></h3>");
// }

//Question 15:
// var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// document.write(`
//   <select>
//     <option>Select Manufacturer</option>
//     <option>${phoneManufacturers.join("</option><option>")}</option>
//   </select>
// `);

