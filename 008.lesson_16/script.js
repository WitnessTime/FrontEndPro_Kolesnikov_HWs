// Function itself
let generateKey = (length, characters) => {
  let result = [];
  for (let i = 1; i <= length; i++) {
    result.push(characters[Math.floor(Math.random() * (characters.length))])
  };
  return result.join('');
};

// Example
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const key = generateKey(16, characters);
console.log(key);