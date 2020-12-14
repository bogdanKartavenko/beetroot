const question = +prompt('2+2=? 1.=5 2.=4 3.=6');
const result = 0;
if(question === 2) {
    result += 2;
};
question = +prompt('Какой cd torrent(1ур) Kunkka? 1.16s 2.14s 3.12s');
if(question === 1) {
    result += 2;
};
question = +prompt('Ответ 3 1.mqppqw 2.dqwcd 3.wqcdaq');
if(question === 3) {
    result += 2;
};
alert(`Ваш результат ${result}`);