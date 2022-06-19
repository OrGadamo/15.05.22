// var array = ["or", "or1", "or2", "or3", "or4"];
// console.log(array);
// console.log(array[2]);
// for (var i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }
// var numarray = [];
// for (var i = 0; i < 7; i++) {
//   numarray[i] = 100 + i;
// }
// console.log(numarray);
// console.log(numarray[3]);
// for (var i = 0; i < numarray.length; i++) {
//   console.log(numarray[i]);
// }
function isEven(num) {
  if (num % 2 == 0) {
    return true;
  }
  return false;
}
function getRandomArray(arrlenght, randomlimit) {
  var arr = [];
  while (arrlenght > 0) {
    arr[--arrlenght] = Math.floor(Math.random() * (randomlimit + 1));
  }
  return arr;
}
// var onlyarr = getRandomArray(10, 50);
// console.log(onlyarr);
// for (var i = 0; i < onlyarr.length; i++) {
//   if (isEven(onlyarr[i])) {
//     console.log(onlyarr[i]);
//   }
// }
// var myArray = ["hello", 2, "world", "jacob", 6, 7, "bye", 98;
// for (var i = 0; i < myArray.length; i++) {
//   if (typeof myArray[i] === "string") {
//     console.log(myArray[i]);
//   }
// }
// var newArray = [];
// newArray.push(9);
// console.log(newArray);
// var downUpArray = [];
// for (var i = 0; i < 10; i++) {
//   downUpArray.push(i);
// }
// console.log(downUpArray);
//Jacob's Tasks
function sumArray(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
// var arrayT1 = [5, 3, 7, 8, 11];
// console.log(sumArray(arrayT1));

function printItemsArray(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
// var arrayT2 = ["or", "or1", "or2", "or3", "or4"];
// printItemsArray(arrayT2);

function checkItemInArray(item, arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == item) {
      return true;
    }
  }
  return false;
}
// var arrayT3 = [1, 2, 3];
// console.log(checkItemInArray(4, arrayT3));

function getNumOfEven(arr) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (isEven(arr[i])) {
      count++;
    }
  }
  return count;
}
// var arrayT4 = [1, 2, 3, 5, 4, 65, 6, 657, 657, 4, 43];
// console.log("there is " + getNumOfEven(arrayT4) + " even numbers in the array");

function changeArrays(arr1, arr2) {
  var helper;
  if (arr1.length == arr2.length) {
    helper = arr1;
    arr1 = arr2;
    arr2 = helper;
    return true;
  }
  return false;
}
// var arrayT5 = [1, 2, 3, 4];
// var arrayt5 = [3, 2, 1];
// console.log(changeArrays(arrayT5, arrayt5));

function orderArray(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      arr.push(arr.splice(i, 1)[0]);
      i = -1;
    }
  }
  return arr;
}
// var arrayT6 = getRandomArray(10, 100);
// console.log(arrayT6);
// arrayT6 = orderArray(arrayT6);
// console.log(arrayT6);

function maxArrayNum(arr) {
  var max = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
// var arrayT7 = getRandomArray(10, 100);
// console.log(arrayT7);
// console.log(maxArrayNum(arrayT7));

function minArrayNum(arr) {
  var min = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
function minArrayIndex(arr) {
  var min = arr[0];
  var mininex = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      mininex = i;
    }
  }
  return mininex;
}
// var arrayT8 = getRandomArray(10, 100);
// console.log(arrayT8);
// console.log(minArrayNum(arrayT8));
// var arrayt8 = getRandomArray(10, 100);
// console.log(arrayt8);
// console.log(minArrayIndex(arrayt8));

// var arrayT9 = getRandomArray(10, 100);
// console.log(sumArray(arrayT9));

function mulMinMax(arr) {
  return minArrayNum(arr) * maxArrayNum(arr);
}
// var arrayT10 = getRandomArray(10, 100);
// console.log(mulMinMax(arrayT10));

function maxArrayNumEven(arr) {
  var i = arr.length;
  var max = "none";
  var maxindex;
  while (i > 0) {
    if (isEven(arr[i]) && max == "none") {
      max = arr[i];
      maxindex = i;
    } else if (isEven(arr[i])) {
      if (arr[i] > max) {
        max = arr[i];
        maxindex = i;
      }
    }
    i--;
  }
  console.log(maxindex + "." + max);
}
// var arrayT11 = getRandomArray(5, 10);
// console.log(arrayT11);
// maxArrayNumEven(arrayT11);

function getSumOdd(arr) {
  var arrayhelp = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 1) {
      arrayhelp.push(arr[i]);
    }
  }
  return sumArray(arrayhelp);
}
// var arrayT12 = getRandomArray(10, 100);
// console.log(arrayT12);
// console.log(getSumOdd(arrayT12));

function addNameToArray(arr, name) {
  arr.push(name);
  return arr;
}
// var arrayT13 = ["or", "lior"];
// arrayT13 = addNameToArray(arrayT13, "david");
// console.log(arrayT13);

function addEmailToArray(arr, email) {
  arr.unshift(email);
  return arr;
}
// var arrayT14 = ["or@gmail.com", "lior@gmail.com"];
// arrayT14 = addEmailToArray(arrayT14, "daniel@gmail.com");
// console.log(arrayT14);
function addEvenNumToArray(arr, num) {
  if (num % 2 == 0) {
    arr.unshift(num);
    return arr;
  }
  arr.push(num);
  return arr;
}
// console.log(addEvenNumToArray([1, 2, 34, 5], 7));
function getInOutEntryInArray(arr, num) {
  var check = false;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
      check = true;
      arr.splice(i--, 1);
    }
  }
  if (!check) {
    arr.push(num);
  }
  return arr;
}
// var arrayT15 = getRandomArray(10, 50);
// console.log(arrayT15);
// console.log(getInOutEntryInArray(arrayT15, 12));
function getNewEntryArray(arr, num) {
  var check = true;
  for (var i = 0; i < arr.length; i++) {
    if (num <= arr[i]) {
      check = false;
    }
  }
  if (check) {
    arr.unshift(num);
  } else {
    arr.push(num);
  }
  return arr;
}
// var arrayT16 = getRandomArray(10, 10);
// console.log(getNewEntryArray(arrayT16, 10));
function cutByArrayLength(arr, num) {
  if (num < arr.length) {
    arr.splice(num);
  }
  return arr;
}
// var arrayT17 = getRandomArray(10, 50);
// console.log(cutByArrayLength(arrayT17, 2));
