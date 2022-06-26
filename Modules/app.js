'use scrict'

const ourModules= require("./ourModules.js")

let NamesArr=['Hodaya', 'Esty', 'Temmy', 'Nechami', 'Shira', 'Michal', 'Yaffi']
//Exercise 1
console.log(ourModules.findInArr(NamesArr, 'Hodaya'));
console.log(ourModules.findInArr(NamesArr, 'bcdhbsb'));

//Exercise 2
let str="Hi my name is Hodaya Basher"
console.log(ourModules.strToArray (str));

//Exercise 3
console.log(ourModules.maxSalary());