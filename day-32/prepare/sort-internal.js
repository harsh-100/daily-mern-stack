const numberSortFn = (a, b) => {
  if (a < b) {
    return -1;
  } else if (a === b) {
    return 0;
  } else {
    return 1;
  }
};

const numbers = [9, 3, 12, 11, 40, 28, 5];
const sortedNumbers = numbers.sort(numberSortFn);
console.log(sortedNumbers);

//Output
[3, 5, 9, 11, 12, 28, 40];
// In its simplest form, it means that -1 moves the item to the left (before comparing value),
//  0 keeps it where it is, and 1 moves the item to the right (after comparing value)
