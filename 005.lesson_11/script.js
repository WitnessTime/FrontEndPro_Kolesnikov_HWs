let givenArray = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];


// 1 Знайти суму та кількість позитивних елементів.
let positivesInArray = givenArray.filter(element => element > 0); // Положительные значения в массиве
console.log(positivesInArray);

let numberOfPositives = positivesInArray.length; // Даёт количество положительных элементов в массиве
console.log(numberOfPositives);

let sumOfPositives = positivesInArray.reduce((acc, val) => acc + val, 0); // Сумма этих положительных значений
console.log(sumOfPositives);

// 2 Знайти мінімальний елемент масиву та його порядковий номер.
let minElementOfArray = Math.min.apply(null, givenArray); // Минимальный элемент массива
console.log(minElementOfArray); 

let minElementOfArrayIndex = givenArray.indexOf(minElementOfArray); // Индекс минимального элемента
console.log(minElementOfArrayIndex);

// 3 Знайти максимальний елемент масиву та його порядковий номер.
let maxElementOfArray = Math.max.apply(null, givenArray); // Максимальный элемент массива
console.log(maxElementOfArray); 

let maxElementOfArrayIndex = givenArray.indexOf(maxElementOfArray); // Индекс максимального элемента
console.log(maxElementOfArrayIndex);

// 4 Визначити кількість негативних елементів
let negativesInArray = givenArray.filter(element => element < 0).length;
console.log(negativesInArray);

// 5 Знайти кількість непарних позитивних елементів.
let oddPositives = positivesInArray.filter( element => element %2 != 0);
console.log(oddPositives);

let oddPositivesLength = oddPositives.length;
console.log(oddPositivesLength);

// 6 Знайти кількість парних позитивних елементів.
let evenPositives = positivesInArray.filter( element => element %2 == 0);
console.log(evenPositives);

let evenPositivesLength = evenPositives.length;
console.log(evenPositivesLength);

// 7 Знайти суму парних позитивних елементів.
let evenPositivesSum = evenPositives.reduce((acc, val) => acc + val, 0);
console.log(evenPositivesSum);

// 8 Знайти суму непарних позитивних елементів.
let oddPositivesSum = oddPositives.reduce((acc, val) => acc + val, 0);
console.log(oddPositivesSum);

// 9 Знайти добуток позитивних елементів.
let positivesInArrayMul = positivesInArray.reduce((acc, val) => acc * val, 1);
console.log(positivesInArrayMul);

// 10 Знайти найбільший серед елементів масиву, ост альні обнулити.
let onlyMaxValueArray = givenArray.map(value => value == maxElementOfArray ? value : 0);
console.log(onlyMaxValueArray);

alert(`1. Сума усіх позитивних елементів - ${sumOfPositives}, кількість - ${numberOfPositives};
2. Мінімальний елемент масиву - ${minElementOfArray}, його порядковий номер (індекс) - ${minElementOfArrayIndex};
3. Максимальний елемент масиву - ${maxElementOfArray}, його порядковий номер (індекс) - ${maxElementOfArrayIndex};
4. Кількість негативних елементів - ${negativesInArray};
5. Кількість непарних позитивних елементів - ${oddPositivesLength};
6. Кількість парних позитивних елементів - ${evenPositivesLength};
7. Сума парних позитивних елементів - ${evenPositivesSum};
8. Сума непарних позитивних елементів - ${oddPositivesSum};
9. Добуток позитивних елементів - ${positivesInArrayMul};
10. Найбільший серед елементів масиву - ${maxElementOfArray}, інші обнулити - ${onlyMaxValueArray}.`);