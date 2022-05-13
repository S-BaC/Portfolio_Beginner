let arr = ['a', 'b', 'c'];
for(i in arr){
    console.log("in: ", i);
}
for(i of arr){
    console.log("of: ", i);
}