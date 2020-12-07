let year = +prompt("Укажите год");
month = +prompt("Укажите месяц");
day = +prompt("Укажите день");
date = new Date((year),(month -1),(day +1));
alert(date.toLocaleDateString());