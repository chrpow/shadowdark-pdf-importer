import { getDocument } from "./node_modules/pdfjs-dist/webpack.mjs"

export default class Foo {
    constructor() {}
    async getTextFromPDF(file) {
        let doc = await getDocument(file).promise;
        let page1 = await doc.getPage(198);
        let content = await page1.getTextContent();
        let strings = content.items.map(function(item) {
            return item.str;
        });
        console.log(strings.join(' '))
        return strings;
    }
}