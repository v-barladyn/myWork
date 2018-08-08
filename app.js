// Emulate operation which takes some time

console.log(` 1 step`);
console.log(` 2 step`);

setTimeout(() => {
    console.log(` 3 step`);
}, 2000);

console.log(` 4 step`);


//  Promise to wait for operation

console.log(` 1 step`);
console.log(` 2 step`);

 new Promise((resolve, reject) => setTimeout(() => {
    console.log(` 3 step`);
    resolve();
}, 3000)).then(() => {
    console.log(`4 step`);
});

// Use Promise.all

Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 3000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 1000))
]).then((results) =>{
    console.log(results[0]);
    console.log(results[2]);
});


// Async function

let pr =  new Promise((resolve, reject) => setTimeout(() => {
    console.log(` 3 step`);
    resolve('ready');
}, 3000));


async function test (param){
    let s1 = await param;
    console.log('test function');
    console.log(s1);

    return `I am function test`;
}
async function test1(){
    let tt = await test(pr);
    console.log('I am function test1');
    console.log(tt);
    console.log('I am function test11');
}

function testThen (param){
     param.then((el) => {console.log('Test  then function ' + el);}); 
     console.log('I am function test Then');
} 

testThen(pr);
test1();

