console.log("rr");

let obj = {
    name: "Anton",
    phone: ["8(900)-00-00", "8(920)-00-00"],
    work: true,
};

console.log(obj["phone"][0]);
console.log(obj.work);

let obj2 = [
    {
        name: "Anton",
        phone: ["8(900)-00-00", "8(920)-00-00"],
        work: true,
    },
    {
        name: "Ivan",
        phone: ["8(900)-01-00", "8(920)-01-00"],
        work: false,
    },
    {
        name: "Max",
        phone: ["8(900)-00-01", "8(920)-00-01"],
        work: true,
    },
];
console.log(`work: ${obj2[1].work}`);
