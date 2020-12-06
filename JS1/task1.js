let name = prompt('Укажите свой возраст','');

if(name <= 2) {
    alert('Ребенок');
} else if(name <= 18) {
    alert('Подросток');
} else if(name <= 60) {
    alert('Взрослый');
} else  {
    alert('Пенсионер');
};