let res = 0;
exports.min = function min (array) {
  if (!array || !array.length) return 0;

  res = array[0];
    for (var i = 0; i < array.length; i++) { 
    if (res > array[i]) {
      res = array[i]; 
        } 
    }
    return res;
  } 

exports.max = function max (array) {
  if (!array || !array.length) return 0;

   res = array[0];
    for (var i = 0; i < array.length; i++) { 
        if (res < array[i]) {
          res = array[i]; 
        }
    }
    return res;
  }

exports.avg = function avg (array) {
  if (!array || !array.length) return 0;
  
  let sum = 0;
  res = array[0]
  for (i=0; i < array.length; i++){
    sum += array[i];
  }
    res = sum / array.length;
 
  return res;
}
