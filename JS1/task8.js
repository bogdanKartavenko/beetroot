const circ = +prompt("Укажите длинну окружности");
const square = +prompt("Укажите периметр квадрата");
const circResult = circ / 3.14;
const squareResult = square / 4;
if (circResult < squareResult) {
    alert("Окружность поместиться в квадрат!");
} else {
    alert("Окружность не поместиться в квадрат! ");
};
