// Цикл-версія функції
let adderToCycle = (endNum) => {
    let result = 0;
    for (let i = 0; i <= endNum; i++) {
        result += i;
    };
    return result;
};

// Рекурсія-версія функції
let adderToRecur = (endNum) => {
    if (endNum === 1) {
        return 1;
    };
    return endNum + adderToRecur(endNum - 1);
};

alert(`Обчислення для 100.\nФункція-цикл: ${adderToCycle(100)}.\nФункція-рекурсія: ${adderToRecur(100)}.`);
