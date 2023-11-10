var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: !0 });
var __defProp2 = Object.defineProperty, __name2 = __name((target, value) =>
    __defProp2(target, "name", {
        value,
        configurable: !0
    }),
    "__name");

import { c as compare } from "./vendor.mjs";
import Foo from "./importer.mjs";

const minimumVersion = "1.0.0", _PdfImporter = class {
    static { __name(this, "_PdfImporter") } constructor() {
        Hooks.once("init", () => {
            this.hookImportButton(),
                // game.settings.register("shadowdark-pdf-importer", "basePath", {
                //     name: "Base Path",
                //     hint: "Path to place images",
                //     scope: "world",
                //     config: !0,
                //     default: "./shadowdark-pdf-importer/",
                //     type: String
                // }),
                game.pdfImporter = {
                    import: () => this.importFromPDFDialog()
                }
        })
    }
    hookImportButton() {
        Hooks.on("renderSettings", (app, html, data) => {
            console.log("Shadowdark PDF Importer | Adding pdf import button to settings tab");
            const importButton = $('<div><button class="bestiary-browser-btn"><i class="fa-solid fa-book-skull"></i> Shadowdark PDF Importer</button></div>');
            game.user.isGM && html.find("ul#game-details").after(importButton), importButton.click(ev => {
                if (ev.preventDefault(), !compare(game.system.version, minimumVersion, ">=")) return ui.notifications.error(`You need to be using a version of the Shadowdark system at least ${minimumVersion}. You are only using version ${game.system.version}!`);
                this.importFromPDFDialog()
            })
        })
    }

    async importFromPDFDialog() {
        new Dialog({
            title: "Import PDF (version 4.1.1)",
            content: await renderTemplate("modules/shadowdark-pdf-importer/import-window.html", {}),
            buttons: {
                import: {
                    icon: '<i class="fas fa-file-import"></i>',
                    label: "Import PDF",
                    callback: async html => {
                        if (html instanceof HTMLElement) return;
                        const form = html.find("form")[0];
                        if (!form.data.files.length) return ui.notifications.error("You did not upload a data file!");
                        const file = form.data.files[0]
                        if (file) {
                            file.arrayBuffer().then(buff => {
                                let x = new Uint8Array(buff);
                                const imp = new Foo();
                                imp.getTextFromPDF(x)
                            });
                        }
                    }
                },
                no: { icon: '<i class="fas fa-times"></i>', label: "Cancel" }
            },
            default: "import"
        },
            {
                id: "pdftofoundry-importdialog",
                width: 460,
                height: "fit-content",
                resizable: !1,
                tabs: [{
                    navSelector: "nav",
                    contentSelector: "section.pdftofoundry-content",
                    initial: "summary"
                }]
            }).render(!0)
    }
};

__name2(_PdfImporter, "PdfImporter");

let PdfImporter = _PdfImporter;

new PdfImporter;