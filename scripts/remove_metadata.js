const fs = require('fs');
const path = require('path');


const JSON_LOCATION = "./build/json";

const runMain = () => {

  fs.readdir(JSON_LOCATION, function (err, files) {
    if (err) {
      console.error("Could not list the directory.", err);
      process.exit(1);
    }

    files.forEach(function (file, index) {
      if (file[0] !== '_') {

        let file_path = '../build/json/' + file
        let json = require(file_path)

        console.log(`Opening ${file} ...`)

        /* ================================================== */
        
        if (json['attributes'][2].value === 'Tattoo') {
          json['attributes'][2].value = 'None'
          console.log(`===== Overriding ${file} ...`)
        }

        /* ================================================== */

        const json_string = JSON.stringify(json)

        fs.writeFile('./build/json/' + file, json_string, function(err) {
          if (err) {
            console.log(err);
          } else {
            console.log(`Saved ${file} ...`)
          }
        });
      }
    })
  })
}

runMain();