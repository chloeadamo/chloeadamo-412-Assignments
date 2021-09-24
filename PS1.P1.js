// Helper method that sorts array in reverse order 
const reverse = (a, b) => {
    if (a > b) {
        return -1;
    }
    if (b > a) {
        return 1;
    }
    return 0;
 }

// Function that takes a string into reverse alphabetical order 
const reverseAlphabet = str => {
    const removePunct = str.toLowerCase().replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g,"")
    const removeNums = removePunct.replace(/[0-9]/g,"")
    return removeNums.split("").sort(reverse).join("");
};

console.log(reverseAlphabet("He..llo_")); // Should return "ollhe"
console.log(reverseAlphabet("1ex2io3i?")); // Should return "xoiie"
console.log(reverseAlphabet("supercalifragilisicexpialidocious")); // Should return "xuutsssrrppoollliiiiiiigfeedcccaaa"