function containsDuplicate(arr){


    for(let i = 0; i < arr.length; i++){
        for(let j = i +1; j < arr.length; j++){
            if(arr[i] == arr[j]) return true
        }
    }

    return false

}

function containsDuplicate2(arr){

   arr.sort();

   for(let i = 0; i < arr.length; i++){
       if(arr[i] == arr[i+1]) return true;
   }
   return false;

}

function containsDuplicate3(arr){
    obj = {}
    for(let i = 0; i < arr.length; i++){
        obj[arr[i]] = obj[arr[i]] + 1 || 1;

        if(obj[arr[i]] > 1) return true;
    }
    return false;

}

function containsDuplicate4(arr){

    const obj = new Set();

    for(let i = 0; i < arr.length; i++){
        obj.add(arr[i]);
        console.log(obj);
        if(obj.size == arr.length) return false;
    }
    return true
}

console.log(containsDuplicate4([1,2,3,1,3,3,5]));