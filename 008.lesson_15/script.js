let removeElement = (array, item) => array.indexOf(item) !== -1 ? array.splice(array.indexOf(item), 1) : null;

const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5 );
console.log(array);