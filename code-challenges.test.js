// ASSESSMENT 2: Coding Practical Questions with Jest

// const { exportAllDeclaration } = require("@babel/types")
// const { it } = require("node:test")
// const { hasUncaughtExceptionCaptureCallback } = require("process")
// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]


// b) Create the function that makes the test pass.



// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

// pseudo: Create a test using the testing syntax for jest.
//syntax for jest: 
// In the the describe () method label your argument divisibleByThree 
// apply the it() method to explain the intent in plain words
//add your expect statment within the curly braces of your it() method along with the following function call and argument
//following the expect statement use the jestmatcher .toEqual(along with the expected outcome) 

// describe("divisibleByThree", () => {
//     it("Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not", ()=>{
//         expect(divisibleByThree({ number: 15 })).toEqual("15 is divisible by three")
//         expect(divisibleByThree({ number: 0 })).toEqual("0 is divisible by three")
//         expect(divisibleByThree({ number: -7 })).toEqual("-7 is not divisible by three")
//     })
// })
const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 =  { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

//pseudo: after running the test, expect a good failure after running yarn jest
// a good failure stops at the expect statment
// ReferenceError: divisibleByThree is not defined

//       40 | describe("divisibleByThree", () => {
//       41 |     it("Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not", ()=>{
//     > 42 |         expect(divisibleByThree({ number: 15 })).toEqual(`15 is divisible by three`)


// b) Create the function that makes the test pass.
//pseduo: create function with a condition
// input- objects with number values
// output - 15 and 0 is divisible by three, -7 ia NOT divisible by three. 

// const divisibleByThree = (object) =>{
//     if(object.number % 3 === 0) {
//         return  `${object.number} is divisible by three`
//     } else if ( object.number % 3 === 0) {
//         return  `${object.number} is divisible by three`
//     } else if ( object.number % 3 !== 0){
//         return   `${object.number} is not divisible by three`
//     }
// }






// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.
        
// a) Create a test with expect statements for each of the variables provided.

//PSEUDO: use the describe method and label your argument as capitalizee 
// apply the it() method to explain the intent in plain words
//add your expect statment within the curly braces of your it() method along with the following function call and argument
//following the expect statement use the jestmatcher .toEqual(along with the expected outcome) 

// describe( "capitalize", () => {
//     it("Create a function that takes in an array of words and returns an array with all the words capitalized.", () => {
//         expect(capitalize(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
//         expect(capitalize(randomNouns2)).toEqual( ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
//     })
// })

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
 const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
 // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

 //pseudo: after running the test, expect a good failure after running yarn jest
// a good failure stops at the expect statment


// ReferenceError: capitalize is not defined

// 95 | describe( "capitalize", () => {
// 96 |     it("Create a function that takes in an array of words and returns an array with all the words capitalized.", () => {
// >  97 |         expect(capitalize(array)).toEqual( "Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew")

// b) Create the function that makes the test pass.

// const capitalize = (array) => { 
//     let eachItem = array.map((value) => {
//         return value[0].toUpperCase() + value.substring(1)
//   })
//   return eachItem.join(" ").split(" ")
//   }
  


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.


//PSEUDO: use the describe method and label your argument as firstVowelIndex
// apply the it() method to explain the intent in plain words
//add your expect statment within the curly braces of your it() method along with the following function call and argument
//following the expect statement use the jestmatcher .toEqual(along with the expected outcome) 

// describe("firstVowelIndex", () => {
//     it("Create a function that takes in a string and logs the index of the first vowel.", ()=>{
//         expect(firstVowelIndex(vowelTester1)).toEqual(1)
//         expect(firstVowelIndex(vowelTester2)).toEqual(0)
//         expect(firstVowelIndex(vowelTester3)).toEqual(2)
//     })
// })

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// ReferenceError: firstVowelIndex is not defined

 //pseudo: after running the test, expect a good failure after running yarn jest
// a good failure stops at the expect statment

// 138 | describe("firstVowelIndex", () => {
// 139 |     it("Create a function that takes in a string and logs the index of the first vowel." , () => {
// > 140 |         expect(firstVowelIndex("learn")).toEqual(1)

// b) Create the function that makes the test pass.
// Pseudo: create a function named firstVowelIndex
//create a variable with the values of a, e, i, o, u as an array
// use for loop to make an iteration on the parameter
//use the if() condtion method that will evaluate whether the parameters will inlude the following vowels. 
// use return i to output the index of the outcome of the given iteration.

// const firstVowelIndex = (string) => {
//     const vowels = ['a','e','i','o','u']
//     for(let i = 0; i < string.length; i++) {
//       if(vowels.includes(string[i])){
//           return i
//       }
//     }
//   }