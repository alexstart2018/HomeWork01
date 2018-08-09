'use strict';
let a = prompt('Введите значение а',"");
let b = prompt('Введите значение b',"");
let x = 400;
if (a > b) {
    x = a + b / 2 * 4
}
else if (a < b) {
    x = a - b + 2 / b *4
}
alert('При введенных вами значениях a и b значение х равен' + x);