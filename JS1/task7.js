const number = +prompt("Введите сумму!");

if (number >= 200 && number <= 300) {
  number -= number * 0.03;
  alert(number);
} else if (number > 300 && number <= 500) {
  number -= number * 0.05;
  alert(number);
} else if (number > 500) {
  number -= number * 0.07;
  alert(number);
} else {
  alert("Нужно ввести сумму!");
}
