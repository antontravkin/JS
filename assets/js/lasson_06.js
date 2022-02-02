//alert("Hello world");
let age = prompt("Введите число: ");
if (age > 17) {
    alert("больше 17");
} else if (age < 17 && age != null) {
    alert("меньше 17");
} else {
    alert("Ошибка");
}

let age2 = prompt("Введите от 1 до 9 число: ");

switch (age2) {
    case "1":
        alert("Это один");
        break;
    case "2":
        alert("Это два");
        break;
    case "3":
        alert("Это три");
        break;
    case "4":
        alert("Это четыре");
        break;
    case "5":
        alert("Это пять");
        break;
    case "6":
        alert("Это шесть");
        break;
    case "7":
        alert("Это семь");
        break;
    case "8":
        alert("Это восемь");
        break;
    case "9":
        alert("Это девять");
        break;
    default:
        alert("Ошибка");
        break;
}
if (confirm("Удалить?")) {
    alert("Удалено");
} else {
    alert("Спасибо");
}
confirm("Удалить?") ? alert("Удалено") : alert("Отмена");
console.log(age2);
