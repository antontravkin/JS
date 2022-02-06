console.log("");
/* let count = 1;
do {
    console.log("do");
    count++;
} while (count <= 10);
{
    console.log("while");
} */

//let arr = [1, 4, 2, 7, 6, 54, 56, 4, 3, 4];

/* for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
} */

/* for (let item of arr) {
    console.log(item);
} */

let obj1 = {
    one: "1",
    two: "2",
    three: "3",
};

for (let key in obj1) {
    console.log(`key: ${key} = vol: ${obj1[key]}`);
}
