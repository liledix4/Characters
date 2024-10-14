export function readFile(file, mimeType, callback) {
    const rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType(mimeType);
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}