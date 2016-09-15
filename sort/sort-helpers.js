'use strict'

function swap(arr, idx1, idx2) {
  // Use temp var to store one value, and swap them in array
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
  // Return array back to sorting function
  return arr;
}

function merge(arr1, arr2) {

}

function partition(arr, left, right) {

}

module.exports = {
  swap,
  merge,
  partition
}
