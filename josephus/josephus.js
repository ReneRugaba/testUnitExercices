export function createArray(nb){
    let array=[];
    for (let i = 1; i <= nb; i++) {
        array.push(i);
    }

    return array;
}

export function josephus(nb,nth){
    let start = 0;
    let arrayPrisoners=createArray(nb);
    
  while(arrayPrisoners.length>1){
   
    start= ((start+nth)) % arrayPrisoners.length ;
   
    arrayPrisoners.splice(start,1)
  }
  
  return arrayPrisoners[0];
}

