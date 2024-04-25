// //task one
// var firstName = prompt("Your first Name");
// var lastName = prompt("Your last Name");
// var fullName = ("hellow "+firstName+lastName+" welcome")
// alert(fullName)
// //task two
// var FarvateMobLengthUser = prompt("whats your farvoite mobile");
// var length = FarvateMobLengthUser.length;
// alert("your mobile length is " + length);
// console.log(length)

// //task three
// var countryName = prompt("Tell your country Name ");
// var diffCountry = "india"//["amerca","japan","india","srilanka","afganistan","rusha","caneda","china","bangladesh"]
// if(countryName === "pakistan"){
//    var indN = countryName.indexOf("n");
//    document.write("The index of 'n' in the word 'Pakistani' is: " + indN);
// } else if ( countryName === diffCountry ) {
// alert("sorry Plese be Off");
// };

// //task four
// var hW = prompt("say hellow world ");
// if( hW === "hellow world"){
//    var indN = hW.indexOf("d");
//    document.write("The index of 'l' in the word '' is:hellow world " + indN);
// }  
// //task five
// var word = ("pakistai")
// var cheractor = word.charAt(3)
// document.write("the third word of cheractor is : "+ cheractor)
// //task six
// var firstName = prompt("Your first Name");
// var lastName = prompt("Your last Name");
// var fullName = ("hellow "+firstName+lastName+" welcome")
// alert(fullName)
// //task seven

// var city = prompt("whats your city");var replaceN = prompt("what you replacement new city name in record")
// var replacementNewNameOfCity = replaceN.replace()
// document.write("your old city is : "+ city +"<br>")
// document.write("Now! a replace New city name is : "+replacementNewNameOfCity)
// var pra = ("Ali and Sami are best friends. They play cricket and football together")

// //task eight
// var message = ("Ali and Sami are best friends. They play cricket and football together")
// var replaceMassage = message.replace(/and/g, "&")
// document.write(replaceMassage)
// //try a new logic kike task 8



// var message = prompt("Enter a paragraph:");
// var wordChange = prompt("Enter the word you want to change in the paragraph:");
// var userWantChanges = prompt("Enter the word you want to replace it with:");

// // Create a regular expression with the 'i' flag for case-insensitive replacement
// var regex = new RegExp(wordChange, 'gi');

// var replaceMassage = message.replace(regex, userWantChanges);
// document.write(replaceMassage);

// //task nine 
// var srt = "472"
// var strN = Number(srt)
// console.log(strN)
// //task ten capital
// var userCase = prompt("Now! give (paragraf,word ,any line) ");
// var userCaseUpdate = userCase.toUpperCase();
// document.write(userCaseUpdate);
// //task 11 part 
// var Num = 35.36;
// var strNum = Num.toString()
// var withoutDot = strNum.replace('.','')
// console.log(withoutDot)
// //TASK 13
// // Function to check if a string contains any special symbols
// function containsSpecialSymbols(username) {
//     const specialSymbols = ['@', '.', ',', '!'];
//     for (let i = 0; i < specialSymbols.length; i++) {
//       if (username.includes(specialSymbols[i])) {
//         return true;
//       }
//     }
//     return false;
//   }
  
//   // Prompt the user for input
//   const username = prompt("Enter your username:");
  
//   // Check if the username contains special symbols
//   if (containsSpecialSymbols(username)) {
//     alert("Please enter a valid username without special symbols (@, ., , or !).");
//   } else {
//     alert("Username is valid: " + username);
//   }
  
//  //task 14
//  // Sample array
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// // Function to perform case-insensitive search
// function searchItem(userInput) {
//     // Convert the user input and array items to lowercase for comparison
//     var lowerUserInput = userInput.toLowerCase();
    
//     // Use a loop to search for the item
//     for (var i = 0; i < A.length; i++) {
//         if (A[i].toLowerCase() === lowerUserInput) {
//             return true; // Item found
//         }
//     }
    
//     return false; // Item not found
// }

// // Prompt user for input
// var userInput = prompt("Enter an item to search:");

// // Call the searchItem function and inform the user
// if (searchItem(userInput)) {
//     alert(userInput + " is found in the list.");
// } else {
//     alert(userInput + " is not found in the list.");
// }
// //task 15
// function isPasswordValid(password) {
//     // Check if the password is at least 6 characters long
//     if (password.length < 6) {
//         return false;
//     }

//     // Check if the password starts with a letter (not a number)
//     var firstChar = password.charAt(0);
//     if (!isNaN(firstChar)) { // isNaN checks if the character is a number
//         return false;
//     }

//     // Check if the password contains both letters and numbers
//     var hasLetter = false;
//     var hasNumber = false;
//     for (var i = 0; i < password.length; i++) {
//         var charCode = password.charCodeAt(i);
//         if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
//             hasLetter = true;
//         } else if (charCode >= 48 && charCode <= 57) {
//             hasNumber = true;
//         }
//     }

//     return hasLetter && hasNumber;
// }

// // Prompt the user for a password
// var userPassword = prompt("Enter a password:");

// // Check if the password is valid and inform the user
// if (isPasswordValid(userPassword)) {
//     alert("Password is valid.");
// } else {
//     alert("Password does not meet the requirements. Please enter a valid password.");
// }
// //task 16
// var university = "University of Karachi";
// var wordArray = university.split(" ");

// // Display the elements of the array in the browser
// for (var i = 0; i < wordArray.length; i++) {
//     document.write(wordArray[i] + "<br>");
// }
// //task 17
// // Prompt the user for input
// var userInput = prompt("Enter a string:");

// // Check if the user input is not empty
// if (userInput.length > 0) {
//     // Get the last character using charAt
//     var lastCharacter = userInput.charAt(userInput.length - 1);

//     // Display the last character
//     alert("The last character is: " + lastCharacter);
// } else {
//     alert("You did not enter a valid string.");
// }
// //task 18
// // The input string
// var inputString = "The quick brown fox jumps over the lazy dog";

// // Convert the input string to lowercase to make the search case-insensitive
// var lowerInputString = inputString.toLowerCase();

// // Define the word to search for
// var wordToSearch = "the";

// // Split the input string into an array of words
// var wordsArray = lowerInputString.split(" ");

// // Initialize a counter for the word occurrences
// var wordCount = 0;

// // Iterate through the words and count occurrences of the target word
// for (var i = 0; i < wordsArray.length; i++) {
//     if (wordsArray[i] === wordToSearch) {
//         wordCount++;
//     }
// }

// // Display the count of occurrences
// console.log("The word '" + wordToSearch + "' appears " + wordCount + " times in the input string.");

