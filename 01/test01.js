
/**
 * return array with objects to test
 * @returns array[Object]
 */
export function pyramid(){
    let char="" //char for console.log
    let testObject={test:""}; //object to test
    let arrayTest=[]; // array for objects to test

    for(let i=1; i<=7;i++){
        char+="#";
        testObject.test=char;
        arrayTest.push(testObject);
        console.log(char);
    }

    return arrayTest;
}