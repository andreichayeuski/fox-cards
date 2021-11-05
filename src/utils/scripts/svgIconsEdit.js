//requiring path and fs modules
const path = require('path');
const fs = require('fs');
//joining path of directory 
const directoryPath = path.join();
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    files.forEach(function (file) {
        var regexName = new RegExp('Name=(.*),.*');
        var regexState = new RegExp('.*State=(.*).svg');
        var name = file.match(regexName);
        var state = file.match(regexState);
        console.log(name ? name[1] : '');
        console.log(state ? state[1] : '');
        console.log(file);
        fs.rename(file, (name ? name[1] : '') + '_' + (state ? state[1] : '') + '.svg', function (err) {
            if (err) console.log('ERROR: ' + err);
        });
    });
});