let circ = +prompt("Укажите длинну окружности");
let square = +prompt("Укажите периметр квадрата");
let circResult = circ / 3.14;
let squareResult = square / 4;
if (circResult < squareResult) {
    alert("Окружность поместиться в квадрат!");
} else {
    alert("Окружность не поместиться в квадрат! ");
};
