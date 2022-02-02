let arr = [0, 65, "str", true];
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log(arr);
console.log(arr[1]);
arr[arr.length - 1] = "25";
console.log(arr);

console.log(matrix);
console.log(matrix[1][1]);

arr.shift();
arr.push("123");
console.log(arr);
console.log(arr.pop()); //
console.log(arr);
console.log(arr.unshift(3));
console.log(arr);
let arr2 = [1, 2, 3];
console.log(arr.concat(arr2));
console.log(arr.indexOf("str"));
console.log(arr.join(","));
console.log(arr);
console.log(arr.splice(1, 1, "hello"));
console.log(arr);
console.log(arr.includes("hello"));
console.log(arr.reverse());
console.log("Anton, Ivan, Max".split()); //
console.log("Anton".split("")); //
