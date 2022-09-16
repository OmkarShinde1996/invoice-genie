
// Logo Image and Invoicce Text block element
let actualInvoiceText
const invoiceBody = document.querySelector('invoice-logo')
const previousImgUrl = "http://127.0.0.1:5500/assets/images/image-placeholder1.png"
let logoImageUrl = {}

// Invoice details block elements
const invoiceNumber = document.getElementById('invoice-number').innerText
const invoiceNumberValue = document.getElementById('invoice-number-value')
const invoiceDate = document.getElementById('invoice-date').innerText
const invoiceDateValue = document.getElementById('invoice-date-value')
const dueDateDivCheck = document.getElementById('due-date-div')
const dueDate = document.getElementById('due-date').innerText
const dueDateValue = document.getElementById('due-date-value')
let invoiceDetailsObject = {}

// Invoice more details block elements
const moreInfoFieldContainer = document.getElementById('invoice-info-details')
let invoiceMoreDetailsObject = {}

// From Details elements
const fromName = document.getElementById('from-name')
const fromAdd = document.getElementById('from-address')
const fromCountry = document.getElementById('from-country')
const fromCity = document.getElementById('from-city')
const fromZip = document.getElementById('from-zip')
const fromState = document.getElementById('from-state')
const fromEmail = document.getElementById('from-email')
const fromPhone = document.getElementById('from-mobile')
const fromGst = document.getElementById('from-gst')
const fromPan = document.getElementById('from-pan')
let fromDetailsObject = {}

// To Details elements
const toName = document.getElementById('to-name')
const toAdd = document.getElementById('to-address')
const toCountry = document.getElementById('to-country')
const toCity = document.getElementById('to-city')
const toZip = document.getElementById('to-zip')
const toState = document.getElementById('to-state')
const toEmail = document.getElementById('to-email')
const toPhone = document.getElementById('to-mobile')
const toGst = document.getElementById('to-gst')
const toPan = document.getElementById('to-pan')
let toDetailsObject = {}

// Totals Details object
let totalTaxObject = {}

//Bank details element & object
const bankDetailsVisible = document.getElementById('bank-details-con')
let bankDetailsObject = {}

//terms & conditions element & object
const termsAndConditionsVisible = document.getElementById('terms-con')
let termsAndConditionsObject = {}

//Additional notes element & object
const additionalNotesVisible = document.getElementById('additional-notes-con')
let additionalNotesObject = {}


///////////////////////////////////////////////////////////////
function allInOnePack(){
    makeVariableOfActualInvoiceText()
    makeObjectOfInvoiceDetails()
    makeObjectOfInvoiceMoreDetails()
    makeLogoImageObject()
    makeFromDetailsObject()
    makeToDetailsObject()
    makeTotalTaxObject()
    makeBankDetailsObject()
    makeTermsAndConditionsObject()
    makeAdditionalNotesObject()
    makeTableJson()
    getRequiredFields()
}
///////////////////////////////////////////////////////////////

function makeVariableOfActualInvoiceText(){
    actualInvoiceText = document.querySelector('.invoice-title').innerText
    console.log(actualInvoiceText)
}

function makeObjectOfInvoiceDetails(){
    invoiceDetailsObject = {
        [`${invoiceNumber}`]:`${invoiceNumberValue.value}`,
        [`${invoiceDate}`]:`${invoiceDateValue.value}`
    }

    if(dueDateDivCheck.classList.contains('d-none') == false){
        invoiceDetailsObject[`${dueDate}`] = `${dueDateValue.value}`
    }
    console.log(invoiceDetailsObject)
}

function makeObjectOfInvoiceMoreDetails(){
    if(moreInfoFieldContainer.innerHTML != ""){
        let count = moreInfoFieldContainer.childElementCount
        for(let i = 0; i < count; i++){
            let moreDetailsFieldTitle = moreInfoFieldContainer.children[i].children[0].innerText
            let moreDetailsFieldValue = moreInfoFieldContainer.children[i].children[1].firstElementChild.value
            invoiceMoreDetailsObject[`${moreDetailsFieldTitle}`] = `${moreDetailsFieldValue}`
        }

    }
    console.log(invoiceMoreDetailsObject)
}

function makeLogoImageObject(){
    const imageUrl = document.querySelector('.invoice-logo img').src
    if(imageUrl != previousImgUrl){
        logoImageUrl.logUrl = imageUrl
    }
    console.log(logoImageUrl)
}

function makeFromDetailsObject(){
    let fromText = document.getElementById('from').innerText
    fromDetailsObject = {
        fromTitle : `${fromText}`,
        fromName : `${fromName.value}`,
        fromAddress : `${fromAdd.value}`,
        fromCity : `${fromCity.value}`,
        fromState : `${fromState.value}`,
        fromCountry : `${fromCountry.value}`,
        fromZip : `${fromZip.value}`
    }

    if(fromEmail.classList.contains('d-none') == false){
        fromDetailsObject.fromEmail = `${fromEmail.value}`
    }
    if(fromPhone.classList.contains('d-none') == false){
        fromDetailsObject.fromPhone = `${fromPhone.value}`
    }
    if(fromGst.classList.contains('d-none') == false){
        fromDetailsObject.fromGst = `${fromGst.value}`
    }
    if(fromPan.classList.contains('d-none') == false){
        fromDetailsObject.fromPan = `${fromPan.value}`
    }

    console.log(fromDetailsObject)
}

function makeToDetailsObject(){
    let toText = document.getElementById('to').innerText
    toDetailsObject = {
        toTitle : `${toText}`,
        toName : `${toName.value}`,
        toAddress : `${toAdd.value},`,
        toCity : `${toCity.value},`,
        toState : `${toState.value}`,
        toCountry : `${toCountry.value}`,
        toZip : `${toZip.value}`
    }

    if(toEmail.classList.contains('d-none') == false){
        toDetailsObject.toEmail = `${toEmail.value}`
    }
    if(toPhone.classList.contains('d-none') == false){
        toDetailsObject.toPhone = `${toPhone.value}`
    }
    if(toGst.classList.contains('d-none') == false){
        toDetailsObject.toGst = `${toGst.value}`
    }
    if(toPan.classList.contains('d-none') == false){
        toDetailsObject.toPan = `${toPan.value}`
    }

    console.log(toDetailsObject)
}

function makeTotalTaxObject(){
    if(selectedTaxIndex != 0 && selectedTaxIndex != undefined){
        const totalTaxTitle = document.querySelector('.tax-headline')
        const totalTaxAmountCalculated = document.querySelector('.tax-total-amount-cal')
        totalTaxObject[`${totalTaxTitle.innerText}`] = `&#8377;${totalTaxAmountCalculated.innerText}`
    }
    const discountText = document.getElementById('discount-text')
    const discountAmount = document.getElementById('discount-amount')
    const totalRoundUp = document.getElementById('total')
    const totalRoundUpAmount = document.getElementById('total-amount')
    totalTaxObject[`${discountText.innerText}`] = `${discountAmount.value}`
    totalTaxObject.subTotal = document.getElementById('sub-total-amount').innerText
    totalTaxObject[`${totalRoundUp.innerText}`] = `${totalRoundUpAmount.innerText}`
    console.log(totalTaxObject)
}

function makeBankDetailsObject(){
    if(!bankDetailsVisible.classList.contains('d-none')){
        bankDetailsObject['Account Holder Name'] = document.getElementById('account-name').value
        bankDetailsObject['Account Number'] = document.getElementById('account-number').value
        bankDetailsObject['Bank IFSC'] = document.getElementById('account-ifsc').value
        bankDetailsObject['Account Type'] = document.getElementById('account-type').value
        bankDetailsObject['Bank Name'] = document.getElementById('bank-name').value
        bankDetailsObject['UPI ID'] = document.getElementById('upi-id').value
    }else{
        bankDetailsObject = {}
    }
    console.log(bankDetailsObject)
}

function makeTermsAndConditionsObject(){
    if(!termsAndConditionsVisible.classList.contains('d-none')){
        termsAndConditionsObject['Terms & Conditions'] = document.getElementById('terms-conditions').value
    }else{
        termsAndConditionsObject = {}
    }
    console.log(termsAndConditionsObject)
}

function makeAdditionalNotesObject(){
    if(!additionalNotesVisible.classList.contains('d-none')){
        additionalNotesObject['Additional Notes'] = document.getElementById('additional-notes-text-area').value
    }else{
        additionalNotesObject = {}
    }
    console.log(additionalNotesObject)
}


/////////////////////////// Function to convert Table to json//////////////////////////


function makeTableJson(){
    function tableToJson(table){
        let data = []
        //First Row headers need to be captured
        let headers = []
        for(let i=0; i<table.rows[0].cells.length; i++){
            headers[i] = table.rows[0].cells[i].innerHTML
        }
        //Travel through cells
        for(let t=0,x=1; t<table.rows.length-1; t++,x++){
            let tableRow = document.querySelector('.table-row').children[t]
            let rowData = {}
            rowData[headers[0]] = x
            for(let j=1; j<tableRow.cells.length; j++){
                rowData[headers[j]] = tableRow.cells[j].children[0].value
            }
            data.push(rowData)
        }
        return data
    }

    let tableJson = JSON.stringify(tableToJson(document.querySelector('.table')))

    console.log(tableJson)
}


function getRequiredFields(){
    let requiredFields = {}

    let arrOfRequiredFields = document.querySelector('.invoice-form').querySelectorAll('[required]')
    console.log(arrOfRequiredFields)
}