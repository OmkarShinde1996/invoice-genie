let fillInvoiceTitle = document.getElementById('Invoice-title')
let fillLogoContainer = document.querySelector('.invoice-logo-img')
let fillLogoImg = document.getElementById('invoice-logo')
let fillInvoiceNo = document.getElementById('invoice-number')
let fillInvoiceDate = document.getElementById('invoice-date')
let fillInvoiceDueDate = document.getElementById('due-date')
let fillInvoiceFromText = document.querySelector('#from-text u')
let fillInvoiceFromName = document.querySelector('#from-name strong')
let fillInvoiceFromAdd = document.getElementById('from-add')
let fillInvoiceToText = document.querySelector('#to-text u')
let fillInvoiceToName = document.querySelector('#to-name strong')
let fillInvoiceToAdd = document.getElementById('to-add')
let fillMoreDetailsContainer = document.getElementById('more-details-con')
let fillAdditionalNotesCon = document.getElementById('additional-notes-con')
let fillAdditionalNotes = document.querySelector('.notes')
let fillTotalTAX = document.getElementById('total-tax-amt') //Add Rupee symbol
let fillSubTotalAmt = document.getElementById('sub-total-amt') //Add Rupee symbol
let fillDiscountAmt = document.getElementById('total-discount-amt') //Add Rupee symbol
let fillTotalDueText = document.getElementById('total-text')
let fillTotalDueAmt = document.getElementById('total-due-amt') //Add Rupee symbol
let fillTermsCoditionsCon = document.getElementById('terms-conditions-con')
let fillTermsAndConditions = document.querySelector('.terms')
let fillAccHolderName = document.getElementById('acc-holder-name')
let fillAccNumber = document.getElementById('acc-number')
let fillBankIFSC = document.getElementById('bank-ifsc')
let fillAccType = document.getElementById('acc-type')
let fillBankName = document.getElementById('bank-name')
let fillUpiId = document.getElementById('upi-id')


const actualInvoiceText_deSerialize = localStorage.getItem('actualInvoiceText')
const invoiceDetailsObject_deSerialize = JSON.parse(localStorage.getItem('invoiceDetailsObject'))
const invoiceMoreDetailsObject_deSerialize = JSON.parse(localStorage.getItem('invoiceMoreDetailsObject'))
const logoImageUrl_deSerialize = JSON.parse(localStorage.getItem('logoImageUrl'))
const fromDetailsObject_deSerialize = JSON.parse(localStorage.getItem('fromDetailsObject'))
const toDetailsObject_deSerialize = JSON.parse(localStorage.getItem('toDetailsObject'))
const totalTaxObject_deSerialize = JSON.parse(localStorage.getItem('totalTaxObject'))
const bankDetailsObject_deSerialize = JSON.parse(localStorage.getItem('bankDetailsObject'))
const termsAndConditionsObject_deSerialize = JSON.parse(localStorage.getItem('termsAndConditionsObject'))
const additionalNotesObject_deSerialize = JSON.parse(localStorage.getItem('additionalNotesObject'))
const tableJson_deSerialize = JSON.parse(localStorage.getItem('tableJson'))

function fillInvoice(){

    //Setting up the Invoice text
    // console.log(actualInvoiceText_deSerialize)
    fillInvoiceTitle.innerText = actualInvoiceText_deSerialize
    //Setting up the logo url, if not present then hiding logo container
    if(Object.keys(logoImageUrl_deSerialize).length == 0){
        fillLogoContainer.classList.add('d-none')
    }else{
        fillLogoImg.src = logoImageUrl_deSerialize.logoUrl
    }

}
