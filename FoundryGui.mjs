var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: !0 });
var __defProp2 = Object.defineProperty, __name2 = __name((target, value) => __defProp2(target, "name", { value, configurable: !0 }), "__name");
import { j as join, c as compare } from "./vendor.mjs";
let savedTokenArt;
async function getTokenArt() {
    if (savedTokenArt !== void 0) return savedTokenArt;
    let tokenArtRequest = await fetch("./pdftofoundry.json"), tokenArtJson = tokenArtRequest.ok ? await tokenArtRequest?.json() : void 0, tokenArt = tokenArtJson?.art ?? {};
    const tokenArtSetting = game.settings.get("pdftofoundry", "tokenart");
    if (tokenArtSetting) {
        let basePath = game.settings.get("pdftofoundry", "basePath");
        basePath === "./pdftofoundry/" && (basePath = "./"), tokenArt = {
            ...Object.fromEntries(Object.entries(tokenArtSetting).map(([x, _]) => {
                const [prefix, npcId] = x.split("/", 2), newV = { actor: join(basePath, prefix, `${npcId}.actor.webp`), token: join(basePath, prefix, `${npcId}.token.webp`) };
                return [x, newV]
            })), ...tokenArt
        }
    } return savedTokenArt = tokenArt, tokenArt
} __name(getTokenArt, "getTokenArt"), __name2(getTokenArt, "getTokenArt");
async function setTokenArt(art) { savedTokenArt = art } __name(setTokenArt, "setTokenArt"), __name2(setTokenArt, "setTokenArt");
const minimumVersion = "1.0.0", _PdfImporter = class {
    static { __name(this, "_PdfImporter") } constructor() { Hooks.once("init", () => { this.hookImportButton(), game.settings.register("pdftofoundry", "basePath", { name: "Base Path", hint: "Path to place images", scope: "world", config: !0, default: "./pdftofoundry/", type: String }), game.settings.register("pdftofoundry", "alwaysCreateScenes", { name: "Always Create Scenes", hint: "When importing things like Flip mats/Interactive Maps, always create the scene even if it is updating an existing one", scope: "world", config: !0, default: !1, type: Boolean }), game.settings.register("pdftofoundry", "alwaysUseImportedIcons", { name: "Always use imported icons", hint: "If this is true, then PDF to Foundry will not consider art from other modules (such as the Bestiary Token Pack) when creating actors in your world for a module. If this is false, then it will potentially use any art provided by other modules.", scope: "world", config: !0, default: !1, type: Boolean }), game.settings.register("pdftofoundry", "resizeImages", { name: "Resize scene images", hint: "[legacy mode] Resize the scene images to be the same size as they are in FoundryVTT. For instance, if the scene is 30x24 tiles then it would be 3000x2400 pixels on disk as well as in FoundryVTT.", scope: "world", config: !0, default: !1, type: Boolean }), game.settings.register("pdftofoundry", "npctokenframe", { name: "Token Frame", hint: "Image path for frames around NPCs", scope: "world", config: !0, default: "modules/pdftofoundry/default-frame-npc.png", type: String }), game.settings.register("pdftofoundry", "tokenart", { name: "Token Art Locations [DEPRECATED]", scope: "world", config: !1, type: Object, default: {} }), game.settings.register("pdftofoundry", "useTokenArt", { name: "Use actor/token images", hint: "Automatically replace actor/token images when importing from compendiums. Disable if you have other sources for token images that you prefer.", scope: "world", config: !0, type: Boolean, default: !0 }), game.pdftofoundry = { extract, extractJournals, generateNpcLookupTable, import: () => this.importFromPDFDialog() }, getTokenArt() }) } hookImportButton() {
        Hooks.on("renderSettings", (app, html, data) => {
            console.log("PDFToFoundry | Adding pdf import button to settings tab");
            const importButton = $('<div><button class="bestiary-browser-btn"><i class="fas fa-fire"></i> PDF Importer</button></div>');
            game.user.isGM && html.find("ul#game-details").after(importButton), importButton.click(ev => {
                if (ev.preventDefault(), !compare(game.system.version, minimumVersion, ">=")) return ui.notifications.error(`You need to be using a version of the pf2e system at least ${minimumVersion}. You are only using version ${game.system.version}!`);
                this.importFromPDFDialog()
            })
        })
    } async importFromPDFDialog() {
        new Dialog({
            title: "Import PDF (version 4.1.1)", content: await renderTemplate("modules/shadowdark-pdf-importer/import-window.html", {}), buttons: {
                import: {
                    icon: '<i class="fas fa-file-import"></i>', label: "Import PDF", callback: async html => {
                        if (html instanceof HTMLElement) return;
                        const form = html.find("form")[0];
                        if (!form.data.files.length) return ui.notifications.error("You did not upload a data file!");
                        (await import("./importer.mjs")).generateData(form.data.files[0])
                    }
                }, no: { icon: '<i class="fas fa-times"></i>', label: "Cancel" }
            }, default: "import"
        }, { id: "pdftofoundry-importdialog", width: 460, height: "fit-content", resizable: !1, tabs: [{ navSelector: "nav", contentSelector: "section.pdftofoundry-content", initial: "summary" }] }).render(!0)
    }
};
__name2(_PdfImporter, "PdfImporter");
let PdfImporter = _PdfImporter;
function copyToClipboard(text) {
    const input = document.createElement("textarea");
    input.value = text, document.body.appendChild(input), input.select(), document.execCommand("copy"), document.body.removeChild(input)
} __name(copyToClipboard, "copyToClipboard"), __name2(copyToClipboard, "copyToClipboard");
function extract() {
    const scene = game.scenes.active, walls = scene.walls.map(x => JSON.stringify(x)), lights = scene.lights.map(x => JSON.stringify(x)), drawings = scene.drawings.map(x => JSON.stringify(x)), output = `{
`+ (`"walls": [
`+ walls.map(x => "    " + x).join(`,
`) + `
],
"lights": [
`+ lights.map(x => "    " + x).join(`,
`) + `
],
"drawings": [
`+ drawings.map(x => "    " + x).join(`,
`) + `
]`).split(`
`).map(x => "    " + x).join(`
`) + `
}
`;
    console.log("PDFToFoundry | Data copied to clipboard"), copyToClipboard(output);
    const id = scene.background.src.split("\\").pop().split("/").pop().split(".").shift();
    ui.notifications.info(`Copied journal/token information for ${scene.name} (${id}) to clipboard`)
} __name(extract, "extract"), __name2(extract, "extract");
function getJournalData(journalDocument) {
    const journalPage = game.journal.get(journalDocument.entryId).pages.get(journalDocument.pageId);
    return { x: journalDocument.x, y: journalDocument.y, id: journalPage.flags.pdftofoundry.id, text: journalDocument.text }
} __name(getJournalData, "getJournalData"), __name2(getJournalData, "getJournalData");
function getTokenData(tokenDocument) {
    var _a, _b, _c, _d, _e;
    let ret = { id: tokenDocument.actor.flags.pdftofoundry.id, x: tokenDocument.x, y: tokenDocument.y };
    (_a = tokenDocument.actorData) != null && _a.name && (ret.name = (_b = tokenDocument.actorData) == null ? void 0 : _b.name);
    const traits = ((_e = (_d = (_c = tokenDocument.actorData) == null ? void 0 : _c.traits) == null ? void 0 : _d.traits) == null ? void 0 : _e.value) ?? [];
    return traits && traits.includes("elite") ? ret.elite = !0 : traits && traits.includes("weak") && (ret.weak = !0), ret
} __name(getTokenData, "getTokenData"), __name2(getTokenData, "getTokenData");
function extractJournals() {
    const scene = game.scenes.active, journals = scene.notes.contents.map(x => JSON.stringify(getJournalData(x))), tokens = scene.tokens.contents.map(x => JSON.stringify(getTokenData(x))), output = (`journals: [
`+ journals.map(x => "    " + x + `,
`).join("") + `],
tokens: [
`+ tokens.map(x => "    " + x + `,
`).join("") + "]").split(`
`).map(x => "    " + x).join(`
`);
    console.log("PDFToFoundry | Data copied to clipboard"), copyToClipboard(output);
    const id = scene.background.src.split("\\").pop().split("/").pop().split(".").shift();
    ui.notifications.info(`Copied journal/token information for ${scene.name} (${id}) to clipboard`)
} __name(extractJournals, "extractJournals"), __name2(extractJournals, "extractJournals");
function generateNpcLookupTable() {
    const data = game.packs.contents.flatMap(x => Array.from(x.index.values()).filter(k => k.type == "npc" || k.type == "hazard" || k.type == "character").map(k => ({ uuid: `Compendium.${x.metadata.system}.${x.metadata.name}.${k._id}`, name: k.name }))), output = JSON.stringify(data);
    copyToClipboard(output)
} __name(generateNpcLookupTable, "generateNpcLookupTable"), __name2(generateNpcLookupTable, "generateNpcLookupTable"), new PdfImporter;
export { getTokenArt as g, setTokenArt as s };
