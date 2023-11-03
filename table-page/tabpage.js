
document.addEventListener("DOMContentLoaded", function () {
    const saveButton = document.getElementById("save")
    const form = document.getElementById("countForm");
    const resultDiv = document.getElementById("result");
    const columnCountSpan = document.getElementById("columnCount");
    const rowCountSpan = document.getElementById("rowCount");
    const alertDiv = document.querySelector(".alert")

    const gridContainer = document.getElementById("gridContainer");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const columns = document.getElementById("columns").value;
        const rows = document.getElementById("rows").value;
        const firstColumnSize = document.getElementById("first-column").value
        columnCountSpan.textContent = columns;
        rowCountSpan.textContent = rows;

         columnsInt = parseInt(columns, 10);
         rowsInt = parseInt(rows, 10);
         firstColumnSizeInt = parseInt(firstColumnSize, 10)

        if (isNaN(columnsInt) || isNaN(rowsInt) || isNaN(firstColumnSizeInt)) {
            alertDiv.textContent = "Please enter valid numbers for columns and rows."
            return;
        }

        if (columnsInt < 1 || rowsInt < 1 || columnsInt > 20 || firstColumnSizeInt > 4 || firstColumnSizeInt < 1) {
            alertDiv.textContent = "Please enter positive numbers for columns and rows."
            return;
        }

        // Clear previous grid items
        gridContainer.innerHTML = "";

        // Create the grid items
        gridContainer.style.gridTemplateColumns = `${firstColumnSize}fr repeat(${columns - 1}, 1fr)`;
        const tr = document.createElement("tr");
        tr.style.display = "contents"
        for (let i = 0; i < columns; i++){
            const gridItem = document.createElement("th");
            gridItem.classList.add("grid-item");
            gridItem.textContent = i + 1;
            tr.appendChild(gridItem);
        }
        gridContainer.appendChild(tr);
        const tr2 = document.createElement("tr");
        tr2.style.display = "contents"

        for (let i = 0; i < columns * rows - columns    ; i++) {
            const gridItem = document.createElement("td");
            gridItem.classList.add("grid-item");
            gridItem.textContent = i + 1;
            tr2.appendChild(gridItem);
        }
        gridContainer.appendChild(tr2);

        console.log(firstColumnSize, columns)
        resultDiv.style.display = "grid";
    });
    saveButton.addEventListener("click", function ()  {
        localStorage.setItem('row', rowsInt + '')
        localStorage.setItem('col', columnsInt + '')
        localStorage.setItem('firstCol', firstColumnSizeInt + '')
        console.log(localStorage.getItem('row'))
    })
});

