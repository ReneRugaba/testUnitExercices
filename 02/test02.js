
/**
 * return array can be test
 * 
 * @returns array[number]
 */
export function fizzBuzz(){
    let array = [];
    const fizzBuzz = "FizzBuzz";
    const fizz = "fizz";
    const buzz = "buzz";

    for (let i = 1; i <= 100; i++) {
    
        // console.log((i%3==0 || (i%5==0 && i%3!=0))?"buzz":i)
        // console.log((i%3==0 && i%5==0)?"FizzBuzz":i)
        if (i%3==0 && i%5==0) {
            
            // console.log(fizzBuzz);
            array.push(fizzBuzz);
            continue
        }else if(i%3==0){
            // console.log(fizz);
            array.push(fizz);
            continue
        }else if(i%5==0){
            // console.log(buzz);
            array.push(buzz);
            continue
        }else{
            // console.log(i);
            array.push(i);
            continue
        }
    }

    return array;

}