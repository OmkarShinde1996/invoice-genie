//*******************************************************************************************************/
//                                         Getting calculations done
//*******************************************************************************************************/

//Calculation subTotal------------------------------------------------------------------------------------

function calculateAmount(){
    let tableBody = document.querySelector('.table-row').children
    // let totalAmountDiv = document.querySelector('#amount')
    let totalAmountDiv
    let totalAmount = 0
    let tax = 0
    let quantity = 0
    let rate = 0
    let totalAmountWithTax = 0
    for(let i=0; i<tableBody.length; i++){
        // console.log(tableBody[i].cells[4].children[0].value)
        totalAmountDiv = tableBody[i].cells[tableBody[i].cells.length-1].children[0]
        tax = Number(tableBody[i].cells[tableBody[i].cells.length-4].children[0].value) //This will give the tax rate value
        quantity = Number(tableBody[i].cells[tableBody[i].cells.length-3].children[0].value) //This will get quantity value
        rate = Number(tableBody[i].cells[tableBody[i].cells.length-2].children[0].value) //This will get rate value
        
        totalAmount = quantity*rate
        totalAmountWithTax = (totalAmount+((totalAmount*tax)/100)).toFixed(2)
        totalAmountDiv.value = totalAmountWithTax
        // console.log(totalAmountWithTax)
    }
    // totalAmountDiv.value = totalAmount
}
//=========================================================================================



//=========================================================================================

function calculateSubTotal(){
    // console.log(document.getElementById('amount').value)
    let tableBody = document.querySelector('.table-row').children
    let subTotalDiv = document.querySelector('#sub-total-amount')
    let subTotal = 0
    for(let i=0; i<tableBody.length; i++){
        // console.log(tableBody[i].cells[4].children[0].value)
        subTotal += Number(tableBody[i].cells[tableBody[i].cells.length-1].children[0].value)
    }
    subTotalDiv.innerText = subTotal.toFixed(2)

    //Calculating Round Total Amount  discount-amount
    let TotalAmountTillDiv = document.querySelector('#total-amount')
    let discountAmount = document.querySelector('#discount-amount').value
    let totalAmountTillNow = subTotal - discountAmount
    TotalAmountTillDiv.innerText = totalAmountTillNow.toFixed(2)
}



//Calculating subtotal ends here--------------------------------------------------------------------------