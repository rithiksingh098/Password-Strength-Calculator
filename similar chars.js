const fs = require('fs')

// Reading data in utf-8 format 
// which is a type of character set. 
// Instead of 'utf-8' it can be  
// other character set also like 'ascii' 
fs.readFile('sample probable pswds.txt', 'utf-8', (err, data) => {
    if (err) throw err;

    // Converting Raw Buffer to text 
    // data using tostring function. 
    // console.log(typeof data);
    // console.log(data);
    var arr=data.split("\r\n");
    console.log(arr);
})