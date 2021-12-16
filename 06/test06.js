export function return2Char(word){
    return word.split("")[0] + word.split("")[word.length-1];
}

export function countBs(word){
    return word.split("").filter(char=>char === "B").length;
}

export function countBs2(word,limit){
   let array = word.split("");
    let count = 0;
   for (let i = 0; i < array.length; i++) {
       if(i < limit && array[i]=== "B")count++;
   }
   
   return count;
}


