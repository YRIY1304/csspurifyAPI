const fs = require("fs");

fs.rm(__dirname + "/output/collected", { recursive: true, force: true }, () => {
  console.log("Folder was deleted");
  fs.mkdir("./output/collected", {}, () => {
    console.log("created");

    const dirInput = fs.readdirSync(__dirname + "/input");
    const dirOutput = fs.readdirSync(__dirname + "/output");
    const htmlFiles = dirInput.filter((elm) => elm.match(/.*\.(html?)/gi));
    const cssFiles = dirInput.filter((elm) => elm.match(/.*\.(css?)/gi));
    const purifuedFile = dirOutput.filter((elm) => elm.match(/.*\.(css?)/gi));
    fs.copyFile(
      `./input/${htmlFiles[0]}`,
      "./output/collected/new.html",
      (err) => {
        if (err) console.log("Copy html", err);
      }
    );
    fs.copyFile(
      "./output/purified.css",
      `./output/collected/${cssFiles[0]}`,
      (err) => {
        if (err) console.log("Copy css", err);
      }
    );
    htmlFiles.forEach((item) =>
      fs.rm(__dirname + `/input/${item}`, {}, () => {})
    );

    cssFiles.forEach((item) =>
      fs.rm(__dirname + `/input/${item}`, {}, () => {})
    );
    purifuedFile.forEach((item) =>
      fs.rm(__dirname + `/output/${item}`, {}, () => {})
    );
  });
});
