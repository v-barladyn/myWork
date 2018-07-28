console.log("\nNice work! Your first application have been launched.");
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
  });

// HomeWork 1

 // Write a JS program to compute and print the sum of the two given integers

 let num1 = 5;
 let num2 = 7;
 console.log(num1 + num2);

 // 2. Write a JS program to create a new string adding “Test_" in front of a given string

 let str1 = 'test';
 let str2 = 'Test_' + str1;
 console.log(str2);


 // 3. Write a JS program to combine and print your first, last name and age

 let firstName = 'Vasyl';
 let lastName = 'Barladyn'
 let age = 25;

 console.log('My firstNmae is ' + firstName 
 + ' , my lastName is ' + lastName 
 + ' , I am ' + age + ' years old' );

 // 4. Write a JS program to check a given integer is bigger then 100

let num3 = 999;

 console.log(num3 > 100);

 // 5. Write a JS program to find if the first number is larger from the two given positive integers

 let num4 = 9;
 let num5= 77;

 console.log(num4 > num5);

 // 6  Write a JS program to check two given numbers and return true if one of the number is 50 or if their sum is 50

 let num6 = 45;
 let num7 = 3;

 console.log((num6 === 50 || num6 === 50) || (num6 + num7 ===50));
 
 // 7. Write a JS program check if a given positive number is a multiple of 3 or a multiple of 7
 
 let num8 =  21;
 if (num8 % 3 === 0 && num8 % 7 === 0){
     console.log(` Число ${num8} кратне 3 і 7`)
 }else if (num8 % 3 === 0){
    console.log(` Число ${num8} кратне 3`)
 }else if (num8 % 7 === 0){
    console.log(` Число ${num8} кратне 7`)
 }else {
     console.log(` Число ${num8} не кратне ні 7, ні 4`);

 }