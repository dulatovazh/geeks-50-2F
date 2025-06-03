console.log("Hello");

function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return "Четное";
    } else {
        return "Нечетное";
    }
}
console.log(checkEvenOdd(4));
console.log(checkEvenOdd(7));


function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5));
console.log(factorial(0));


function findMax(arr) {
    if (arr.length === 0) {
        return undefined; // или можно выбросить ошибку, если массив пустой
    }
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax([1, 5, 3, 9, 2]));
console.log(findMax([-5, -1, -8]));


function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    const lowerStr = str.toLowerCase();
    for (let char of lowerStr) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("hello"));
console.log(countVowels("world"));


function sumArray(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}
console.log(sumArray([1, 2, 3, 4, 5]));
console.log(sumArray([-1, -2, 3]));
