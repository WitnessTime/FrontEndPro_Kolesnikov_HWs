let categories = ['History Books', 'Fantasy Books'];
let subCategories = [
    ['History Book 1', 'History Book 2'],
    ['Fantasy Book 1', 'Fantasy Book 2']
];

let prices = [
    ['$12', '$28'],
    ['$34', '$21']
];

const categoriesBlock = document.querySelector('.productsList');
const subCategoriesBlock = document.querySelector('.subProducts');
const infoBlock = document.querySelector('.infoList');

categories.forEach((item, index) => {
    let createLink = categoriesBlock.appendChild(document.createElement('a'));
    createLink.innerHTML = item;
    createLink.classList.add(`category${index}`);

    categoriesBlock.addEventListener('click', (e) => {
        if (e.target.className == `category${index}`) {
            subCategoriesBlock.innerHTML = '';
            infoBlock.innerHTML = '';
            subCategories[index].forEach((subItem, subIndex) => {
                createLink = subCategoriesBlock.appendChild(document.createElement('a'));
                createLink.textContent = subItem;
                createLink.classList.add(`subCategory${subIndex}`);

                subCategoriesBlock.addEventListener('click', (event) => {
                    if (event.target.className == `subCategory${subIndex}`) {
                        infoBlock.innerHTML = '';
                        createLink = infoBlock.appendChild(document.createElement('p'));
                        createLink.textContent = prices[index][subIndex];
                        let createButton = infoBlock.appendChild(document.createElement('button'));
                        createButton.textContent = 'BUY!';

                        createButton.onclick = () => {
                            alert(`You've just bought ${subItem}. Thank you!`);
                            subCategoriesBlock.innerHTML = '';
                            infoBlock.innerHTML = '';
                        };
                    };
                });
            });
        };
    });
});



