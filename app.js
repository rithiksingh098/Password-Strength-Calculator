var express = require("express");
var app = express();
const bodyparser = require("body-parser");
app.set("views", "./views");
app.set("view engine", "ejs")
app.use('/public', express.static('public'));
app.use(bodyparser.json());
app.use(express.urlencoded({ extended: true }));
const path = require('path');

//global variables
const fs = require('fs')

// Reading data in utf-8 format 
// which is a type of character set. 
// Instead of 'utf-8' it can be  
// other character set also like 'ascii' 
var arr;
fs.readFile('sample probable pswds.txt', 'utf-8', (err, data) => {
    if (err) throw err;

    // Converting Raw Buffer to text 
    // data using tostring function. 
    // console.log(typeof data);
    // console.log(data);
    arr = data.split("\r\n");
    // console.log(arr);
})
var leet = new Object();
leet = {
    "a": ['A', 'a', '4', '@'],
    "b": ['B', 'b', '6', '|3'],
    "c": ['C', 'c', '<', '('],
    "d": ['D', 'd', '[)', '|)'],
    "e": ['E', 'e', '3', '£'],
    "f": ['F', 'f', '|=', ']='],
    "g": ['G', 'g', '6', '&'],
    "h": ['H', 'h', '|-|', '#'],
    "i": ['I', 'i', '1', '|'],
    "j": ['J', 'j', ',|', '_)'],
    "k": ['K', 'k', '|<', '|('],
    "l": ['L', 'l', '1', '|'],
    "m": ['M', 'm', '|\/|', '^^'],
    "n": ['N', 'n', '(\)', '|\|'],
    "o": ['O', 'o', '0', '()'],
    "p": ['P', 'p', '9', '|*'],
    "q": ['Q', 'q', '0,', '(,)'],
    "r": ['R', 'r', '1', ''],
    "s": ['S', 's', '5', '$'],
    "t": ['T', 't', '"|"', '7'],
    "u": ['U', 'u', '(_)', '|_|'],
    "v": ['V', 'v', "'/", '\/'],
    "w": ['W', 'w', '"//', '\/\/'],
    "x": ['X', 'x', '><', '%'],
    "y": ['Y', 'y', "'/", '\|/'],
    "z": ['Z', 'z', '2', '"/_']

}
var sett = new Set();
// function fillset(string s){

// }
// console.log(leet["a"][2]);
var output = '';
app.get("/signup", function (req, res) {
    console.log("get signup");
    res.render("index", {
        output: output
    });
});
app.post("/signup", function (req, res) {
    console.log("post signup");
    console.log(req.body);
    var output = 'Password strength is ';
    if (arr.includes(req.body.password)) {
        output += "LOW";
    }
    res.render("index", {
        output: output
    });
});
app.listen(3000);