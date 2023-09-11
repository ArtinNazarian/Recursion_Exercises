/** product: calculate the product of an array of numbers. */

const { type } = require("express/lib/response");

function product(nums) {
  if (nums.length === 0) return 1;

  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i = 0, maxLen = 0) {
  if (words.length === i) return maxLen;
  maxLen = Math.max(words[i].length, maxLen);
  return longest(words, i + 1, maxLen);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, count = 0, newStr = "") {
  if (count > str.length - 1) return newStr;
  newStr += str[count];
  count += 2;
  return everyOther(str, count, newStr);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, left = 0, right = str.length - 1) {
  if (left >= right) return true;

  if (str[left] !== str[right]) {
    return false;
  }
  left++;
  right--;
  return isPalindrome(str, left, right);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, index = 0) {
  if (arr.length === 0) return -1;
  if (arr[0] === val) return index;
  index++;
  return findIndex(arr.slice(1), val, index);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, newStr = "", n = str.length - 1) {
  if (n === -1) return newStr;
  newStr += str[n];
  n--;
  return revString(str, newStr, n);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let arr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") arr.push(obj[key]);
    if (typeof obj[key] === "object") arr.push(...gatherStrings(obj[key]));
  }
  return arr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length - 1) {
  if (left > right) {
    return -1;
  }

  let mid = Math.floor((left + right) / 2);

  if (arr[mid] === val) {
    return mid;
  }

  if (arr[mid] > val) {
    return binarySearch(arr, val, left, mid - 1);
  } else {
    return binarySearch(arr, val, mid + 1, right);
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
