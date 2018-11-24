function countUniqueValues(sortedArr){
  // add whatever parameters you deem necessary - good luck!
  var x = 0;
  for(var y = 1; y < sortedArr.length; y++){
      if(sortedArr[x] !== sortedArr[y]){
        x++;
        sortedArr[x] = sortedArr[x];
      }
  }
    console.log(sortedArr);
}

 
countUniqueValues([1,1,1,2,3,4,5,5,7,8])