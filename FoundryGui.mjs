var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: !0 });
var __defProp2 = Object.defineProperty, __name2 = __name((target, value) =>
    __defProp2(target, "name", {
        value,
        configurable: !0
    }),
    "__name");

import { c as compare } from "./vendor.mjs";
import Importer from "./importer.mjs";

const minimumVersion = "1.5.1", _PdfImporter = class {
    static { __name(this, "_PdfImporter") } constructor() {
        Hooks.once("init", () => {
            this.hookImportButton(),
                game.settings.register("shadowdark-pdf-importer", "useAlias", {
                    name: "Use Common Names",
                    hint: "Use common names for creatures rather than their headings in their statblock. For instance, \"Brown Bear\" instead of \"Bear, Brown\"",
                    scope: "world",
                    config: !0,
                    default: true,
                    type: Boolean
                }),
                game.settings.register("shadowdark-pdf-importer", "useSizeData", {
                    name: "Include Size Data",
                    hint: "Grow the token to match the creature's physical size. *NOTE* since creature size rules are not part of the rules as written, these are assumptions based on artwork and common sense. If unselected, all creatures will be the same size as player character tokens.",
                    scope: "world",
                    config: !0,
                    default: true,
                    type: Boolean
                }),
                game.pdfImporter = {
                    import: () => this.importFromPDFDialog()
                }
        })
    }
    hookImportButton() {
        Hooks.on("renderSettings", (app, html, data) => {
            console.log("Shadowdark PDF Importer | Adding pdf import button to settings tab");
            let importButton = $('<div><button class="bestiary-browser-btn"><i class="fa-solid fa-book-skull"></i> Shadowdark PDF Importer</button></div>');
            let findStr = "ul#game-details";
            
            if (game.version.startsWith("13.")) {
                findStr = ".modules";
                importButton = $('<button type="button"><i class="fa-solid fa-book-skull"></i> Shadowdark PDF Importer</button>');
            }
            
            game.user.isGM && $(html).find(findStr).after(importButton), importButton.click(ev => {
                if (ev.preventDefault(), !compare(game.system.version, minimumVersion, ">=")) return ui.notifications.error(`You need to be using a version of the Shadowdark system at least ${minimumVersion}. You are only using version ${game.system.version}!`);
                this.importFromPDFDialog()
            })
        })
    }

    async importFromPDFDialog() {
        new Dialog({
            title: "Import PDF (version 0.0.6)",
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
                                const imp = new Importer();
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