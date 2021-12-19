
/**
 * concatenation of two characters
 * 
 * @param {string} word 
 * @returns string
 */
export function return2Char(word){
    return word.split("")[0] + word.split("")[word.length-1];
}

/**
 * return count of B in args word
 * 
 * @param {string} word 
 * @returns number
 */
export function countBs(word){
    return word.split("").filter(char=>char === "B").length;
}

/**
 * return count B while respecting imposed limit
 * 
 * @param {string} word 
 * @param {number} limit 
 * @returns number
 */
export function countBs2(word,limit){
    let array = word.split("");
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if( array[i]=== limit)count++;
    }
    
    return count;
}


