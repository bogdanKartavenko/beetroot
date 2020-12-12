const year = +prompt("Укажите год");
const month = +prompt("Укажите месяц");
const day = +prompt("Укажите день");
const date = new Date((year),(month -1),(day +1));
alert(date.toLocaleDateString());