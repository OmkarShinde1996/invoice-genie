let saveAndContinueBtn = document.querySelector('.save-and-continue-con a')


window.onload = function() {
    let templateURL = sessionStorage.getItem('templateURL')
    saveAndContinueBtn.href = templateURL
    console.log(saveAndContinueBtn.href)
}