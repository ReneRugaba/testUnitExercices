/**
 * return a new reverse array
 * 
 * @param {any} tab 
 * @returns 
 */
export function reverseArray(tab){
    return tab.map(item=>item).reverse();
}

/**
 * return de same reverse array
 * 
 * @param {any} tab 
 * @returns 
 */
export function reverseArrayInPlace(tab){
    return tab.reverse()
}