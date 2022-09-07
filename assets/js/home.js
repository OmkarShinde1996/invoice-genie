let tableRows = []
let tableCols = []
let counter = 0
let counterToDeleteColRow = 0
let colsLength = document.querySelector('.column-header').cells.length


function addRow() {
    var table = document.querySelector(".table-row");
    var row = table.insertRow(0);
    addCellInRowFromRow(row)
    tableRows.push(row)
    console.log(colsLength)
}
  
function deleteRow() {
    document.querySelector(".table-row").deleteRow(0);
    tableRows.pop()
}

function addCol(){
    counter++
    let header = document.querySelector(".column-header")
    let html = `<th scope="col" id="${counter}">Col</th>`
    header.innerHTML += html
    tableCols.push(html)
    for(let i=0; i<tableRows.length; i++){
        addCellinRowFromCol(tableRows[i])
    }
    colsLength++

}

function deleteCol(){
    if(counter == 0){
        return
    }
    tableCols.pop()
    let header = document.getElementById(`${counter}`)
    header.remove()
    counter--
    colsLength--
    console.log(tableRows)
    for(let i=0; i<tableRows.length; i++){
        deleteCellInRowFromCol(tableRows[i])
    }
}

function addColInRows(){
    for(let i=0; i<tableRows.length; i++){
        let html = `<th scope="col" id="text${counterToDeleteColRow}">Add text</th>`
        tableRows[i].innerHTML += html
        counterToDeleteColRow++
    }
}

function totalColRow(){
    console.log(tableRows.length)
    console.log(document.querySelector('.column-header').cells.length)
}


function addCellInRowFromRow(rowId){
    for(let j=0; j<colsLength;j++){
        rowId.insertCell(j).innerHTML = 'new row'
    }
}

function addCellinRowFromCol(rowId){
    rowId.insertCell(colsLength-1).innerHTML = 'new row'
}

function deleteCellInRowFromCol(rowId){
    rowId.deleteCell(colsLength)
}
