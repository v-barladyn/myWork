/* 3.Create a spec to verify if JS program that compare two given numbers return true if
one of the number is 50 or if their sum is 50*/

function compareIteger(num1, num2){
    if((num1 === 50 || num2 === 50) || (num1 + num2 === 50)){
        return true;        
    }else{
        return false;
    }
}

describe('Compare integers',() => {

    it('Compare integers second == 50', () => {        
        expect(compareIteger(1,50)).toBe(true);
    });
    it('Compare integers first == 50', () => {        
        expect(compareIteger(1,5)).toBe(false);
    });

    it('Compare integers sum == 50', () => {        
        expect(compareIteger(5,45)).toBe(true);
    });

});