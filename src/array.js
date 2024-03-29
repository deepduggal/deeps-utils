/**
 * Remove duplicates from an array
 */
export const removeDuplicates = (arr) => {
  return [...new Set(arr)];
};

/**
 * Merge two arrays
 */
export const mergeArrays = (arr1, arr2) => {
  return [...arr1, ...arr2];
};