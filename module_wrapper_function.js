// Node.js module wrapper function

(function(exports, require, module, __filename, __dirname) {
   // Module code 
   // write your code here
});

// this is an example code 
console.log(__filename); //  your filename path
console.log(__dirname);
 
 var url = 'http://mylogger.io/log'; // we keep this url private  variable

function log(message) {
    // send an http request 
    console.log(message);  // log this is scope of this module
}

 module.exports = log;

