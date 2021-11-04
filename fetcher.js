const request = require('request');
const fs = require('fs');
const arr = process.argv.slice(2);
request(`${arr[0]}`, (error, response, body) => {
  if (error) {
    console.log('error :',error);
    return
  };
  fs.writeFile(`${arr[1]}`,body, (err) => {
    if(err) {
      console.log('err :',err);
      return 
    }
    fs.stat(`${arr[1]}`,(er,stat) => {
      if(er) {
        console.log('er :', er);
        return er;
      }
      console.log(`Downloaded and saved ${stat.size} bytes to ${arr[1]}`);
    })
    
  } )
  // console.log('body:', body); // Print the HTML for the Google homepage.
});