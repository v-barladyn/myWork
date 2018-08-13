// 1.JSON

let student = {  //Create a variable student and set ‘name’, ‘surname’ and ‘rate’ in json format
    "name": "Vasyl",
    "surname": "Barladyn",
    "rate": 21
}

console.log(student.name); //Output ‘name’ value

let str = JSON.stringify(student); //Use JSON.stringify() method to make a JSON string

console.log(str); //Change ‘rate’ value and output it

student.rate = 22;
console.log(student.rate); //Change ‘rate’ value and output it


// 2. Random 
//Create js program which will provide you a string with a defined length
let randomstring = require("randomstring");
 

let randStr = randomstring.generate({
    length : 5//,
    //charset: "asdfg"
})

console.log(randStr);

// Create js program which will provide you a integer with a defined length

let int = Math.floor(Math.random() * 100)
console.log(int);