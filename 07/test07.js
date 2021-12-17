/**
 * it should created number array with 2 args
 * 
 * @param {number} nb1 
 * @param {number} nb2 
 * @returns {number} array
 */
export function rangeTake2args(nb1,nb2){
    let arrayNumber = [];
    for (let i = nb1; i <= nb2; i++) {
       arrayNumber.push(i);
    }
    return arrayNumber;
}

/**
 * return sum of number in args array
 * 
 * @param {array} tab 
 * @returns 
 */
export function rangeTakeArray(tab){
    let sum = 0;

    for (let i = 0; i < tab.length; i++) {
       sum += tab[i]; 
    }

    return sum;

}

/**
 * return number array
 * 
 * @param {number} nb1 
 * @param {number} nb2 
 * @param {number} nb3 
 * @returns retur number array 
 */
export function rangeTake3args(nb1,nb2,nb3){
    let arrayNumber = [];

    if(nb3>0){
        for (let i = nb1; i <= nb2; i++) {
           arrayNumber.push(i);
        }
    }else if(nb3<0) {
        for (let i = nb1; i >= nb2; i--) {
            arrayNumber.push(i);
         }
    }
    
    return arrayNumber;
}