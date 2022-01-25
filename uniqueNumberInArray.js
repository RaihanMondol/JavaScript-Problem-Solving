const numbers = [2, 5, 8, 2, 5, 9, 6, 8, 9];
const duplicates = numbers.filter(function(value, index, array){
    return array.indexOf(value) == index;
});
console.log(duplicates);