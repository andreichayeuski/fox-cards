//requiring path and fs modules
const path = require('path');
const fs = require('fs');
//joining path of directory 
const directoryPath = path.join("../utils/components/toggles/svg");
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    files.forEach(function (file) {
        var regexName = new RegExp('Name=(.*), S.*');
        var regexState = new RegExp('.*State=(.*).svg');
        var name = file.match(regexName);
        var state = file.match(regexState);
        console.log(name ? name[1] : '');
        console.log(state ? state[1] : '');
        console.log(file);
        fs.copyFile(path.join("../utils/components/toggles/svg", file),
            path.join("../utils/components/toggles/vue_before", (name ? name[1] : '') + (state ? state[1] : '') + '.vue'),
            function (err) {
                if (err) console.log('ERROR: ' + err);
            });
    });

    let vueComponentsDirectory = path.join("../utils/components/toggles/vue_before");
    fs.readdir(vueComponentsDirectory, function (err, files) {
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        console.log(files);
        files.forEach(function (file) {
            fs.readFile(vueComponentsDirectory + '/' + file, 'utf-8', function (err, data) {
                console.log(data);
                var newValue = data
                    .replace('<svg', '<template><svg')
                    .replace('</svg>', '</svg></template>');

                fs.writeFile(path.join("../utils/components/toggles/vue", file), newValue, function () {
                    console.log("success");
                });

            });
        });
    });
});
