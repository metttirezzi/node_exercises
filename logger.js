// simple Login page

var url = 'http://mylogger.io/log'; // we keep this url private  variable

function log(message) {
    // send an http request 
    console.log(message);  // log this is scope of this module
}

module.exports = log;
