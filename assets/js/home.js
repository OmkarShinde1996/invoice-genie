let tableRows = []
let tableCols = []
let counter = 0
let counterToDeleteColRow = 0
let itemNo = 1
let colsLength = document.querySelector('.column-header').cells.length
let definedRowCells = [
    `<div>${itemNo}</div>`,
    `<input type="text" value="" id="item" placeholder="Item name">`,
    `<input type="number" value="" id="quantity" placeholder="Quantity">`,
    `<input type="number" value="" id="rate" placeholder="Rate">`,
    `<input type="number" value="" id="amount" placeholder="Amount">`,
]



function addRow() {
    // itemNo++
    definedRowCells[0] = `<div>${itemNo}</div>`
    var table = document.querySelector(".table-row");
    var row = table.insertRow();
    addCellInRowFromRow(row)
    tableRows.push(row)
    // console.log(itemNo)
}
  
function deleteRow() {
    if(itemNo==1){
        return
    }
    document.querySelector(".table-row").deleteRow(itemNo-2);
    tableRows.pop()
    itemNo--
    // console.log(itemNo)
}

function addCol(){
    counter++
    let header = document.querySelector(".column-header")
    let html = `<th contenteditable="true" class="text-start" scope="col" id="${counter}">Click to edit</th>`
    header.innerHTML += html
    tableCols.push(html)
    colsLength++
    definedRowCells.push(`<input type="text" value="" id="enter-text" placeholder="Enter text">`)
    for(let i=0; i<tableRows.length; i++){
        addCellinRowFromCol(tableRows[i])
    }
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
    // console.log(tableRows)
    for(let i=0; i<tableRows.length; i++){
        deleteCellInRowFromCol(tableRows[i])
    }
}


function totalColRow(){
    console.log(tableRows.length)
    console.log(document.querySelector('.column-header').cells.length)
}


function addCellInRowFromRow(rowId){
    itemNo++
    // console.log('before',itemNo)
    for(let j=0; j<colsLength;j++){
        rowId.insertCell(j).innerHTML = definedRowCells[j]
    }
    
}

function addCellinRowFromCol(rowId){
    rowId.insertCell(colsLength-1).innerHTML = '<input type="text" value="" id="enter-text" placeholder="Enter text">'
}

function deleteCellInRowFromCol(rowId){
    rowId.deleteCell(colsLength)
}
