const fs = require("fs");
const path = require("path");

function readHomepageData() {
  const filePath = path.join(__dirname, "..", "homepage.11tydata.json");
  try {
    const raw = fs.readFileSync(filePath, "utf8");
    return JSON.parse(raw);
  } catch (error) {
    return {};
  }
}

module.exports = readHomepageData();
