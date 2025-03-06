let arr = [];
let n = +prompt("Nhập số phần tử của mảng: ");
for (let i = 0; i < n; i++) {
    let newElement = +prompt(`Nhập phần tử thứ ${i + 1}: `);
    arr.push(newElement);
}
let sorted = arr.toSorted();
console.log(sorted);