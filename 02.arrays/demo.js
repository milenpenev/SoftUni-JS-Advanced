const myArr = [1, 2 ,3 ,40];

console.log(myArr);
console.log(myArr[1]);
myArr[1] = 20
console.log(myArr[1]);
console.log(myArr.length);
console.log(myArr[myArr.length - 1]);

for (let i = 0; i < myArr.length; i++){
    console.log(myArr[i])
}

for (let item of myArr) {
    console.log(item)
}