// 2. Create a suite to verify if JS program (calculator) works correctly

const Calc = require('./Calc');
const calc = new Calc();console.log(calc.add(1,2));

describe('Caculator',() => {
    let number1 = '';
    let number2 = '';    
    
    beforeEach(() => {
        number1 = Math.floor((Math.random() * 100) + 1);
        number2 = Math.floor((Math.random() * 100) + 1);
    });   


    it('Adding two integers', () => {                
        expect(calc.add(number1,number2)).toEqual(number1 + number2);
    });
    
    it('Dividing two integers', () => {                 
        expect(calc.div(number1,number2)).toEqual(number1 / number2);
    });

    it('multiplying two integers', () => {        
        expect(calc.mul(number1,number2)).toEqual(number1 * number2);
    });
   
    it('subtracting two integers', () => {        
        expect(calc.subn(number1,number2)).toEqual(number1 - number2);
    });   
});