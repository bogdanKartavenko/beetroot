let number = prompt("Введите пятиразрядное число!");
let arr = number.split("");
if (arr[0] === arr[4] && arr[1] === arr[3]) {
  alert("Полиндромное число!");
} else {
  alert("Число не полиндромное!");
};