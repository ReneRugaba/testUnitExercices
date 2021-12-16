export function rangeTake2args(nb1,nb2){
    let arrayNumber = [];
    for (let i = nb1; i <= nb2; i++) {
       arrayNumber.push(i);
    }
    return arrayNumber;
}

export function rangeTakeArray(tab){
    let sum = 0;

    for (let i = 0; i < tab.length; i++) {
       sum += tab[i]; 
    }

    return sum;

}

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