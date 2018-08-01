
// HomeWork 4

/* 1.Write a JavaScript program to break an address of an url and put it's part into an array.
URL structure : ://.org[/] and there may be no part in the address
https://eleks.com/services/quality-assurance-and-testing-services/*/

 let url = 'https://eleks.com/services/quality-assurance-and-testing-services/';
 let arr = [];
 let newArr = [];

 function splitSptringToArray (url){
     
    arr = url.split('/');

    arr.forEach(el => {
        if (el){
            newArr.push(el);
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
    console.log(`circle  area = ${Math.PI*obj.r*obj.r}`);
    return Math.PI*obj.r^2;

    case 'triangle':
    console.log(`triangle area =  ${obj.k1*obj.k2/2}`);
    return obj.k1*obj.k2/2;

    case 'square':
    console.log(`square area =  ${obj.h*obj.h}`);
    return obj.h*obj.h;

    default:
    console.log('Введено некоректний обєкт');
   
    }    
}

getArea(obj1);

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
