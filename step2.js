// 1) Sum To Zero
function addToZero(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === 0) {
          return true;
        }
      }
    }
    return false;
  }
  // Runtime: O(n^2) - The function uses nested loops to check all pairs of numbers in the array.
  
  addToZero([]);               // false
  addToZero([1]);              // false
  addToZero([1, 2, 3]);         // false
  addToZero([1, 2, 3, -2]);     // true
  
  
  // 2) Unique Characters
  function hasUniqueChars(word) {
    const charSet = new Set();
    for (let char of word) {
      if (charSet.has(char)) {
        return false;
      }
      charSet.add(char);
    }
    return true;
  }
  // Runtime: O(n) - The function iterates through each character in the word and uses a Set for constant-time lookups.
  
  hasUniqueChars("Monday");     // true
  hasUniqueChars("Moonday");    // false
  
  
  // 3) Pangram Sentence
  function isPangram(sentence) {
    const alphabetSet = new Set("abcdefghijklmnopqrstuvwxyz");
    for (let char of sentence.toLowerCase()) {
      alphabetSet.delete(char);
    }
    return alphabetSet.size === 0;
  }
  // Runtime: O(n) - The function iterates through each character in the sentence, using a Set for constant-time deletions.
  
  isPangram("The quick brown fox jumps over the lazy dog!");    // true
  isPangram("I like cats, but not mice");                       // false
  
  
  // 4) Longest Word
  function findLongestWord(words) {
    let maxLength = 0;
    for (let word of words) {
      maxLength = Math.max(maxLength, word.length);
    }
    return maxLength;
  }
  // Runtime: O(n) - The function iterates through each word in the list to find the maximum length.
  
  findLongestWord(["hi", "hello"]);     // 5


// Extra Credit Answers:

// 1) Sum To Zero
//    Space Complexity: O(1) - The function uses a constant amount of space, regardless of the input size.

// 2) Unique Characters
//    Space Complexity: O(min(n, m)) - The function uses a Set to store unique characters, where 'n' is the length of the word and 'm' is the size of the character set.

// 3) Pangram Sentence
//    Space Complexity: O(1) - The function uses a constant amount of space, as the size of the alphabet set is fixed.

// 4) Longest Word
//    Space Complexity: O(1) - The function uses a constant amount of space, regardless of the size of the input list.
