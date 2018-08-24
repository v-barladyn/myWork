class Calc {  

    add(parametr1, parametr2) {
        return parametr1 + parametr2; 
    }

    subn(parametr1, parametr2) {
        return parametr1 - parametr2; 
    }

    div(parametr1, parametr2) {
        
        if(parametr2 != 0){
            return parametr1 / parametr2;
    
        }else{
            console.log('Ділення на ноль');
        }
    
    }
    mul(parametr1, parametr2) {
        return parametr1 * parametr2;
    }
};


module.exports = Calc;