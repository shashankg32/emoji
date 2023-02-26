var numbers = [3, 56, 2, 48, 5];

//foreach
var newNumbers = [];
numbers.forEach(function double(x){
  newNumbers.push(x*2);
}
);
console.log(newNumbers)

//filter
const newNumberss = numbers.filter(
function (num)
  {
    return num > 10;
  }
);
console.log(newNumberss)

//reduce
var newNumbersss=numbers.reduce(function(acc,currnum)
{
  return acc + currnum
})
console.log(newNumbersss)

//find
const newNumberssss=newNumbers.find(function(num)
{return num>10;})
console.log(newNumberssss)