console.log("Hello");

// let light = prompt('Укажите цвет светофора');
// console.log(light);
// console.log(typeof light);
//
// let red = 'красный';
// let yellow = 'желтый';
// let green = 'зеленый';
//
// if (light === red) {
//     console.log('Остановитесь!');
// } else if (light === yellow) {
//     console.log('Приготовьтесь!');
// } else if (light === green) {
//     console.log('Можно ехать!');
// } else {
//     console.log('Ошибка: некорректный цвет светофора.');
// }
// let color = prompt('цвет')
// console.log(10>20 ? 'true' : 'false' )
//
// switch (color) {
//     case 'red':console.log('red');
//     break;
//     case 'yellow':console.log('yellow');
//     break;
//     case 'green':console.log('green');
//     break;
//     default: console.log('нет такого цвета')
// }
//
// let lesson  = 6
// console.log(lesson ? '6' : '0')
// console.log(lesson && '6');
//
// let array   = [1,2,3,4,5,6,7, 'hello', 'world'];
// console.log(array[4])
// console.log(array.length)
// // console.log(array[array.length-1])
//
// for (let i = 0 ; i < array.length; i++) {
//     console.log( 'индекс =', i, array[i])
// }
//
// let i = 0;
// while (i<array.length) {
//     console.log('инд=',i,array[i])
//     i++;
// }

let array  = [42, 'текст', true, null, undefined, 3.14]
console.log(array.length);
console.log(array[0]);
console.log(array[array.length-1])
array[2] = false;
console.log(array);

let numbers = [10, 20, 30, 40, 50];
contains100 = numbers.includes(100);
console.log(contains100);

let fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi']
fruits.push('mango')
console.log(fruits);
fruits.unshift('strawberry')
console.log(fruits);
const lastRemoved = fruits.pop();
console.log('Удаленный последний элемент =', lastRemoved);
const firstRemoved = fruits.shift();
console.log('Удаленный первый элемент =', firstRemoved);
const indexOfOrange = fruits.indexOf('orange');
console.log('индекс orange =', indexOfOrange);
const hasBanana = fruits.includes('banana');
console.log("Массив содержит 'banana':", hasBanana);

numbers = [45, 12, 67, 23, 89, 34, 56, 91, 8, 77]
console.log(numbers.slice(3,7));
console.log(numbers.slice(7,10));
numbers.sort((a, b) => a - b);
console.log('Отсортированный массив:', numbers);
numbers.sort((a, b) => b - a);
console.log('Отсортированный массив:', numbers);
const resultString = numbers.join(' - ');
console.log('Объединенная строка:', resultString);

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
console.log('Объединенный массив:', combinedArray);