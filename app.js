/*console.log("\nNice work! Your first application have been launched.");
console.log("Now, I need to know your name, type it below: ");

let stdin = process.openStdin();

stdin.addListener("data", (txt) => {
    if(txt.toString().trim() === "quit") {
        console.log("\nHave a nice JS trip! Bye-bye");
        stdin.end();
    } else {
        console.log(`\nHi ${txt.toString().trim()}, nice to meet you at Eleks QA Academy 2018. I am sure you'll become great in your job.`);
        console.log(`${txt.toString().trim()}, to quit this application you can use 'Ctrl + C' keys, or type 'quit' and hit 'Enter'`); 
    }   
  });*/

// HomeWork 3

 // 1. Write a JavaScript function to get the last element of an array

 let arr = ['qq', '44', '11', 'ee'];

 function getLastElementOfArray (arr){
    console.log(`Останній елемент масиву ${arr} є ${arr[arr.length-1]}`);
    return arr[arr.length-1];
 }  

 getLastElementOfArray(arr);

 // 2. Write a simple JavaScript program to join all elements of the following array into a string
 
 let arr1 = ['qq', '44', '11', 'ee'];
 let str = arr1.join(" ");

 console.log(`convert array '${arr1}' to string wit separatorh " "   '${str}'`);

 /* 3. There are two arrays with individual values, write a JavaScript program
to compute the sum of each individual index value from the given arrays
and save them to third array */

let arr2 = ['qq', '44', '11', 'ee'];
let arr3 = [1,2,3];
res = [];

function addArrays(arr1, arr2){
    if (arr1.length > arr2.length){
        for (i = 0; i < arr1.length; i++){
            if (arr2[i] == undefined){
                res[i] = arr1[i];
            }else{
             res[i] = arr1[i] + arr2[i];
            }
        }
        console.log(` Array [ ${arr1} ] + array [ ${arr2} ] = array [ ${res} ]`);
        return res;
        
    }else{
        for (i = 0; i < arr2.length; i++){
            if (arr1[i] == undefined){
                res[i] = arr2[i];
            }else{
             res[i] = arr2[i] + arr1[i];
            }
        }
        console.log(` Array [ ${arr1} ] + array [ ${arr2} ] = array [ ${res} ]`);
        return res;
    }
   
}

addArrays(arr2, arr3);

/* 4. Write a JavaScript program to calculate the area and perimeter of a
rectangle. Rectangle should be an object with properties width and
height and methods getArea() and getPerimeter();*/

let rectangle = {width : 3, height : 2};
let area;
let perimeter;

function getArea(obj){  
    area = obj.width*obj.height;

    console.log(`Area rectangle with width  ${obj.width} and height ${obj.height}   = ${area}`);
    return area;
}

function getPerimeter(obj){ 
    perimetr = 2 * (obj.width + obj.height);
    console.log(`Perimetr rectangle with width  ${obj.width} and height ${obj.height}   = ${perimetr}`);
    return perimetr;
}

getArea(rectangle);
getPerimeter(rectangle);