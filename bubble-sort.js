// function initialBubbleSort(arr) {
//   let i = 0
//   let swap = false;
//     // Iterate through the array
//     while (i < arr.length) {
//       // If the current value is greater than its neighbor to the right
//         // Swap those values
//         let current = arr[i];
//         let next = arr[i+1];
//         let temp;
//         if (current > next) {
//           temp = current;
//           arr[i] = next;
//           arr[i+1] = temp;
//           swap = true;
//           // Do not move this console.log
//           console.log(arr.join(","));
//         }
//         // If you get to the end of the array and no swaps have occurred, return
//         if (i === arr.length - 1 && !swap) return;
//         // Otherwise, repeat from the beginning
//         else if (i === arr.length - 1 && swap) {
//           i = -1;
//           swap = false;
//         }
//         i++;
//     }
// }

// A better approach is as follows:

function bubbleSort(arr) {
  let swap = true;
  while (swap) {
    // Iterate through the array
    swap = false;
    for (let i = 0; i < arr.length - 1; i++) {
      // If the current value is greater than its neighbor to the right
      // Swap those values
      if (arr[i] > arr[i + 1]) {
        [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]];
        swap = true;
        // Do not move this console.log
        // console.log(arr.join(","));
      }
    }
  }
  // If you get to the end of the array and no swaps have occurred, return
  // Otherwise, repeat from the beginning
  return arr;
}

module.exports = bubbleSort;
