console.log("train area");

//Task -F

function findDoublers(string) {
    for (let i = 0; i < string.length; i++) {
        for (let j = i + 1; j < string.length; j++) {
            if (string[i] === string[j]) {
                
                return true;
               
            }
        }
    }
    return false;
}


console.log(findDoublers("hello"));  
console.log(findDoublers("world"));





