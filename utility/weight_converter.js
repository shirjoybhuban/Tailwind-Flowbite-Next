export const convertToPounds = (value,unit) => {
    console.log('aa',[value,unit]);
    if(value != NaN && value != null){
        if(unit == 'lbs'){
            return value;
        }else if(unit == 'oz'){
            return ounceToPounds(value)
        }else if(unit == 'kg'){
            return kgToPounds(value)
        }else if(unit == 'g'){
            return gramToPounds(value)
        }
    }else{
        return null;
    }
    

}

const ounceToPounds = (value) => {
    return value * 0.0625;
}

const kgToPounds = (value) => {
    return value * 2.20462;
}

const gramToPounds = (value) => {
    return value * 0.00220462;
}
