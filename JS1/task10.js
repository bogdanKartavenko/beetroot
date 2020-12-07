let year = +prompt("Укажите год");
let month = +prompt("Укажите месяц");
let day = +prompt("Укажите день");
let date = new Date((year),(month -1),(day +1));
alert(date.toLocaleDateString());