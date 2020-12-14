const number = prompt("Введите трехзначное число!");
const arr = number.split("");
if (arr[0] === arr[1] || arr[0] === arr[2] || arr[1] === arr[2]) {
  alert("Есть совпадение!");
} else {
  alert("Совпадения нет!");
};