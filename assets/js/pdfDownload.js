

let downloadAsPdfBtn = document.getElementById('download-as-pdf')



downloadAsPdfBtn.addEventListener('click', function(){
    html2canvas(document.getElementById('to-be-printed'),{
        scale : 4 //Don't change it will hamper height of the canvas in PDF
    }).then((canvas) => {
        let base64image = canvas.toDataURL('image/png')
        let pdf = new jsPDF()
        let formWidth = pdf.internal.pageSize.width
        let actualHeight = Math.floor((canvas.height * 0.264583)/4.4)
        let actualWidth = Math.floor((canvas.width * 0.264583)/4.4)
        console.log(`Making canvas of ${canvas.width}px x ${canvas.height}px`)
        console.log(`Storing canvas in PDF ${actualWidth}mm x ${actualHeight}mm`)
        console.log({formWidth})
        console.log(screen.width)
        if(screen.width > 768){
            pdf.addImage(base64image,'PNG',0,0,formWidth,actualHeight)
        }else if(screen.width == 768){
            pdf.addImage(base64image,'PNG',0,0,formWidth,actualHeight+178)
        }
        
        
        // pdf.addImage(base64image,1,1,208, 300)
        pdf.save('downloaded.pdf')
    })
})



// downloadAsPdfBtn.addEventListener('click', function () {
//     const convertDivToPdf = document.getElementById('to-be-printed')
//     var opt = {
//         margin: [0, 0, 0, 0],
//         filename: 'invoice.pdf',
//         // image: { type: 'PNG', quality: 0.98 },
//         // html2canvas: { dpi: 192, scale: 5, letterRendering: true, width: convertDivToPdf.offsetWidth, height: convertDivToPdf.offsetHeight},
//         jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait', width: convertDivToPdf.offsetWidth, height: convertDivToPdf.offsetHeight }
//     }
//     // html2pdf().from(convertDivToPdf).set(opt).save()
//     // html2pdf().from(convertDivToPdf).save()
//     // html2pdf(convertDivToPdf,opt)
//     html2pdf().set(opt).from(convertDivToPdf).toPdf().save()
// })


// $('#download-as-pdf').click(function(){
//     $('#to-be-printed').printThis({
//         debug: true,
//         importCSS: true,
//     });
// });