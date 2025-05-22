console.log('Hello');

let light = prompt('Укажите цвет светофора');
console.log(light);
console.log(typeof light);

let red = 'красный';
let yellow = 'желтый';
let green = 'зеленый';

if (light === red) {
    console.log('Остановитесь!');
} else if (light === yellow) {
    console.log('Приготовьтесь!');
} else if (light === green) {
    console.log('Можно ехать!');
} else {
    console.log('Ошибка: некорректный цвет светофора.');
}