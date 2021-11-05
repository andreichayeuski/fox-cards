//requiring path and fs modules
const path = require('path');
const fs = require('fs');
//joining path of directory 
const directoryPath = path.join("../utils/components/arrows/svg");
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    files.forEach(function (file) {
        var regexName = new RegExp('Name=(.*), S.*');
        var regexState = new RegExp('.*State=(.*)(,.*)');
        var regexColor = new RegExp('.*Color=(.*).svg*');
        var name = file.match(regexName);
        var state = file.match(regexState);
        var color = file.match(regexColor);
        console.log(name ? name[1] : '');
        console.log(state ? state[1] : '');
        console.log(file);
        fs.copyFile(path.join("../utils/components/arrows/svg", file),
            path.join("../utils/components/arrows/vue_before", (name ? name[1] : '') + (state ? state[1] : '') + (color ? color[1] : '') + '.vue'),
            function (err) {
                if (err) console.log('ERROR: ' + err);
            });
    });

    let vueComponentsDirectory = path.join("../utils/components/arrows/vue_before");
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
                    .replace('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">', '<template>')
                    .replace('<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">', '<template>')
                    .replace('</svg>', '</template>');

                fs.writeFile(path.join("../utils/components/arrows/vue", file), newValue, function () {
                    console.log("success");
                });

            });
        });
    });
});
