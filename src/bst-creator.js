export default function binarySearch(number, array, beginIndex = 0, endIndex = array.length - 1) {
  let middleIndex = Math.floor((beginIndex + endIndex)/2);
  if (array[middleIndex] === number) {
    return middleIndex;
  } else if (beginIndex >= endIndex) {
    return -1
  } else if (array[middleIndex] < number) {
    beginIndex = middleIndex + 1;
    return binarySearch(number, array, beginIndex, endIndex);
  } else if (array[middleIndex] > number) {
    endIndex = middleIndex - 1;
    return binarySearch(number, array, beginIndex, endIndex);
  }
}