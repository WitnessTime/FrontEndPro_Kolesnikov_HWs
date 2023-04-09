window.onload = function () {
    let createTable = document.createElement("table");

    for (let x = 0; x < 10; x++) {
        let tableRow = createTable.insertRow(x);

        for (let y = 0; y < 10; y++) {
            let tabeCell = tableRow.insertCell(y);
            tabeCell.innerHTML = x + 10 * y + 1;
        };
    };
    document.body.appendChild(createTable);
};