let arr = [2, 5, 7, 4, 1, 8, 6, 2, 5, 7];
let count = [];
for (let num of arr) {
    count[num] = (count[num] || 0) + 1;
}

let maxFreq = 0;
let candidates = [];

for (let key in count) {
    let num = Number(key);
    if (count[num] > maxFreq) {
        maxFreq = count[num]; 
        candidates = [num];   
    } else if (count[num] === maxFreq) {
        candidates.push(num); 
    }
}

let minNumber = Math.min(...candidates);

console.log(minNumber); 
