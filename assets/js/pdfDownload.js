

let downloadAsPdfBtn = document.getElementById('download-as-pdf')
let spinner = document.querySelector('.spinner-border')
let check = document.getElementById('check')


downloadAsPdfBtn.addEventListener('click', e => {
    e.preventDefault();//preventing form from submitting
    downloadAsPdfBtn.innerText = 'Generating and Downloading PDF...'

    console.log(downloadAsPdfBtn.innerText)
    downloadFunction()
    downloadAsPdfBtn.innerText = 'Download as PDF'

    console.log(downloadAsPdfBtn.innerText)
})



// function downloadFunction() {
//     spinner.classList.remove('d-none')
//     html2canvas(document.getElementById('to-be-printed'), {
//         scale: 4 //Don't change it will hamper height of the canvas in PDF
//     }).then((canvas) => {
//         let base64image = canvas.toDataURL('image/png')
//         // let pdf = new jsPDF()
//         let pdf = new jsPDF('p', 'pt','a4',true)
//         let formWidth = pdf.internal.pageSize.width
//         // let actualHeight = Math.floor((canvas.height * 0.264583) / 4.4)
//         let actualHeight = Math.floor((canvas.height * 0.264583) / 1.6)
//         let actualWidth = Math.floor((canvas.width * 0.264583) / 4.4)
//         console.log(`Making canvas of ${canvas.width}px x ${canvas.height}px`)
//         console.log(`Storing canvas in PDF ${actualWidth}mm x ${actualHeight}mm`)
//         console.log({ formWidth })
//         console.log(screen.width)
//         // pdf.addImage(base64image, 'PNG', 0, 0, formWidth, actualHeight)
//         pdf.addImage(base64image, 'PNG', 0, 0, formWidth, actualHeight, undefined,'FAST')
//         if(screen.width <= 768){
//             window.open(pdf.output("bloburl"), "_blank");
//         }else{
//             pdf.save('invoice.pdf')
//         } 
//         // pdf.save('downloaded.pdf')
//         spinner.classList.add('d-none')
//         check.classList.remove('d-none')
//         setTimeout(() => { check.classList.add('d-none') }, 3000) //will show content after 3 sec
//     })
// }


function downloadFunction() {
    spinner.classList.remove('d-none')
    html2canvas(document.getElementById('to-be-printed'), {
        scale: 4 //Don't change it will hamper height of the canvas in PDF
    }).then((canvas) => {
        let base64image = canvas.toDataURL('image/png')
        let pdf = new jsPDF('p', 'pt','a4',true)
        let totalPages = pdf.internal.getNumberOfPages();
        let formWidth = pdf.internal.pageSize.width
        let formHeight = pdf.internal.pageSize.height//----------------------->pageHeight
        let actualHeight = Math.floor((canvas.height * 0.264583) / 1.6)//--------------------->imageHeight
        // let actualHeight = Math.floor((canvas.height * 0.264583) / 1.2)
        let actualWidth = Math.floor((canvas.width * 0.264583) / 4.4)
        let heightLeft = actualHeight;
        var position = 20
        console.log(`Making canvas of ${canvas.width}px x ${canvas.height}px`)
        console.log(`Storing canvas in PDF ${actualWidth}mm x ${actualHeight}mm`)
        console.log({ formWidth })
        console.log(screen.width)
        console.log({ totalPages })  
        pdf.addImage(base64image, 'PNG', 0, 0, formWidth, actualHeight, undefined,'FAST')
        heightLeft -= formHeight;

        while (heightLeft >= 0) {
            position = heightLeft - actualHeight; // top padding for other pages
            pdf.addPage();
            pdf.addImage(base64image, 'PNG', 0, position, formWidth, actualHeight, undefined,'FAST');
            heightLeft -= formHeight;
        }

        if(screen.width <= 768){
            window.open(pdf.output("bloburl"), "_blank");
        }else{
            pdf.save('invoice.pdf')
        }
        spinner.classList.add('d-none')
        check.classList.remove('d-none')
        setTimeout(() => { check.classList.add('d-none') }, 3000) //will show content after 3 sec
    })
}