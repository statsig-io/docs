const fs = require("fs");
const data = require("/Users/anle/Desktop/docs/docs/console-api/openapi/keys.js"); // replace with your file path

const jsonStr = JSON.stringify(data, null, 2); // convert object to JSON string

fs.writeFile("output.json", jsonStr, (err) => {
  if (err) {
    console.error("Error writing file", err);
  } else {
    console.log("Successfully wrote file");
  }
});
