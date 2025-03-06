let arr = [2, 5, 7, 4, 1, 8, 6, 2, 5, 7];  
let count = [];  
let maxFreq = 0;  
let result = Infinity;  
for (let i = 0; i < arr.length; i++) {
    console.log(`   ${arr[i]}`);
}
for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (count[num] === undefined) { 
        count[num] = 1; 
    } else {
        count[num]++; 
    }
}
for (let key in count) { 
    let num = Number(key);
    if (count[num] > maxFreq) {  
        maxFreq = count[num];  
        result = num;  
    } else if (count[num] === maxFreq && num < result) {  
        result = num;  
    }
}

console.log(result);  
