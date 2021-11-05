//requiring path and fs modules
const path = require('path');
const fs = require('fs');
//joining path of directory 
const directoryPath = path.join(__dirname, "../components/icons/vue_before");
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    console.log(files);
    files.forEach(function (file) {
        fs.readFile(directoryPath + '/' + file, 'utf-8', function (err, data) {
            console.log(data);
            var newValue = data
                .replace('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">', '<template>')
                .replace('<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">', '<template>')
                .replace('</svg>', '</template>');

            fs.writeFile(path.join(__dirname, "../components/icons/vue", file), newValue, function () {
                console.log("success");
            });

        });
    });
    //listing all files using forEach
    /*files.forEach(function (file) {
        // Do whatever you want to do with the file
        console.log(file); 
    });*/
});