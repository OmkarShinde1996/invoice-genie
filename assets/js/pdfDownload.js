

let downloadAsPdfBtn = document.getElementById('download-as-pdf')



downloadAsPdfBtn.addEventListener('click', function () {
    html2canvas(document.getElementById('to-be-printed'), {
        scale: 4 //Don't change it will hamper height of the canvas in PDF
    }).then((canvas) => {
        let base64image = canvas.toDataURL('image/png')
        let pdf = new jsPDF()
        let formWidth = pdf.internal.pageSize.width
        let actualHeight = Math.floor((canvas.height * 0.264583) / 4.4)
        let actualWidth = Math.floor((canvas.width * 0.264583) / 4.4)
        console.log(`Making canvas of ${canvas.width}px x ${canvas.height}px`)
        console.log(`Storing canvas in PDF ${actualWidth}mm x ${actualHeight}mm`)
        console.log({ formWidth })
        console.log(screen.width)

        pdf.addImage(base64image, 'PNG', 0, 0, formWidth, actualHeight)
        // if (screen.width > 768) {
        //     pdf.addImage(base64image, 'PNG', 0, 0, formWidth, actualHeight)
        // } else if (screen.width == 768) {
        //     pdf.addImage(base64image, 'PNG', 0, 0, formWidth, actualHeight)
        // } else if (screen.width < 768) {
        //     pdf.addImage(base64image, 'PNG', 0, 0, formWidth, actualHeight)
        // }

        // let pdfOutput = pdf.output("blob")
        // console.log(pdfOutput)

        // pdf.save('downloaded.pdf')
        window.open(pdf.output("bloburl"), "_blank");
    })
})

