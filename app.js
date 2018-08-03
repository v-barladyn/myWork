
// HomeWork 4

/* 1.Write a JavaScript program to break an address of an url and put it's part into an array.
URL structure : ://.org[/] and there may be no part in the address
https://eleks.com/services/quality-assurance-and-testing-services/*/

 let url = 'https://eleks.com/services/quality-assurance-and-testing-services/';
 let arr = [];
 let newArr = [];
 let helpArr = []

 function splitSptringToArray (url){
     
    arr = url.split('/');

    arr.forEach(el => {
        
            if (el){
               
                if (el.charAt(el.length-1) == ':'){
                    el = el.slice(0, el.length-1);                    
                    newArr.push(el);      

                } else if (el.indexOf('.') > -1){
                    helpArr = el.split(".")
                    helpArr.forEach(el => {                        
                    newArr.push(el);})
                }else{                    
                newArr.push(el); 
                }
            
            }
    });     
    
     console.log(newArr);
     return newArr;
 }

splitSptringToArray (url);



/* 2. Write few figures' objects (circle, triangle, square). Create function to calculate area of
each figure (one function should handle all objects). Sort objects by area*/

let obj1 = {
    type : 'circle',
    r : 5
};

let obj2 = {
    type : 'triangle',
     k1: 3,
     k2: 4
};

let obj3 = {
    type : 'square',
     h:7
    }

function getArea (obj){
    switch(obj.type){
    case 'circle':
    console.log(`circle  area = ${Math.round(Math.PI*obj.r*obj.r)}`);
    return Math.round(Math.PI*obj.r^2);

    case 'triangle':
    console.log(`triangle area =  ${Math.round(obj.k1*obj.k2/2)}`);
    return Math.round(obj.k1*obj.k2/2);

    case 'square':
    console.log(`square area =  ${Math.round(obj.h*obj.h)}`);
    return Math.round(obj.h*obj.h);

    default:
    console.log('Введено некоректний обєкт');
   
    }    
}


sortThreeNumber(getArea(obj1), getArea(obj2), getArea(obj3));



/* 3.Write a calculator function with three parameters , two arguments and math action to do
with them. Handle some of general math rules.*/

let par1 = 5;
let par2 = 6;
let par3 = '/';

function division (parametr1, parametr2){
    if(parametr2 != 0){
        return parametr1 / parametr2;

    }else{
        console.log('Ділення на ноль');
    }
}

function add (parametr1, parametr2){
    return parametr1 + parametr2;
}

function multiplication (parametr1, parametr2){
    return parametr1 * parametr2;
}

function subtraction (parametr1, parametr2){
    return parametr1 - parametr2;
}


function calculator (parametr1, parametr2, parametr3){
    switch(parametr3){
        case '/':
        return division(parametr1, parametr2);

        case '+':
        return add(parametr1, parametr2);

        case '-':
        return subtraction(parametr1, parametr2);

        case '*':
        return multiplication(parametr1, parametr2);

        default:
        console.log('Wrong date are entered');
    }
}

calculator(par1, 0, par3);


// function for sourting

function sortThreeNumber (num1, num2,num3){
        arrr = [];
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
