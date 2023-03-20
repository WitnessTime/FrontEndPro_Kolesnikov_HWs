// Function itself.
let pow = (num, degree) => degree === 0 ? 1 : num * pow(num, degree - 1);

// Example.
let number = +prompt(`Введіть число, яке необхідно піднести до степіня:`, 5);
let power = +prompt(`Введіть степінь (від'ємний степінь не підтримується):`, 5);
alert(pow(number, power));