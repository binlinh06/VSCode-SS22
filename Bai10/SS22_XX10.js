let arr = [];
let luaChon;
let menu = `MENU
1.Nhập vào mảng
2.Hiển thị mảng
3.Thêm phần tử 
4.Sửa phần tử
5.Xóa phần tử
6.Thoát
Lựa chọn của bạn: `
do {
    luaChon = +prompt(menu)
    switch (luaChon) {
        case 1:
            let n = +prompt("Nhập số phần tử của mảng: ");
            for (let i = 0; i < n; i++) {
                let newElement = +prompt(`Nhập phần tử thứ ${i + 1}: `);
                arr.push(newElement)
            }
            console.log(arr)
            break;
        case 2:
            for (let i = 0; i < arr.length; i++) {
                console.log(`${i}.${arr[i]}`);
            }
            break;
        case 3:
            let addIndex = +prompt("Nhập vào vị trí muốn thêm")
            let newElement = +prompt("Vui lòng nhập vào phần tử muốn thêm vào mảng")
            arr.splice(addIndex,0,newElement)
            break;
        case 4:
            let UpdateIndex = +prompt("Nhập vào vị trí muốn sửa")
            let UpdateElement = +prompt("Vui lòng nhập vào phần tử muốn sửa vào mảng")
            arr[UpdateIndex]=UpdateElement
            break;
        case 6:
            break;
    }
} while (luaChon !== 6)