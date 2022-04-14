//receive 2 commandline arguments a URL and a LOCAL FILE PATH
const fs = require('fs');
const url = process.argv[2];
const filePath = process.argv[3];
const request = require("request");


// 2 async operations
//Make an HTTP request and wait for response
request(url, (error, response, body) => {
  //console.log("error:", error); // Print the error if one occurred
  if (response.statusCode === 200) {

    //After request is complete take data received and write it to local filesystem
    fs.writeFile(filePath, body, error => {
      if (error) {
        console.log(error);
      }
    });
  } else {
    console.log("ERROR: Invalid URL");
    process.exit();
  }
  //Upon completing print a message "Downloaded and saved 1235 bytes to ./index.html"
  console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`);
  
});
