// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Echo 2022"
// console.log(cohort.split(""))

// a) Your answer: the console.log will change the value of cohort into an array. 
// b) Verify and explain: my answer was correct because the .split() is an accessor method that changes a string into an array. Although my answer was correct one detail i did not mention is the quotations within the built in method that will cause the string to be individually seperated by character


// --------------------2) What will this log?

const greeter = (name) => {
 `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: the console.log will cannot output anything because the function is missing the return
// b) Verify and explain: my answer was correct because the parameter value did not output within the terminal and came back undefined. the return in the function is the only way for the string `Hello, ${name}` to be out putted with LEARN Student as the string interpolation


// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map(number => number * 2)
console.log(multipliedByTwo)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: my answer was correct because the the variable multipliedByTwo contains an array of value numbers follow by the high order funtion .map() that will create an iteration of the given values in the array and multiply them by 2. this create an new array with the new multiplied values.


// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter(number => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer:[11, 13, 15]
// b) Verify and explain: my answwer is correct because the variable contain an array of numbers follow by the high order function .filter(). .filter() is conditioned to iterate the array and output the values that are odd numbers. the condition is set to output the values the do not divide by % 2


// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: javascript
// b) Verify and explain: the variable contains objects with key: value pairs. console.log is set to output the value at the 0 index within the variable at the language key. 


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Echo",
    this.year = 2022
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: the console.log will apply the argument within the instanse into the class to change the first object this.student = name to this.student = "gearoge". 

//this will bring back the entire class with the new argument as the value for the key this.student.

// b) Verify and explain: answer was correct because the given variable is a class with objects and the class has a parameter of name within the constructor. there is also a variable with the instance of the class with a value of "george" (const learnStudent = new Learn("George") by logging learn students we initate the action to apply george into our class directly into the this.student = name. the reason it is placed specifically in that area is because the parameter is called name so whatever the parameter is it will direct the value into name.
