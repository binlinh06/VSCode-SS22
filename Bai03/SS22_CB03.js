let num = prompt("Nhập vào một số nguyên:");

if (isNaN(num) || num.includes(" ")) {  
    alert("Dãy không hợp lệ");
} else {
    let arr = num.split("").reverse().join("");  
    alert(`Số sau khi đảo ngược: ${arr}`);
}
