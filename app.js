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



 //  HomeWork 2

 // 1. Write a JavaScript function to check if given string includes given symbol.

 let str3 = 'sadaskl;hahdoahohklnmm,.n';
 let symbol = 'a';

 function checkSymbolInString (str, symbol){
     if (str.indexOf(symbol) > -1){
         console.log(` У стрічці '${str}' зустрічається символ '${symbol}'`);
         return true;
     }else{
        console.log(` У стрічці '${str}' зустрічається символ '${symbol}'`);
        return false;
     }

 }

 checkSymbolInString(str3, symbol);

 // 2. Write a JavaScript function to check whether a string is blank or not.

let str4 = '1 1';

function checkIfStringIsBlank(str){
    if (str.length > 1){
        console.log(` У стрічці ' ${str}'  більше  одного символа`);
        return true;
    }else{
       console.log(` Стрічка  '${str}'  пуста `);
       return false;
    }
}

checkIfStringIsBlank(str4);

// 3.  Write a JavaScript function to convert a string in abbreviated form. console.log(abbrev (“Nazar Babii")) – should be “N.B.”

let str5 = 'Nazar Babii';

function convertStringToAbbrev(str){
    let res = '';

    arr = str.split(' ');   

    arr.forEach((el) => {
        
        res = res.concat(`${el.charAt(0)}.`);
    })  
         console.log(`Convert from "${str}" to ${res}`);
         return res;
}

convertStringToAbbrev(str5);

// 4. Write a JavaScript function that accept two integers and display the larger

let num9 = 12;
let num10 = 13;

function returnLargerInteger(num1, num2){
    if (num1 > num2){
        console.log(num1);
        return num1;
    }else if (num1 === num2){
        console.log('Числа однакові');
        return; 
    }else {
        console.log(num2);
        return num2;
    }
}

returnLargerInteger(num9, num10);

// 5. Write a JavaScript function with conditional statement to sort three numbers.

let num11 = 2;
let num12 = 1;
let num13 = 3
let arrr =  [];

function sortThreeNumber (num1, num2,num3){

    if (num1 > num2 && num1 > num3){

        arrr[0] = num1;

        if (num2 > num3 ){

            arrr[1] = num2;
            arrr[2] = num3;

            console.log(arrr);
            return arrr;
        }else {
            arrr[1] = num3;
            arrr[2] = num2;

            console.log(arrr);
            return arrr;
        }
    }else if(num2 > num1 && num2 > num3){
        arrr[0] = num2;

        if (num1 > num3){

            arrr[1] = num1;
            arrr[2] = num3;

            console.log(arrr);
            return arrr;

        }else {
            arrr[1] = num3;
            arrr[2] = num1;

            console.log(arrr);
            return arrr;
        }
    }else{
        arrr[0] = num3;

        if (num1 > num2){

            arrr[1] = num1;
            arrr[2] = num2;

            console.log(arrr);
            return arrr;
            
        }else {
            arrr[1] = num2;
            arrr[2] = num1;

            console.log(arrr)
            return arrr;
        }
    }
}

sortThreeNumber(num11, num12, num13);