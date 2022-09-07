
// Table logic-------------------------------------------------------------------------------------------
let tableRows = []
let tableCols = []
let counter = 0
let counterToDeleteColRow = 0
let itemNo = 1
let colsLength = document.querySelector('.column-header').cells.length
let definedRowCells = [
    `<div>${itemNo}</div>`,
    `<input type="text" value="" id="item" placeholder="Item name" style="width: 250px;">`,
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

// Table logic ends here----------------------------------------------------------------------------------

// Template show hide fields buttons----------------------------------------------------------------------

let addDueDateDiv = document.querySelector('#due-date-div')

function showDueDateField(){
    if(addDueDateDiv.classList.contains('d-none')){
        addDueDateDiv.classList.remove('d-none')
        document.querySelector('#add-due-date-btn').innerHTML = `<div class="invoice-date invoice-info-det-btn"><i class="bi bi-dash-circle-fill me-2"></i><span>Remove Due Date</span></div>`
    }else{
        addDueDateDiv.classList.add('d-none')
        document.querySelector('#add-due-date-btn').innerHTML = `<div class="invoice-date invoice-info-det-btn"><i
        class="bi bi-plus-circle-fill pe-2"></i><span>Add Due Date</span></div>`
    }
}


let addMoreInfoFieldDiv = document.getElementById('invoice-info-details')
let infoFieldCounter = 0

function addNewInfoField(){
    infoFieldCounter++
    let mainDiv = document.createElement('div');
    mainDiv.setAttribute('class','invoice-info py-2')
    mainDiv.setAttribute('id',`added-info-${infoFieldCounter}`)
    mainDiv.innerHTML = 
    `<div contentEditable="true" class="invoice-number invoice-info-det" id="invoice-number">Title</div>
    <div class="invoice-number-input"><input type="text" value="Text" id="invoice-number-value"></div>`
    addMoreInfoFieldDiv.appendChild(mainDiv)
    document.querySelector('#remove-info-field').classList.remove('d-none')
    console.log(infoFieldCounter)
}

function removeLastInfoField(){
    if(infoFieldCounter==1){
        addMoreInfoFieldDiv.removeChild(addMoreInfoFieldDiv.lastElementChild)
        document.querySelector('#remove-info-field').classList.add('d-none')
        return
    }else{
        addMoreInfoFieldDiv.removeChild(addMoreInfoFieldDiv.lastElementChild)
        infoFieldCounter--
        console.log(infoFieldCounter)
    }
    
}

// Template show hide fields buttons ends here------------------------------------------------------------

// From show hide fields buttons--------------------------------------------------------------------------

let addFromEmailBtn = document.querySelector('#from-email')
let addFromPhoneBtn = document.querySelector('#from-mobile')
let addFromGstBtn = document.querySelector('#from-gst')
let addFromPanBtn = document.querySelector('#from-pan')

function showFromEmailField(){
    if(addFromEmailBtn.classList.contains('d-none')){
        addFromEmailBtn.classList.remove('d-none')
        document.querySelector('#from-add-email').innerText = 'Remove Email Id'
    }else{
        addFromEmailBtn.classList.add('d-none')
        document.querySelector('#from-add-email').innerText = 'Add Email Id'
    }
}

function showFromPhoneField(){
    if(addFromPhoneBtn.classList.contains('d-none')){
        addFromPhoneBtn.classList.remove('d-none')
        document.querySelector('#from-add-phone').innerText = 'Remove Phone Number'
    }else{
        addFromPhoneBtn.classList.add('d-none')
        document.querySelector('#from-add-phone').innerText = 'Add Phone Number'
    }
}

function showFromGstField(){
    if(addFromGstBtn.classList.contains('d-none')){
        addFromGstBtn.classList.remove('d-none')
        document.querySelector('#from-add-gst').innerText = 'Remove GST No.'
    }else{
        addFromGstBtn.classList.add('d-none')
        document.querySelector('#from-add-gst').innerText = 'Add GST No.'
    }
}

function showFromPanField(){
    if(addFromPanBtn.classList.contains('d-none')){
        addFromPanBtn.classList.remove('d-none')
        document.querySelector('#from-add-pan').innerText = 'Remove PAN No.'
    }else{
        addFromPanBtn.classList.add('d-none')
        document.querySelector('#from-add-pan').innerText = 'Add PAN No.'
    }
}


// From show hide fields buttons ends here----------------------------------------------------------------

// To show hide fields buttons--------------------------------------------------------------------------

let addToEmailBtn = document.querySelector('#to-email')
let addToPhoneBtn = document.querySelector('#to-mobile')
let addToGstBtn = document.querySelector('#to-gst')
let addToPanBtn = document.querySelector('#to-pan')

function showToEmailField(){
    if(addToEmailBtn.classList.contains('d-none')){
        addToEmailBtn.classList.remove('d-none')
        document.querySelector('#to-add-email').innerText = 'Remove Email Id'
    }else{
        addToEmailBtn.classList.add('d-none')
        document.querySelector('#to-add-email').innerText = 'Add Email Id'
    }
}

function showToPhoneField(){
    if(addToPhoneBtn.classList.contains('d-none')){
        addToPhoneBtn.classList.remove('d-none')
        document.querySelector('#to-add-phone').innerText = 'Remove Phone Number'
    }else{
        addToPhoneBtn.classList.add('d-none')
        document.querySelector('#to-add-phone').innerText = 'Add Phone Number'
    }
}

function showToGstField(){
    if(addToGstBtn.classList.contains('d-none')){
        addToGstBtn.classList.remove('d-none')
        document.querySelector('#to-add-gst').innerText = 'Remove GST No.'
    }else{
        addToGstBtn.classList.add('d-none')
        document.querySelector('#to-add-gst').innerText = 'Add GST No.'
    }
}

function showToPanField(){
    if(addToPanBtn.classList.contains('d-none')){
        addToPanBtn.classList.remove('d-none')
        document.querySelector('#to-add-pan').innerText = 'Remove PAN No.'
    }else{
        addToPanBtn.classList.add('d-none')
        document.querySelector('#to-add-pan').innerText = 'Add PAN No.'
    }
}

// From show hide fields buttons ends here----------------------------------------------------------------

// invoice notes container fields buttons-----------------------------------------------------------------

let addBankDetailsDiv = document.querySelector('#bank-details-con')
let addTermsConditionsDiv = document.querySelector('#terms-con')
let addAdditionalNotesDiv = document.querySelector('#additional-notes-con')

function showBankDetails(){
    if(addBankDetailsDiv.classList.contains('d-none')){
        addBankDetailsDiv.classList.remove('d-none')
        document.querySelector('#add-bank-details').innerHTML = `<i class="bi bi-dash-circle-fill me-2"></i><span>Remove Bank Details</span>`
    }else{
        addBankDetailsDiv.classList.add('d-none')
        document.querySelector('#add-bank-details').innerHTML = `<i class="bi bi-plus-circle-fill pe-2"></i><span>Add Bank Details</span>`
    }
}

function showTermsConditions(){
    if(addTermsConditionsDiv.classList.contains('d-none')){
        addTermsConditionsDiv.classList.remove('d-none')
        document.querySelector('#add-terms-conditions').innerHTML = `<i class="bi bi-dash-circle-fill me-2"></i><span>Remove Terms & Conditions</span>`
    }else{
        addTermsConditionsDiv.classList.add('d-none')
        document.querySelector('#add-terms-conditions').innerHTML = `<i class="bi bi-plus-circle-fill pe-2"></i><span>Add Terms & Conditions</span>`
    }
}

function showAdditionalNotes(){
    if(addAdditionalNotesDiv.classList.contains('d-none')){
        addAdditionalNotesDiv.classList.remove('d-none')
        document.querySelector('#add-additional-notes').innerHTML = `<i class="bi bi-dash-circle-fill me-2"></i><span>Remove Additional Notes</span>`
    }else{
        addAdditionalNotesDiv.classList.add('d-none')
        document.querySelector('#add-additional-notes').innerHTML = `<i class="bi bi-plus-circle-fill pe-2"></i><span>Add Additional Notes</span>`
    }
}

// invoice notes container fields buttons ends here-------------------------------------------------------

// Give Discount Button-----------------------------------------------------------------------------------

let giveDiscountDiv = document.querySelector('#discount-con')

function showDiscountDiv(){
    if(giveDiscountDiv.classList.contains('d-none')){
        giveDiscountDiv.classList.remove('d-none')
        document.querySelector('#discount-on-total').innerHTML = `<i class="bi bi-dash-circle-fill me-2"></i><span>Remove Discount</span>`
    }else{
        giveDiscountDiv.classList.add('d-none')
        document.querySelector('#discount-on-total').innerHTML = `<i class="bi bi-plus-circle-fill pe-2"></i><span>Give Discount</span>`
    }
}

// Give Discount Button ends here-------------------------------------------------------------------------