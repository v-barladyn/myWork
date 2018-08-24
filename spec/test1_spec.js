// 1. Create a spec to verify if JS program computes correct sum of the two given integers 

function sum(par1,par2){
    return par1 + par2;
}


describe('Jusmine',() => {
    it('computes correct sum of the two given integers ', () => {        
        expect(sum(1,2)).toEqual(3);
    });
});

