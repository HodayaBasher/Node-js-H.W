//Node js H.W. Hodaya Basher
'use strict';

//Module-1
    var fs = require("fs");

const textFileModule=()=>{
    let text;
    fs.readFile('./data.txt', (err, data) => {
        if (err)
            console.log(err);
        else
        {
            console.log(data.toString());
            text= data.toString();
        }  
    })
    return text;
}
//Module-2
const strToArray = (str) => {
    return str.split(" ");
}
//Module-2
const findInArr = (arr, name) => {
    for (let i = 0; i < arr.length; i++) {
        if (array[i] == name)
            return true;
    }
    return false;
}
module.exports={textFileModule,strToArray,findInArr};