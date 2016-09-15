'use strict'

const swap = require('./sort-helpers').swap;

function bubbleSort(arr){
  // Loop through array
  for (var i = 0; i < arr.length; i++) {
    // Initialize a current and next variable
    var curIdx = 0, 
        nxtIdx = 1;

    // Until the nxtIdx is rightmost element that hasn't been sorted
      // On each iteration, the one more element from right will be sorted
      // So we can reduce the maximum nxtIdx
      // First iteration --> nxtIdx goes to final element
      // 2nd --> 2nd to last
      // 3rd --> 3rd to last, etc
    while (nxtIdx <= arr.length - 1 - i) {
      // If current element is larger than next element, swap them
      if (arr[curIdx] > arr[nxtIdx]) { 
        swap(arr, curIdx, nxtIdx) 
      }
      // Update cur and nxt Idx
      curIdx = nxtIdx;
      nxtIdx += 1;
    } 
  }

  // Return array
  return arr
}

function selectionSort(arr) {
  // Loop through the array
  for (var leftUnsortedIdx = 0; leftUnsortedIdx < arr.length; leftUnsortedIdx++) {
    
    // Set minIdx and minVal for
    var minIdx = leftUnsortedIdx;
    var minVal = arr[minIdx];
    var curIdx = minIdx + 1;

    // Move along the array, until you reach the end
    while (curIdx < arr.length) {

      // If an item is smaller than previous minimum
      // it becomes the new minimum
      if (arr[curIdx] < minVal) {
        minIdx = curIdx;
        minVal = arr[curIdx];
      }
      // Increment curIdx to check next element
      curIdx++
    }

    // One minVal has been found, swap it with whatever
    // is is in the leftUnsortedIdx
    swap(arr, leftUnsortedIdx, minIdx)
  }

  // Return array
  return arr
}

function insertionSort(arr) {
  // Loop through the array
    // Starting at index 1, so we can compare it to at least one item (idx 0)
  for (var i = 1; i < arr.length; i++) {
    var curIdx = i;
    // As long as the current index's value is less than the value to the left
    while (arr[curIdx] < arr[curIdx - 1]) {
      // Swap the values, and decrease the curIdx
      swap(arr, curIdx, curIdx - 1)
      curIdx--
    }
  }

  // Return array
  return arr
}

module.exports = {
  bubbleSort,
  selectionSort,
  insertionSort
};
