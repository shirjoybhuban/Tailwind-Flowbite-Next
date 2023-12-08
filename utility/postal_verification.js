export const postal_verification = (input,country) => {
    if(country == 'CA'){
        if(input && input.length == 7){
            const regex = /^\S{3} \S{3}$/;
            const match = regex.test(input);
            if (match) {
                return true;
            }
        }else if(input && input.length == 6){
            const regex = /^\S{3}\S{3}$/;
            const match = regex.test(input);
            if (match) {
                return true;
            }
        }else{
            return false;
        }
    } else if(country == 'US'){
        if(input){
            return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(input);
        }else{
            return false;
        }
    } else{
        return true;
    }
}
