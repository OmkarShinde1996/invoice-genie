

let countries = ['India','USA','UK','Pakistan','Shrilanka','Russia','Germany','London','New york']

let countryOption = document.querySelector('.options-container')

let countryHtml = ''

countries.forEach(country => {
    
    countryHtml += 
    `<div class="option">
        <input type="radio" class="radio" id="${country}" name="country">
        <label for="${country}">${country}</label>
    </div>`
})

countryOption.innerHTML = countryHtml
