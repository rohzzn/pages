let pages = [
  "Cover 🟡",
  "Artboard 🎨",
  "Sketch 🖌️",
  "Ideas 💡",
  "Assets 📐",
  "References 📂",
  "Backup 🗃️"
]

let currentPage = figma.currentPage;
currentPage.name = pages[0]

for (let page of pages.slice(1)) {
  let newPage = figma.createPage();
  newPage.name = page;
}

figma.notify("Pages created! ✨");

figma.closePlugin();
