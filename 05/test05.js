let isEven = false;

/**
 * check if numberOddEven is even
 * @param {number} numberOddEven 
 * @returns boolean
 */
export function recursion(numberOddEven){
    

    if(numberOddEven < 0) {
        numberOddEven *= -1;
        recursion(numberOddEven)
    }

    if(numberOddEven === 0){
        isEven=true;
    }else if(numberOddEven === 1){
        isEven = false;
    }else if(numberOddEven > 1){
        numberOddEven -= 2;
       
        recursion(numberOddEven);
    }
   
    return isEven;
}