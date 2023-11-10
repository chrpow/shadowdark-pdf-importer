
/**
 * Retrieves the text of a specif page within a PDF Document obtained through pdf.js 
 * 
 * @param {Integer} pageNum Specifies the number of the page 
 * @param {PDFDocument} PDFDocumentInstance The PDF document obtained 
 **/
function getPageText(pageNum, PDFDocumentInstance) {
    // Return a Promise that is solved once the text of the page is retrieven
    return new Promise(function (resolve, reject) {
        PDFDocumentInstance.getPage(pageNum).then(function (pdfPage) {
            // The main trick to obtain the text of the PDF page, use the getTextContent method
            pdfPage.getTextContent().then(function (textContent) {
                var textItems = textContent.items;
                var finalString = "";

                // Concatenate the string of the item to the final string
                for (var i = 0; i < textItems.length; i++) {
                    var item = textItems[i];

                    finalString += item.str + " ";
                }

                // Solve promise with the text retrieven from the page
                resolve(finalString);
            });
        });
    });
}

/**
 * Extract the test from the PDF
 */

var PDF_URL  = '/path/to/example.pdf';
PDFJS.getDocument(PDF_URL).then(function (PDFDocumentInstance) {

    var totalPages = PDFDocumentInstance.pdfInfo.numPages;
    var pageNumber = 1;

    // Extract the text
    getPageText(pageNumber , PDFDocumentInstance).then(function(textPage){
        // Show the text of the page in the console
        console.log(textPage);
    });

}, function (reason) {
    // PDF loading error
    console.error(reason);
});