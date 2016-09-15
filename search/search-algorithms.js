'use strict'

exports.linearSearch = function(array, val) {
  for (var i = 0; i < array.length; i++) {
    // If item found, return index
    if (array[i] === val) { return i }
  }
  // Item not found
  return -1;
}

exports.binarySearch = function binarySearch(array, value, min = 0, max = array.length - 1) {
  // Set midIdx and current value
  var curIdx = Math.floor((min+max)/2)
  var curVal = array[curIdx]

  // If min has surpassed max, array has been fully checked
  if (min > max) return -1;
  
  // Search val = midpoint val
  if (value === curVal) {
    // Return curIdx
    return curIdx
  // Search val < midpoint val
  } else if (value < curVal) {
    // curIdx - 1 becomes new max; recursive run function
      // We already checked the value wasn't curIdx
      // So we can safely eliminate it from our range
    return binarySearch(array, value, min, curIdx - 1)

  // Search val > midpoint val
  } else {
    // curIdx + 1 becomes new min; recursive run function
      // // We already checked the value wasn't curIdx
      // So we can safely eliminate it from our range
    return binarySearch(array, value, curIdx + 1, max)
  }
}


