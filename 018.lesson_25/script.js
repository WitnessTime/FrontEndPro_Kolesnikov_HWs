let arrayOfSmiles = ['🤯', '😎', '🤡', '👻', '💅'];
const smilesDiv = document.querySelector('#smiles');

arrayOfSmiles.forEach((item, index) => {
    const oneSmileDiv = document.createElement('div');
    smilesDiv.appendChild(oneSmileDiv);
    oneSmileDiv.setAttribute('class', 'oneSmileDiv');
    const smilItself = document.createElement('button');
    smilItself.innerHTML = item;
    oneSmileDiv.appendChild(smilItself);
    const smileCounter = document.createElement('p');
    smileCounter.textContent = 0;
    oneSmileDiv.appendChild(smileCounter);
});

smilesDiv.onclick = countTheVotes;

function countTheVotes(e) {
    if (e.target.tagName == 'BUTTON') {
        let counter = e.target.nextSibling;
        counter.textContent = +counter.textContent + 1;
    };
};