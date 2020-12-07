let year = prompt("Укажите год");
let month = prompt("Укажите месяц");
let day = prompt("Укажите день");
let date = new Date((year -1),(month),(day +1));
alert (date);
