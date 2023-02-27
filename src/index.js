
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

//var numbers = [3, 56, 2, 48, 5];
//foreach
// var newNumbers = []; numbers.forEach((x) => newNumbers.push(x*2);}); console.log(newNumbers);
//map
// const newNumbers = numbers.map(x=>x*2);
// console.log(newNumbers);
//filter
// const newNumberss = numbers.filter(num => num < 10);
// console.log(newNumberss)
//reduce
// var newNumbersss=numbers.reduce((acc,currnum) => acc+currnum);
// console.log(newNumbersss)
//find : only shows the first value in array
// const newNumberssss = numbers.find(num=> num > 10);
// console.log(newNumberssss);
//find-index : only shows the first value index in array
// const newNumbersssss = numbers.findIndex(num => num > 10);
// console.log(newNumbersssss);

import emojipedia from "./emojipedia";
const newemojipedia = emojipedia.map(function(emojiEntry){
return emojiEntry.meaning.substring(0,100)})
console.log(emojipedia);

ReactDOM.render(<App />, document.getElementById("root"));