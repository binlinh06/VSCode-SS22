let students =[ "Duy sexy lady", "Duy be de" ,"Duy chim nho","Duy dau bui"]
console.log(students)

//Read one

// students[3];
// console.log(students[3],"cut")
// students[students.length-1];

//Read all
// for (let i = 0; i <students.length; i++) {
//     console.log(students[i], "CÚT NGAY");
// }
// for (let i = students.length -1; i >=0 ; i--) {
//     console.log(students[i], "CÚT NGAY");
// }

// for(let student of students){
//     console.log(student);
// }

// for(let index in students){
//     console.log(index, students[index]);
// }

//Create(Them dau)
//unshift(new)
students.unshift("Duy con cac");
console.log(students);
//Create(Them cuoi)
//push(new)
students.push("Duy con ca co");
console.log(students);
//Create(Them bat ky)
//splice(index,0,new)
students.splice(2,0,"Duy con me m");    
console.log(students);
//Update
students[6] = "Duy con buom";
console.log(students);
//Delete

//Xoa dau
//shift()
students.shift();
console.log(students);
//Xoa cuoi
//pop()
students.pop();
console.log(students);
//Xoa vi tri bat ki
//splice(index,1)
students.splice(3,1);
console.log(students);



