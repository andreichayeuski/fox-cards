//requiring path and fs modules
const path = require('path');
const fs = require('fs');
//joining path of directory 
const directoryPath = path.join(__dirname, "../components/icons/svg");
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    files.forEach(function (file) {
        var regexName = new RegExp('(.*)_.*');
        var regexState = new RegExp('.*_(.*).svg');
        var name = file.match(regexName);
        var state = file.match(regexState);
        console.log(name ? name[1] : '');
        console.log(state ? state[1] : '');
        console.log(file);
        fs.copyFile(path.join(__dirname, "../components/icons/svg", file), path.join(__dirname, "../components/icons/vue", (name ? name[1] : '') + (state ? state[1] : '') + '.vue'), function (err) {
            if (err) console.log('ERROR: ' + err);
        });
    });
    //listing all files using forEach
    /*files.forEach(function (file) {
        // Do whatever you want to do with the file
        console.log(file); 
    });*/
});