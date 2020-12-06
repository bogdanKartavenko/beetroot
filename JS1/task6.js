const EUR = 0.82;
const UAN = 28.29;
const AZN = 1.7;

let currency = +prompt("Введите сумму USD");
let сhoice = prompt("Выберите валюту. 1-EUR 2-UAN 3-AZN");
let result;
switch (сhoice) {
  case "1":
    result = currency * EUR;
    break;
  case "2":
    result = currency * UAN;
    break;
  case "3":
    result = currency * AZN;
    break;
}
alert(result);
