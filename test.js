function sortList(array){

array.sort(function(a,b){
    return a - b

});
 return array
}



console.log(sortList([9,10,1,5,7]));