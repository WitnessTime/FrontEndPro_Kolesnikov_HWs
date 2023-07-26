let arrayOfNumbers = [1, 2, [1.1, 1.2, 1.3], 3];

function listGenerator(array) {
  let tagsCounter = "<ul>";
  array.forEach( (item) => {
    if (Array.isArray(item)) {
      tagsCounter += "<li><ul>";
      item.forEach( (subitem) => {
        tagsCounter += `<li>${subitem}</li>`;
      });
      tagsCounter += "</ul></li>";
    } else {
      tagsCounter += `<li>${item}</li>`;
    };
  });
  tagsCounter += "</ul>";
  document.body.innerHTML = tagsCounter;
};

listGenerator(arrayOfNumbers);