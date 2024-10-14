import { readFile } from "./modules/read-file.js";

readFile("../characters.json", "application/json", jsonFile => {
    console.log(JSON.parse(jsonFile));
});