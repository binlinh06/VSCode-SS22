let arr = [];
let n = +prompt("Nhập số phần tử của mảng: ");
for (let i = 0; i < n; i++) {
    let newElement = +prompt(`Nhập phần tử thứ ${i + 1}: `);
    arr.push(newElement);
}

let even = 0; 
let odd = 0;  

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        even += arr[i];
    } else {
        odd += arr[i];
    }
}

alert(`Tổng số chẵn: ${even}
Tổng số lẻ: ${odd}`);
