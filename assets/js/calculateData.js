const invoiceBody = document.querySelector('invoice-logo')

// Invoice details block elements
const invoiceNumber = document.getElementById('invoice-number').innerText
const invoiceNumberValue = document.getElementById('invoice-number-value').value
const invoiceDate = document.getElementById('invoice-date').innerText
const invoiceDateValue = document.getElementById('invoice-date-value')
const dueDateDivCheck = document.getElementById('due-date-div')
const dueDate = document.getElementById('due-date').innerText
const dueDateValue = document.getElementById('due-date-value')
let invoiceDetailsObject = {}

// Invoice more details block elements
const moreInfoFieldContainer = document.getElementById('invoice-info-details')
let invoiceMoreDetailsObject = {}

// Logo Image block element

const previousImgUrl = "http://127.0.0.1:5500/assets/images/image-placeholder1.png"
let logoImageUrl = {}

///////////////////////////////////////////////////////////////
function allInOnePack(){
    makeObjectOfInvoiceDetails()
    makeObjectOfInvoiceMoreDetails()
    makeLogoImageObject()
}
///////////////////////////////////////////////////////////////



function makeObjectOfInvoiceDetails(){
    invoiceDetailsObject = {
        [`${invoiceNumber}`]:`${invoiceNumberValue}`,
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
            invoiceMoreDetailsObject[`${moreDetailsFieldTitle}-${i}`] = `${moreDetailsFieldValue}`
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

