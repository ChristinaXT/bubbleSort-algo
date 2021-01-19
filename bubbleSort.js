function bubbleSort (array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if(array[i]<array[j]) {
        // swap values
        let temp = array[j];
        array[j] = array[i];
        array[i] = temp;
      }
     }
  }
  return array;
}
let nums = [3,4,1];
// returns [1,3,4];
bubbleSort(nums);

console.log(bubbleSort(nums));
