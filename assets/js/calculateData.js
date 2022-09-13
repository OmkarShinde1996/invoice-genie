const invoiceNumber = document.getElementById('invoice-number').innerText
const invoiceNumberValue = document.getElementById('invoice-number-value').value
const invoiceDate = document.getElementById('invoice-date').innerText
const invoiceDateValue = document.getElementById('invoice-date-value').value
const dueDateDivCheck = document.getElementById('due-date-div')
const dueDate = document.getElementById('due-date').innerText
const dueDateValue = document.getElementById('due-date-value').value


function makeObjectOfInvoiceDetails(){
    let invoiceDetailsObject = {
        [`${invoiceNumber}`]:`${invoiceNumberValue}`,
        [`${invoiceDate}`]:`${invoiceDateValue}`
    }

    if(dueDateDivCheck.classList.contains('d-none') == false){
        invoiceDetailsObject[`${dueDate}`] = `${dueDateValue}`
    }

}